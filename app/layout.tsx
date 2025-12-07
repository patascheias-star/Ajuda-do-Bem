import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#16a34a",
}

export const metadata: Metadata = {
  title: "AJUDE A LEVAR UM PRATO DE COMIDA PARA QUEM MAIS PRECISA",
  description:
    "Todos os dias, centenas de crianças órfãs e famílias em extrema vulnerabilidade enfrentam a fome. Com sua ajuda, podemos preparar almoços semanais e levar esperança a quem mais precisa.",
  keywords: "doação, ajuda humanitária, moçambique, crianças, fome, vakinha, solidariedade",
  openGraph: {
    title: "Ajude a levar comida para quem mais precisa",
    description: "Sua doação pode ser a diferença entre um dia de fome e um dia de esperança",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
