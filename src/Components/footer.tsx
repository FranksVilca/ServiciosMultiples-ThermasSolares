import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import RedesSociales from "./RedesSociales";

const data = {
  message: ' "Contáctanos y hagamos de tu evento un éxito "',
  link: [
    { href: "/about", text: "Incio" },
    { href: "/sobreNosotros", text: "Nosotros" },
    { href: "/Servicios", text: "Servicios" },
    { href: "/Contactanos", text: "Contacto" },
    { href: "/about", text: "Blog" },
  ],
  celular: "959107196",
  correo: "javieredgardvilcamayta@gmail.com",
};

const Footer: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 md:py-10 bg-[#000] text-[#fff] w-full">
      {/* Mensaje principal */}
      <div className="text-center md:text-left md:pl-56 text-xl sm:text-2xl font-serif font-semibold mb-6 md:mb-0">
        {data.message}
      </div>
      
      {/* Contenido principal */}
      <div className="md:pl-56 flex flex-col lg:flex-row gap-8 lg:gap-4 pt-5">
        
        {/* Enlaces */}
        <div className="flex-1">
          <div className="font-semibold pb-3 font-serif text-xl sm:text-2xl text-center sm:text-left">
            Enlaces
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="flex-1">
              {data.link.slice(0, 3).map((link, index) => (
                <li key={index} className="pb-3 group relative list-none">
                  <Link href={link.href} className="inline-block">
                    <span className="text-base sm:text-lg text-white hover:text-[#FFF] transition-colors duration-300 relative">
                      {link.text}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFF] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </div>
            <div className="flex-1">
              {data.link.slice(3).map((link, index) => (
                <li key={index} className="pb-3 group relative list-none">
                  <Link href={link.href} className="inline-block">
                    <span className="text-base sm:text-lg text-white hover:text-[#fff] transition-colors duration-300 relative">
                      {link.text}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fff] transition-all duration-500 group-hover:w-full origin-left"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex-1">
          <div className="font-semibold pb-3 font-serif text-xl sm:text-2xl text-center sm:text-left">
            Síguenos
          </div>
          <RedesSociales />
        </div>

        {/* Contacto */}
        <div className="flex-1">
          <div className="font-semibold pb-3 font-serif text-xl sm:text-2xl text-center sm:text-left">
            Contacto
          </div>
          <div className="pb-2 flex items-center gap-2 text-sm sm:text-base">
            <FaWhatsapp/>
            <span className="break-all text-center">{data.celular}</span>
          </div>
          <div className="pt-1 flex items-center gap-2 text-sm sm:text-base">
            <MdOutlineMail/>
            <span className="break-all">{data.correo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;