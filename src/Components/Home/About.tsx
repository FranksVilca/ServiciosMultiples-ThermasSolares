import Link from "next/link";
import { PiGitBranchDuotone } from "react-icons/pi";
import Image from "next/image";
const Data = {
  title: "Experimente servicios de calidad",
  text: "Entendemos la importancia de contar con un sistema de plemeria confiable. Por eso, nos comprometemos a brindar a nuestros clientes servicios de plromeria de la mas alta calidad en lo que puedan confiar.",
};

const AboutUs: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      {/* Línea separadora */}
      <div className="w-full h-px bg-gray-300 my-8 sm:my-12 md:my-16"></div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
        {/* Sección de contenido */}
        <div className="flex-1 order-2 lg:order-1">
          {/* Etiqueta "Sobre Nosotros" */}
          <div className="flex text-[#5BB543] text-lg sm:text-xl gap-2 items-center justify-center lg:justify-start">
            <span className="text-xl sm:text-2xl">
              <PiGitBranchDuotone />
            </span>
            <span>Sobre Nosotros</span>
          </div>

          {/* Título principal */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-theme pt-3 sm:pt-4 text-center lg:text-left leading-tight">
            {Data.title}
          </div>

          {/* Descripción */}
          <div className="text-second pt-3 sm:pt-4 text-sm sm:text-base lg:text-lg text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {Data.text}
          </div>

          {/* Botón "Leer Más" */}
          <div className="flex justify-center lg:justify-start">
            <Link
              href={"./sobreNosotros"}
              className="inline-block my-4 sm:my-6 py-2 sm:py-3 px-8 sm:px-12 bg-[#DAE021] rounded-xl text-sm sm:text-base font-medium hover:bg-[#c5ca1e] transition-colors duration-200"
            >
              Leer Más
            </Link>
          </div>
        </div>

        {/* Sección de imagen */}
        <div className="flex-1 order-1 lg:order-2">
          <div className="h-64 sm:h-80 md:h-96 lg:h-86 w-full bg-third rounded-2xl relative overflow-hidden shadow-lg">
            <Image
              src="/Home/IMG_20250501_114703.webp"
              alt="About"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
