"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

type Servicio = {
  title: string;
  text: string;
  image: string;
  reason: string;
};

type Props = {
  servicio: Servicio;
  onClose: () => void;
};

const ServiceCard: React.FC<Props> = ({ servicio, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose] // <-- onClose va en dependencias
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]); // <-- ahora incluimos la función memoizada

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center py-12 px-4 sm:px-8 md:px-12">
      <div
        ref={modalRef}
        className="relative bg-[#e0f5d2] rounded-xl m-4 sm:m-6 p-4 sm:p-6 w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-xl max-h-[95vh] overflow-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-[#438d23] text-2xl font-bold hover:text-red-600 transition"
          aria-label="Cerrar"
        >
          ×
        </button>
        <div className="font-bold flex flex-col gap-y-4 sm:gap-y-6 mt-4">
          <div className="w-full h-48 sm:h-64 md:h-52 lg:h-60 relative rounded-2xl overflow-hidden">
            <Image
              src={servicio.image}
              alt={servicio.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl text-black text-center font-semibold">
            {servicio.title}
          </div>
          <div className="text-sm sm:text-base md:text-lg text-[#575E55] font-medium">
            {servicio.text}
          </div>
          <div className="text-lg sm:text-xl md:text-2xl text-[#438d23] font-bold">
            ¿Por qué Realizarlo?
          </div>
          <div className="text-sm sm:text-base md:text-lg text-[#575E55] font-medium">
            {servicio.reason}
          </div>
          <div className="text-center text-lg sm:text-xl md:text-2xl text-[#438d23]">
            ¡Confianza, calidad y durabilidad garantizada!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
