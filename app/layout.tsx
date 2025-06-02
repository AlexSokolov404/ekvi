import type React from "react"
import "./globals.css"
import localFont  from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"

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
    }
  ],
  display: "swap",
});

export const metadata = {
  title: "ЭКВИ`С",
  description: "Источник дохода ЭКВИ`С, новый вид недвижимости",
    generator: 'SokolikTeam'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={GreenHillSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'