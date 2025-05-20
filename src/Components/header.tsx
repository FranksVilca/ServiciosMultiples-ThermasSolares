import Image from "next/image";
import Link from "next/link";

const Seccion = {
  link: [
    { href: "/", text: "Incio" },
    { href: "/sobreNosotros", text: "Nosotros" },
    { href: "/Servicios", text: "Servicios" },
    { href: "/Contactanos", text: "Contacto" },
    { href: "/about", text: "Blog" },
  ],
};

const Header: React.FC = () => {
  return (
    <div className="sticky">
      <div className="w-full flex flex-wrap bg-[#356c1f]">
        <div className="w-full md:w-1/2 p-4 pl-28">
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
