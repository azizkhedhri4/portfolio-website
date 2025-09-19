import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CustomCursor from "@/components/custom-cursor";
import NavbarRes from "@/components/navbar";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fediabidi.me'),
  title: "Fedi Abidi - Mechanical Engineer",
  description: "The portfolio of Fedi Abidi, a passionate Mechanical Engineer specializing in CAD design, simulation, and manufacturing.",
  keywords: ["Fedi Abidi", "Mechanical Engineer", "CAD", "ANSYS", "SolidWorks", "CATIA", "Portfolio", "Engineering"],
  authors: [{ name: "Fedi Abidi", url: "https://www.fediabidi.me" }],
  creator: "Fedi Abidi",

  alternates: {
    canonical: '/',
  },

  

  openGraph: {
    type: 'website',
    url: 'https://www.fediabidi.me',
    title: 'Fedi Abidi - Mechanical Engineer',
    description: 'The portfolio of Fedi Abidi, a passionate Mechanical Engineer specializing in CAD design, simulation, and manufacturing.',
    images: [
      {
        url: 'https://www.fediabidi.me/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Fedi Abidi Portfolio',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Fedi Abidi - Mechanical Engineer',
    description: 'The portfolio of Fedi Abidi, a passionate Mechanical Engineer specializing in CAD design, simulation, and manufacturing.',
    images: ['https://www.fediabidi.me/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={robotoSerif.className} suppressHydrationWarning >
      <body className="flex flex-col min-h-screen flex-grow">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen flex-grow">
            <CustomCursor />
            <NavbarRes />
            <main className="flex-grow relative z-10">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
