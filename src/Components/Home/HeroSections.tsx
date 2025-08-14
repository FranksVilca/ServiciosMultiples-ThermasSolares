import { IoMdArrowDropright } from "react-icons/io";
import { FiTool } from "react-icons/fi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Service = {
  title: "Nuestros Servicios",
  Servicios: [
    { subtitulo: "Venta de thermas solares" },
    { subtitulo: "Manteniento de Thermas" },
    { subtitulo: "Limpieza de pozos" },
  ],
};

const HeroSections: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 px-32 pb-28">
        <div className="flex-1 pt-20">
          <div className="text-theme text-6xl">
            Su <a className="text-[#5BB543]">Amigo</a>{" "}
            <a className="text-[#F6B613]">Tecnico</a> preocupandose por usted
          </div>
          <div className="pt-8 text-second ">
            Ofrecemos servicios de plomería confiables que cubren todas sus
            necesidades. Desde reparaciones sencillas de tuberías hasta
            instalaciones complejas.
          </div>
          <div className="pt-8 text-theme text-2xl font-bold flex items-center gap-8">
            <div className="w-12 h-12 rounded-full bg-main flex justify-center items-center text-[#fff]">
              <FiTool />
            </div>
            {Service.title}
          </div>
          <div className="pt-4 flex gap-4 items-center pb-8">
            <div className="bg-[#F0F8ED] p-4 rounded-2xl">
              {Service.Servicios.map((item, index) => (
                <div key={index} className="p-2 flex gap-4">
                  <span className="text-[#5BB543] text-2xl">
                    <FaRegArrowAltCircleRight />
                  </span>
                  <span className="text-theme">{item.subtitulo}</span>
                </div>
              ))}
            </div>
            <div className="text-theme">
              <div className="font-bold text-5xl">+6</div>
              <div className="">otros</div>
            </div>
          </div>
          <Link href={"./Servicios"} className="text-[#B1BE04] text-xl">
            All services ---------►
          </Link>
        </div>
        <div className="flex-1 relative h-160 pt-2">
          {/* Fondo verde */}
          <div className="absolute right-0 h-full w-3/4 bg-gradient-to-b from-[#5cb54300] to-[#5BB543] z-0"></div>
          {/* Capa gris encima */}
          <div className="absolute left-0 h-35/40 w-3/4 bg-gray-400 z-10 mt-20">
            <Image
              src="/Home/IMG_20250510_091351.webp"
              alt="Descripción"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
        <div className="flex-1 justify-items-center pt-28">
          <button className="bg-main rounded-full w-16 h-16 flex items-center justify-center">
            <IoMdArrowDropright className="text-[#ffff] text-6xl" />
          </button>
          <div className="text-theme w-32">
            Puedes Observar nuestro trabajos
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
