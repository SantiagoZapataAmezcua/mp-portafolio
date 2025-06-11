// src/components/Layout.tsx
import React from "react";
import NavBar from "./NavBar";     // client component
import Footer from "./Footer";     // server component

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header fijo */}
      <NavBar />

      {/* Main central, desplazado abajo para no tapar el header */}
      <main className="flex-grow mt-16">
        {children}
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
