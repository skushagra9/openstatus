import * as React from "react";
import type { Metadata } from "next";

import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from "@/app/shared-metadata";
import { MarketingLayout } from "@/components/layout/marketing-layout";

export const metadata: Metadata = {
  ...defaultMetadata,
  twitter: {
    ...twitterMetadata,
  },
  openGraph: {
    ...ogMetadata,
  },
};

export default function PlayLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <MarketingLayout>
      {children}
      {modal}
    </MarketingLayout>
  );
}
