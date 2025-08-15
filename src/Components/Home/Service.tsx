import Link from "next/link";
import { PiGitBranchDuotone } from "react-icons/pi";
import Image from "next/image";

const Services = {
  Service: [
    {
      title: "Mantenimiento de Termas Solares",
      text: "Nuestro servicio de limpieza de desagües implica la eliminación de bloqueos y escombros.",
      image: "/Home/IMG_20250204_173902.webp",
    },
    {
      title: "Mantenimiento de tanques elevados",
      text: "Nuestro servicio de reparación de calentadores de agua implica el diagnóstico y solución de problemas.",
      image: "/Home/IMG_20250706_092103.webp",
    },
    {
      title: "Instalacion de Termas Solares",
      text: "Nuestro servicio de detección y reparación de fugas implica localizar y reparar fugas en su plomería.",
      image: "/Home/IMG_20250718_155420.webp",
    },
  ],
};

const Service: React.FC = () => {
  return (
    <div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16">
        <div className="flex gap-2 text-[#5BB543]">
          <span className="text-xl">
            <PiGitBranchDuotone />
          </span>
          Nuestros Servicios
        </div>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="md:basis-3/4 text-theme text-6xl text-center md:text-left">
            Servicios Integrales de Plomeria para sus Necesidades
          </div>
          <Link href="./Servicios" className="md:basis-1/4 text-[#B1BE04] pt-4">
            {" "}
            Todos los servicios ----►
          </Link>
        </div>
        <div className="sm:mt-8 sm:gap-4 grid grid-cols-1 sm:grid-cols-3">
          {Services.Service.map((item, index) => (
            <div key={index} className="bg-theme rounded-2xl flex-1">
              <div className="bg-third w-full h-70 rounded-t-2xl relative">
                <Image
                  src={item.image}
                  alt="Service"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-8">
                <div className="text-theme text-3xl font-bold">
                  {item.title}
                </div>
                <div className="mt-4 text-second text-xl">{item.text}</div>
                <Link
                  href={"./"}
                  className="inline-block bg-second mt-8 w-full py-4 rounded-xl text-center"
                >
                  Detalles de Servicio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
