// src/app/layout.tsx
import "@/app/globals.css";
import Layout from "@/components/Layout";    // <-- aquí importamos nuestro componente
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio de MiEmpresa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Ahora sí envolvemos TODO con nuestro Layout */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
