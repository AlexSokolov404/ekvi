import type React from "react";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";

const GreenHillSans = localFont({
  src: [
    {
      path: "../public/fonts/GreenHillSans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GreenHillSans.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const Sagewold = localFont({
  src: [
    {
      path: "../public/fonts/Sagewold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Sagewold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sagewold",
});

const AkrobatRegular = localFont({
  src: [
    {
      path: "../public/fonts/AkrobatRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AkrobatSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/AkrobatBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-akrobat",
});

export const metadata = {
  title: "ЭКВИ`С",
  description: "Источник дохода ЭКВИ`С, новый вид недвижимости",
  generator: "SokolikTeam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${GreenHillSans.className} ${Sagewold.variable} ${AkrobatRegular.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
