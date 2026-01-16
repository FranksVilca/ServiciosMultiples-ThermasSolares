"use client";

import React, { useState } from "react";
import Image from "next/image";
import ServiceCard from "@/Components/Servicios/ServiceCard";

type Service = {
  title: string;
  text: string;
  image: string;
  reason: string;
};

const services: Service[] = [
  {
    title: "Reparacion de Thermas",
    text:
      "Detectamos y solucionamos fallas en tu therma para que recupere su funcionamiento óptimo. Trabajamos con repuestos originales y técnicas seguras para garantizar resultados duraderos.",
    image: "/Service/Reparacion_Thermas.webp",
    reason:
      "Evitas gastos mayores en el futuro y disfrutas de agua caliente sin interrupciones.",
  },
  {
    title: "Mantenimiento de Thermas",
    text:
      "Realizamos mantenimiento preventivo y correctivo para prolongar la vida útil de tu therma, mejorar su eficiencia y evitar averías inesperadas.",
    image: "/Service/Mantenimiento_Terma.webp",
    reason: "Ahorra energía y prolonga la vida útil de tu equipo.",
  },
  {
    title: "Venta de Thermas",
    text:
      "Ofrecemos thermas de alta calidad, eficientes y adaptadas a tus necesidades, con garantía y asesoría para elegir el modelo ideal.",
    image: "/Service/Venta_Terma.webp",
    reason: "Obtienes equipos modernos con garantía y respaldo técnico.",
  },
  {
    title: "Mantenimiento de Tanques elevados",
    text:
      "Limpieza, desinfección y revisión de tanques elevados para garantizar un suministro de agua limpio y seguro.",
    image: "/Service/Mantenimiento_Tanque_Elevado.webp",
    reason: "Cuidas la salud de tu familia y evitas riesgos sanitarios.",
  },
  {
    title: "Mantenimiento de Pozos",
    text:
      "Inspección y limpieza de pozos para prevenir obstrucciones y mejorar la calidad del agua.",
    image: "/Service/Mantenimiento_Pozo.webp",
    reason: "Aseguras un suministro constante y agua de mejor calidad.",
  },
  {
    title: "Instalacion de Ducha Electrica",
    text:
      "Instalamos thermas eléctricas de forma segura y eficiente cumpliendo normativas técnicas.",
    image: "/Service/Instalacion_Ducha_Electrica.webp",
    reason: "Garantizas una instalación segura que evita accidentes eléctricos.",
  },
  {
    title: "Instalacion de Termas",
    text:
      "Instalamos diferentes tipos de thermas con acabados profesionales y rendimiento óptimo.",
    image: "/Service/Instalacion_Termas.webp",
    reason: "Equipo funcionando correctamente desde el primer día.",
  },
  {
    title: "Venta de Accesorios",
    text:
      "Accesorios y repuestos originales para thermas y sistemas de agua.",
    image: "/Service/Venta_Accesorios.webp",
    reason: "Mayor durabilidad y seguridad en tus equipos.",
  },
  {
    title: "Servicio de Fontaneria",
    text:
      "Solucionamos fugas, obstrucciones e instalaciones completas con rapidez.",
    image: "/Service/Service_Fontaneria.webp",
    reason: "Evitas daños mayores con soluciones efectivas.",
  },
];

const ServicePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div>
      <div className="mb-40">
        <div className="w-full bg-third h-64 sm:h-80 md:h-96 relative">
          <Image
            src="/Home/IMG_20230226_091928.webp"
            alt="Nuestros servicios"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-center text-theme text-2xl sm:text-3xl md:text-5xl font-serif mt-6">
          Nuestros Servicios
        </h1>

        <div className="my-8 mx-4 sm:mx-8 md:mx-16 lg:mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div key={index} className="rounded-2xl overflow-hidden">
              <div className="bg-third w-full h-40 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-black text-[#5BB543] w-10/12 rounded-3xl my-2 px-4 py-2 text-xl font-serif">
                {item.title}
              </div>

              <p className="text-second text-sm px-2 mb-4">
                {item.text.slice(0, 70)}...
              </p>

              <button
                onClick={() => setSelectedService(item)}
                className="block mx-auto bg-second rounded-3xl py-2 px-6 font-serif font-semibold hover:bg-[#5BB543] transition"
              >
                Leer más
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceCard
          servicio={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default ServicePage;
