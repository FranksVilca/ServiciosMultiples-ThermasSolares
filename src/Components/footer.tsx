import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import RedesSociales from "./RedesSociales";

const data = {
  message: ' "Contáctanos y hagamos de tu evento un éxito "',
  link: [
    { href: "/about", text: "Incio" },
    { href: "/about", text: "Nosotros" },
    { href: "/about", text: "Servicios" },
    { href: "/about", text: "Contacto" },
    { href: "/about", text: "Blog" },
  ],
  celular: "959107196",
  correo: "javieredgardvilcamayta@gmail.com",
};

const Footer: React.FC = () => {
  return (
    <div className="px-10 py-10 bg-[#000] text-[#fff] w-full">
      <div className="pl-56 text-2xl font-serif font-semibold">
        {data.message}
      </div>
      <div className="pl-56 flex flex-wrap gap-4 pt-5">
        <div className="flex-1">
          <div className="font-semibold pb-3 font-serif text-2xl">Enlaces </div>
          <div className="flex flex-wrap gap-0">
            <div className="flex-1">
              {data.link.slice(0, 3).map((link, index) => (
                <li key={index} className="pb-3 group relative">
                  <Link href={link.href} className="inline-block">
                    <span className="text-lg text-white hover:text-[#FFF] transition-colors duration-300 relative">
                      {link.text}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFF] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </div>
            <div className="flex-1">
              {data.link.slice(3).map((link, index) => (
                <li key={index} className="pb-3 group relative">
                  <Link href={link.href} className="inline-block">
                    <span className="text-lg text-white hover:text-[#fff] transition-colors duration-300 relative">
                      {link.text}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fff] transition-all duration-500 group-hover:w-full origin-left"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="font-semibold pb-3 font-serif text-2xl">
            Siguenos{" "}
          </div>{" "}
          <RedesSociales />
        </div>
        <div className="flex-1">
          <div className="font-semibold pb-3 font-serif text-2xl">
            Contacto{" "}
          </div>
          <div className="pb-2 flex gap-2">
            <FaWhatsapp />
            {data.celular}
          </div>
          <div className="pt-1 flex gap-2">
            <MdOutlineMail />
            {data.correo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
