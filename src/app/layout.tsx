import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from "next/font/google";

export const oswald = Oswald({subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Plataforma de Viagens',
  description: 'Plataforma de Viagens, aqui você reserva sua melhor viagem',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body className={`overflow-x-hidden ${oswald.className}`}>{children}</body>
    </html>
  )
}
