"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Seccion = {
  link: [
    { href: "/", text: "Inicio" },
    { href: "/sobreNosotros", text: "Nosotros" },
    { href: "/Servicios", text: "Servicios" },
    { href: "/Contactanos", text: "Contacto" },
    { href: "/about", text: "Blog" },
  ],
};

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1 m-2 p-2 hover:bg-gray-700 rounded-xl transition-colors duration-300"
      >
        <GiHamburgerMenu size="30" color="#356c1f" />
      </button>
      {/* Navbar Móvil */}
      {open && (
        <div className="md:hidden flex flex-col bg-[#356c1f] fixed top-0 left-0 w-full h-full z-40">
          <button
            onClick={() => setOpen(false)}
            className="absolute m-2 p-2 z-50 hover:bg-gray-700 rounded-xl transition-colors duration-300"
          >
            <GiHamburgerMenu size="30" color="White"/>
          </button>
          <div className="w-full md:w-1/2 p-2 pl-10 mb-6 mt-14">
            <Image
              src="/logo.webp"
              alt="Descripción del logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>

          {Seccion.link.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="px-8 py-3 text-xl text-white hover:bg-[#2C2E47] transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}

      {/*Navbar en pantalla normal */}
      <div className="hidden md:flex w-full flex-wrap bg-[#356c1f]">
        <div className="w-full md:w-1/2 p-2 pl-28">
          <Image
            src="/logo.webp"
            alt="Descripción del logo"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="md:w-1/2 flex justify-center">
          {Seccion.link.map((link, index) => (
            <div key={index}>
              <Link
                href={link.href}
                className="px-4 h-full flex items-center justify-center text-xl text-white hover:bg-[#2C2E47] transition-all duration-300"
              >
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
