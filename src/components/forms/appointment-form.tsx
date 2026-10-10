"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createLeadSchema, isAllowedSource } from "@/lib/lead-validation";

interface AppointmentFormProps {
  campaign?: string;
  source?: string;
}

// Schema built with translated error messages. Validation rules themselves live
// in @/lib/lead-validation so the API route enforces exactly the same checks.
const createAppointmentSchema = (t: (key: string) => string) =>
  createLeadSchema({
    required: t("required"),
    invalidName: t("invalidName"),
    invalidPhone: t("invalidPhone"),
  });

type AppointmentFormValues = z.infer<ReturnType<typeof createAppointmentSchema>>;

export default function AppointmentForm({
  campaign: pageCampaign = "",
  source: pageSource = ""
}: AppointmentFormProps) {
  const pathname = usePathname();
  const t = useTranslations('forms.appointment');
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Pathname-based mapping for pages that use reusable components.
  // next/navigation returns the raw pathname, so the locale prefix (e.g. "/en")
  // has to be stripped before matching or the homepage never resolves on
  // non-default locales.
  const getPathnameDefaults = (path: string) => {
    const withoutLocale = path.replace(/^\/(?:pt|en)(?=\/|$)/, "") || "/";

    if (withoutLocale === "/") return { campaign: "", source: "home" };
    if (withoutLocale.includes("contactos")) return { campaign: "", source: "contactos" };
    return null;
  };

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(createAppointmentSchema(t)),
    defaultValues: {
      FirstName: "",
      telefone: "",
      campaign: "",
      source: "",
      gclid: "",
      gcampaign: "",
      gkeywords: "",
      gmatchtype: "",
      fbclid: "",
      fbcampaign: ""
    },
  });

  // Populate hidden fields from query string parameters
  useEffect(() => {
    if (!isMounted) return;

    const params = new URLSearchParams(window.location.search);

    // Campaign and Source (priority: page props > pathname mapping > empty string)
    const pathnameDefaults = getPathnameDefaults(pathname);

    // Campaign - only from page props or pathname defaults, never from URL params
    const finalCampaign = pageCampaign || pathnameDefaults?.campaign || "";
    form.setValue("campaign", finalCampaign);

    // Source - a URL param may override the page default, but only if it is an
    // allowlisted value. Without this, any visitor (or a mangled ad URL) can
    // write arbitrary junk like "?" or "~?" into the CRM lead source.
    const sourceParam = params.get("source");
    const finalSource =
      (isAllowedSource(sourceParam) ? sourceParam : "") ||
      pageSource ||
      pathnameDefaults?.source ||
      "";
    form.setValue("source", finalSource);

    // Google tracking parameters
    const gclid = params.get("gclid");
    form.setValue("gclid", gclid || "");

    const gcampaign = params.get("gcampaign");
    form.setValue("gcampaign", gcampaign || "");

    const gkeywords = params.get("gkeywords");
    form.setValue("gkeywords", gkeywords || "");

    const gmatchtype = params.get("gmatchtype");
    form.setValue("gmatchtype", gmatchtype || "");

    // Meta/Facebook tracking parameters
    const fbclid = params.get("fbclid");
    form.setValue("fbclid", fbclid || "");

    const fbcampaign = params.get("fbcampaign");
    form.setValue("fbcampaign", fbcampaign || "");
  }, [form, isMounted, pageCampaign, pageSource, pathname]);

  // Don't render form until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-10 bg-white/75 rounded-md animate-pulse" />
          <div className="h-10 bg-white/75 rounded-md animate-pulse" />
        </div>
        <div className="h-10 bg-white/75 rounded-md animate-pulse" />
      </div>
    );
  }

  // Pushes the form_sent event. Called exactly once per submission, only after
  // the outcome is known - previously a 'success' event fired before the
  // response was checked, inflating conversion counts on Salesforce failures.
  const trackSubmission = (
    data: AppointmentFormValues,
    result: "success" | "error"
  ) => {
    if (typeof window === "undefined" || !window.dataLayer) return;

    window.dataLayer.push({
      'event': 'form_sent',
      'form_id': 'appointment-form',
      'form_name': 'Appointment Form',
      'form_destination': window.location.href,
      'page_path': pathname,
      'form_source': data.source || getPathnameDefaults(pathname)?.source || 'unknown',
      'form_campaign': data.campaign || '',
      'form_result': result,
      'gclid': data.gclid || '',
      'gcampaign': data.gcampaign || '',
      'fbclid': data.fbclid || '',
      'fbcampaign': data.fbcampaign || ''
    });
  };

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/salesforce-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      trackSubmission(data, "success");

      setSubmitStatus({
        type: "success",
        message: t('success'),
      });

      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);

      trackSubmission(data, "error");

      setSubmitStatus({
        type: "error",
        message: t('error'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="FirstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={t('namePlaceholder')} className="!bg-white/75 rounded-md text-lg placeholder:text-lg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="tel" placeholder={t('phonePlaceholder')} className="!bg-white/75 rounded-md text-lg placeholder:text-lg" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Hidden fields for campaign and source */}
        <FormField
          control={form.control}
          name="campaign"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="source"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Hidden fields for tracking parameters */}
        <FormField
          control={form.control}
          name="gclid"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gcampaign"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gkeywords"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gmatchtype"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fbclid"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fbcampaign"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {submitStatus.type && (
          <div
            className={`p-4 rounded-md ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white rounded-md text-lg py-6" disabled={isSubmitting}>
          {isSubmitting ? t('submitting') : t('submit')}
        </Button>
      </form>
    </Form>
  );
}
