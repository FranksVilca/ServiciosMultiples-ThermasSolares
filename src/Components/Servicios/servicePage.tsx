import React from "react";
import Image from "next/image";

const Services = {
  servicios: [
    {
      title: "Reparacion de Thermas",
      text: "Detectamos y solucionamos fallas en tu therma para que recupere su funcionamiento óptimo. Trabajamos con repuestos originales y técnicas seguras para garantizar resultados duraderos.",
      image: "/Service/Reparacion_Thermas.webp",
    },
    {
      title: "Mantenimiento de Thermas",
      text: "Realizamos mantenimiento preventivo y correctivo para prolongar la vida útil de tu therma, mejorar su eficiencia y evitar averías inesperadas.",
      image: "/Service/Mantenimiento_Terma.webp",
    },
    {
      title: "Venta de Thermas",
      text: "Ofrecemos thermas de alta calidad, eficientes y adaptadas a tus necesidades, con garantía y asesoría para elegir el modelo ideal para tu hogar o negocio.",
      image: "/Service/Venta_Terma.webp",
    },
    {
      title: "Mantenimiento de Tanques elevados",
      text: "Limpieza, desinfección y revisión de tanques elevados para garantizar un suministro de agua limpio y seguro, cumpliendo con normas sanitarias.",
      image: "/Service/Mantenimiento_Tanque_Elevado.webp",
    },
    {
      title: "Mantenimiento de Pozos",
      text: "Inspección y limpieza de pozos para prevenir obstrucciones, mejorar la calidad del agua y optimizar su funcionamiento.",
      image: "/Service/Mantenimiento_Pozo.webp",
    },
    {
      title: "Instalacion de Ducha Electrica",
      text: "Instalamos thermas eléctricas de forma segura y eficiente, garantizando un correcto funcionamiento y el cumplimiento de todas las normativas técnicas.",
      image: "/Service/Instalacion_Ducha_Electrica.webp",
    },
    {
      title: "Instalacion de Termas",
      text: "Instalamos diferentes tipos de thermas con acabados profesionales y asegurando un rendimiento óptimo desde el primer uso.",
      image: "/Service/Instalacion_Termas.webp",
    },
    {
      title: "Venta de Accesorios",
      text: "Disponemos de accesorios y repuestos originales para thermas, fontanería y sistemas de agua, con asesoría para elegir la mejor opción.",
      image: "/Service/Venta_Accesorios.webp",
    },
    {
      title: "Servicio de Fontaneria",
      text: "Solucionamos todo tipo de problemas de fontanería, desde fugas y obstrucciones hasta instalaciones completas, con rapidez y garantía.",
      image: "/Service/Service_Fontaneria.webp",
    },
  ],
};

const servicePage: React.FC = () => {
  return (
    <div>
      <div className="mb-40">
        <div className="w-full bg-third h-64 sm:h-80 md:h-96 relative">
          <Image
            src="/Home/IMG_20230226_091928.webp"
            alt="About"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="text-center text-theme text-2xl sm:text-3xl md:text-5xl font-serif mt-6 md:mt-8 px-4">
          Nuestros Servicios
        </div>
        <div className="my-6 sm:my-8 mx-4 sm:mx-8 md:mx-16 lg:mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {Services.servicios.map((item, index) => (
            <div key={index} className="gap-4 rounded-2xl overflow-hidden">
              <div className="bg-third w-full h-40 rounded-t-2xl relative">
                <Image
                  src={item.image}
                  alt="Service"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="bg-[#000] text-[#5BB543] w-10/12 rounded-3xl text-start my-1 px-4 py-2 text-xl font-serif">
                {item.title}
              </div>
              <div className="text-start text-second text-xs sm:text-sm md:text-base px-1 leading-relaxed flex-grow flex items-center mb-4">
                {item.text.slice(0, 50)}...
              </div>
              <div className="bg-second rounded-3xl text-center my-1 py-2 w-1/3 font-serif font-semibold mx-auto">
                Leer Mas
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default servicePage;
