// src/app/layout.tsx
import "@/app/globals.css";
import Layout from "@/components/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio de MiEmpresa",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
