import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Get Salesforce endpoint from environment variable or use default
    const salesforceEndpoint =
      process.env.SALESFORCE_WEBHOOK_ENDPOINT ||
      "https://reabilitaremcasa.my.salesforce-sites.com/services/apexrest/adsCaller";

    // Transform data to match Salesforce Apex REST API expected format
    // Salesforce expects: fields[fieldName][raw_value]
    const formData = new URLSearchParams();

    // Helper function to safely encode and add field
    const addField = (fieldName: string, value: string | undefined) => {
      if (value) {
        formData.append(`fields[${fieldName}][raw_value]`, value);
      }
    };

    // Helper function to always add field (even if empty) - for required Salesforce fields
    const addFieldRequired = (fieldName: string, value: string | undefined) => {
      formData.append(`fields[${fieldName}][raw_value]`, value || "");
    };

    // Map form fields to Salesforce expected format
    // Required fields (always sent, even if empty)
    addField("FirstName", body.FirstName);
    addField("telefone", body.telefone);
    
    // Optional/hidden fields - always send (even if empty string) to prevent Salesforce exceptions
    addFieldRequired("campaign", body.campaign);
    addFieldRequired("source", body.source);
    addFieldRequired("gclid", body.gclid);
    addFieldRequired("gcampaign", body.gcampaign);
    addFieldRequired("gkeywords", body.gkeywords);
    addFieldRequired("gmatchtype", body.gmatchtype);

    // Prepare headers - Salesforce expects form-urlencoded
    const headers: HeadersInit = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    // Add authentication if provided
    if (process.env.SALESFORCE_ACCESS_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.SALESFORCE_ACCESS_TOKEN}`;
    }

    // Send data to Salesforce as form-urlencoded (which matches Apex params.get())
    const response = await fetch(salesforceEndpoint, {
      method: "POST",
      headers,
      body: formData.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Salesforce webhook error:", errorText);
      return NextResponse.json(
        { error: "Failed to send data to Salesforce", details: errorText },
        { status: response.status }
      );
    }

    const responseData = await response.json().catch(() => ({}));

    return NextResponse.json(
      { success: true, data: responseData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing Salesforce webhook:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

