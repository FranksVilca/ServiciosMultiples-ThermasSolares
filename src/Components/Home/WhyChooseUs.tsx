import { PiGitBranchDuotone } from "react-icons/pi";
import { FiTool } from "react-icons/fi";
import Image from "next/image";

const Service = {
  service: [
    {
      title: "Servicio rapido y confaible",
      text: "Si tiene una emergencia de plomería, necesita ayuda urgente. Nuestro equipo de plomeros expertos está disponible las 24 horas, los 7 días de la semana, para brindarle un servicio confiable y eficiente cuando más lo necesita.",
    },
    {
      title: "Tarifas asequibles",
      text: "Las reparaciones de plomería pueden ser costosas, pero creemos que un servicio de calidad no debería ser costoso. Por eso ofrecemos tarifas competitivas y accesibles.",
    },
    {
      title: "Garantia por trabajo",
      text: "Creemos en la transparencia y la honestidad en cuanto a precios. Por eso, le proporcionamos precios por adelantado antes de realizar cualquier trabajo, para que sepa exactamente qué esperar.",
    },
    {
      title: "Servicios Integrales",
      text: "Desde grifos que gotean hasta reparaciones de alcantarillado, ofrecemos una gama completa de servicios de plomería para satisfacer todas sus necesidades. Ningún trabajo es demasiado grande ni demasiado pequeño para nuestro equipo de expertos.",
    },
  ],
};

const WhyChoooseUs: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:pr-24 xl:pr-32 pt-8 sm:pt-12 md:pt-16 bg-theme mt-8 sm:mt-12 md:mt-16">
        {/* Sección de imagen */}
        <div className="flex-1 w-full bg-third mr-4 relative rounded-r-2xl">
          <Image
            src="/Home/IMG_20250426_102121.webp"
            alt="Why"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="rounded-r-2xl"
          />
        </div>

        {/* Sección de contenido */}
        <div className="flex-1 pt-4 lg:pt-4 order-2">
          {/* Etiqueta superior */}
          <div className="text-[#5BB543] flex gap-2 items-center justify-center lg:justify-start text-base sm:text-lg">
            <span className="text-lg sm:text-xl">
              <PiGitBranchDuotone />
            </span>
            <span>Por qué Escogernos</span>
          </div>

          {/* Título principal */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-theme mt-4 sm:mt-6 text-center lg:text-left leading-tight">
            Elíjanos para obtener soluciones expertas
          </div>

          {/* Descripción */}
          <div className="text-second mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-center lg:text-left max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Cuando se trata de sus necesidades de plomería, necesita un equipo
            de confianza. En Servicios Multiples, nos comprometemos a brindar a nuestros
            clientes soluciones de plomería de la más alta calidad y un servicio
            al cliente excepcional.
          </div>

          {/* Grid de servicios */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 pb-8 sm:pb-12 md:pb-16">
            {Service.service.map((item, index) => (
              <div key={index} className="text-center lg:text-left">
                {/* Icono */}
                <div className="bg-main p-3 sm:p-4 text-white rounded-xl inline-block mb-2 sm:mb-3">
                  <FiTool className="text-lg sm:text-xl" />
                </div>

                {/* Título del servicio */}
                <div className="text-theme text-lg sm:text-xl font-semibold mt-2">
                  {item.title}
                </div>

                {/* Descripción del servicio */}
                <div className="text-second mt-2 text-sm sm:text-base leading-relaxed px-4 sm:px-0">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoooseUs;
