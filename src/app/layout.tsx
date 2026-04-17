import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DVO - Sistema de Oficina",
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
