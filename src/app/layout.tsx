import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GFO - Gestão de Frota e Oficinas",
  description: "Gestão profissional de veículos e ordens de serviço",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
