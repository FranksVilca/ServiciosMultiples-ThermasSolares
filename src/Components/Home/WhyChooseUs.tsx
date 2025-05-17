import { PiGitBranchDuotone } from "react-icons/pi";
import { FiTool } from "react-icons/fi";

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
      <div className="flex flex-col md:flex-row gap-8 pr-32 pt-16 bg-theme mt-16">
        <div className="flex-1 w-full bg-third mr-4"></div>
        <div className="flex-1 pt-4">
          <div className="text-[#5BB543] flex gap-2"><span><PiGitBranchDuotone /></span>Porque Escogernos</div>
          <div className="text-6xl text-theme mt-6">Elijanos para obtener soluciones expertas</div>
          <div className="text-second mt-6">Cuando se trata de sus necesidades de plomería, necesita un equipo de confianza. En Pipowork, nos comprometemos a brindar a nuestros clientes soluciones de plomería de la más alta calidad y un servicio al cliente excepcional.</div>
          <div className="mt-6 grid grid-cols-2 gap-8 pb-16">
            {Service.service.map((item,index) => (
                <div key={index} className="">
                    <div className="bg-main p-4 text-white rounded-xl inline-block"><FiTool/></div>
                    <div className="text-theme text-xl font-semibold mt-2">{item.title}</div>
                    <div className="text-second mt-2">{item.text}</div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoooseUs;
