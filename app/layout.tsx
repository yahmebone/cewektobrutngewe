import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
    metadataBase: new URL("https://cewektobrutngewe.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
        description: `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'WExf738mWwKrHznLEXrvEjg_aaNbic78cnQUPrXx0KM',
        yandex: '8c2bd3c87f56c80c',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        "logo": "https://cewektobrutngewe.pages.dev/favicon.ico",
        "url": "https://cewektobrutngewe.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://cewektobrutngewe.pages.dev"
            },
            "foundingDate":"2025-04-10"
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://cewektobrutngewe.pages.dev",
        "description": `${SITENAME} Video bokep indo terbaru viral bocil jilbab abg colmek smp indonesia tante mama sma`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://cewektobrutngewe.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
