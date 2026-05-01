"use client";

import { Link } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { Suspense, ReactNode } from "react";

interface PreservingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

/**
 * Link wrapper that preserves all existing query parameters during navigation.
 * Use this component instead of Next.js Link when you want to maintain URL parameters.
 */
function PreservingLinkContent({
  href,
  children,
  className,
  ...props
}: PreservingLinkProps) {
  const searchParams = useSearchParams();

  // Get current query parameters
  const currentParams = searchParams.toString();

  // Parse the href to check if it already has query parameters
  const [pathWithoutQuery, existingQuery] = href.split("?");

  // Build the final URL with preserved parameters
  let finalHref = pathWithoutQuery;

  // Combine existing params with current params
  const searchParamsObj = new URLSearchParams(existingQuery || "");

  // Add all current params that aren't already in the href
  if (currentParams) {
    const currentParamsObj = new URLSearchParams(currentParams);
    currentParamsObj.forEach((value, key) => {
      if (!searchParamsObj.has(key)) {
        searchParamsObj.append(key, value);
      }
    });
  }

  const queryString = searchParamsObj.toString();
  if (queryString) {
    finalHref += `?${queryString}`;
  }

  return (
    <Link href={finalHref} className={className} {...props}>
      {children}
    </Link>
  );
}

export default function PreservingLink({ href, children, className, ...restProps }: PreservingLinkProps) {
  return (
    <Suspense fallback={<Link href={href} className={className} {...restProps}>{children}</Link>}>
      <PreservingLinkContent href={href} className={className} {...restProps}>
        {children}
      </PreservingLinkContent>
    </Suspense>
  );
}
