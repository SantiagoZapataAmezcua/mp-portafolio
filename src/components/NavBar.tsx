// src/components/NavBar.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto flex items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MiEmpresa
        </Link>

        {/* Menú desktop centrado */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/about" className="hover:underline">
            Sobre mí
          </Link>
          <Link href="/projects" className="hover:underline">
            Proyectos
          </Link>
          <Link href="/contact" className="hover:underline">
            Contacto
          </Link>
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="md:hidden bg-white shadow-lg p-4 space-y-2">
          <Link href="/" className="block hover:underline">
            Inicio
          </Link>
          <Link href="/about" className="block hover:underline">
            Sobre mí
          </Link>
          <Link href="/projects" className="block hover:underline">
            Proyectos
          </Link>
          <Link href="/contact" className="block hover:underline">
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
}
