import { NextRequest, NextResponse } from "next/server";
import { leadSchema, normalizePhone } from "@/lib/lead-validation";

const GENERIC_ERROR =
  "Falha no envio de dados. Por favor, telefone-nos: 210 136 676";

export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    // Validate server-side as well as on the client: this endpoint is public
    // and can be POSTed to directly, bypassing the form entirely.
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      console.warn(
        "Rejected invalid lead submission:",
        JSON.stringify(parsed.error.flatten().fieldErrors)
      );
      return NextResponse.json(
        { error: "Dados inválidos.", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const lead = parsed.data;

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
    addField("FirstName", lead.FirstName);
    // Send the normalized 9-digit national number so Salesforce receives a
    // consistent format regardless of how the user typed it.
    addField("telefone", normalizePhone(lead.telefone));

    // Campaign field - only send if it has a value (empty string causes Salesforce validation errors)
    if (lead.campaign && lead.campaign.trim() !== "") {
      addField("campaign", lead.campaign);
    }

    // Optional/hidden fields - always send (even if empty string) to prevent Salesforce exceptions
    addFieldRequired("source", lead.source);
    addFieldRequired("gclid", lead.gclid);
    addFieldRequired("gcampaign", lead.gcampaign);
    addFieldRequired("gkeywords", lead.gkeywords);
    addFieldRequired("gmatchtype", lead.gmatchtype);
    addFieldRequired("fbclid", lead.fbclid);
    addFieldRequired("fbcampaign", lead.fbcampaign);

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
        { error: GENERIC_ERROR, details: errorText },
        { status: response.status }
      );
    }

    const responseData = await response.json().catch(() => ({}));

    return NextResponse.json({ success: true, data: responseData }, { status: 200 });
  } catch (error) {
    console.error("Error processing Salesforce webhook:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
