import "@uploadthing/react/styles.css";
import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { extractRouterConfig } from "uploadthing/server";
import { TopNav } from "./_components/topnav";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata: Metadata = {
  title: "T3 stack gallery",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body>
          <TopNav />
          {children}
          {modal}
          <div id="modal-root" />
        </body>
      </html>
    </ClerkProvider>
  );
}
