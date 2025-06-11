// src/components/NavBar.tsx
import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <a className="text-xl font-bold">MiEmpresa</a>
        </Link>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/"><a>Inicio</a></Link>
          <Link href="/about"><a>Sobre mí</a></Link>
          <Link href="/projects"><a>Proyectos</a></Link>
          <Link href="/contact"><a>Contacto</a></Link>
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            <Link href="/"><a>Inicio</a></Link>
            <Link href="/about"><a>Sobre mí</a></Link>
            <Link href="/projects"><a>Proyectos</a></Link>
            <Link href="/contact"><a>Contacto</a></Link>
          </div>
        </nav>
      )}
    </header>
  );
}
