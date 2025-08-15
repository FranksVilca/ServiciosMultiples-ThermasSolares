"use client";
import RedesSociales from "../RedesSociales";
import React, { useState } from "react";
import Image from "next/image";

const Data = {
  title: "¿Listo para contactanos?",
  text: "Estamos aquí para ayudarte a mantener tu hogar seguro y en buen estado. Contáctanos y recibe asesoría personalizada para el mantenimiento de tu terma, reparaciones urgentes o trabajos en tanques elevados. ¡Confía en nuestra experiencia y atención rápida para cuidar lo más importante: tu tranquilidad!",
};

const ContactanosPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Mensaje enviado con éxito");
      setFormData({ nombre: "", email: "", celular: "", mensaje: "" });
    } else {
      alert("Hubo un error al enviar el mensaje");
    }
  };

  return (
    <div>
      <div>
        {/* Imagen de hero */}
        <div className="bg-third w-full h-64 sm:h-80 md:h-96 relative">
          <Image
            src="/Home/IMG_20230226_091901.webp"
            alt="About"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Título */}
        <div className="text-center text-theme text-2xl sm:text-3xl md:text-4xl font-serif mt-6 md:mt-8 px-4">
          {Data.title}
        </div>

        {/* Texto descriptivo */}
        <div className="text-center py-4 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-72 text-second">
          {Data.text}
        </div>

        {/* Formulario de contacto */}
        <div className="bg-main mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-40 rounded-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 mt-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
            {/* Columna izquierda - Campos básicos */}
            <div className="flex-1">
              <div className="text-lg sm:text-xl font-serif font-semibold text-theme">
                Nombre:
              </div>
              <input
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="bg-theme rounded-2xl mt-2 mb-4 w-full lg:w-4/5 h-10 sm:h-12 p-3 text-sm sm:text-base"
                placeholder="Ingrese su nombre aquí"
              />

              <div className="text-lg sm:text-xl font-serif font-semibold text-theme">
                E-mail:
              </div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-theme rounded-2xl mt-2 mb-4 w-full lg:w-4/5 h-10 sm:h-12 p-3 text-sm sm:text-base"
                placeholder="Ingrese su E-mail aquí"
              />

              <div className="text-lg sm:text-xl font-serif font-semibold text-theme">
                Celular:
              </div>
              <input
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                className="bg-theme rounded-2xl mt-2 mb-4 w-full lg:w-4/5 h-10 sm:h-12 p-3 text-sm sm:text-base"
                placeholder="Ingrese su celular aquí"
              />
            </div>

            {/* Columna derecha - Mensaje */}
            <div className="flex-1">
              <div className="text-lg sm:text-xl font-serif font-semibold text-theme">
                Mensaje:
              </div>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full h-32 sm:h-40 lg:h-48 bg-theme rounded-2xl p-3 mt-2 text-sm sm:text-base resize-none"
                placeholder="Ingrese su mensaje aquí"
              />
            </div>
          </div>

          {/* Botón de envío */}
          <div
            onClick={handleSubmit}
            className="cursor-pointer bg-second py-3 px-6 mt-6 font-serif font-semibold w-full sm:w-auto max-w-xs text-center mx-auto rounded-2xl text-theme hover:opacity-90 transition-opacity duration-200"
          >
            Enviar
          </div>
        </div>

        {/* Sección de redes sociales */}
        <div className="mt-8 md:mt-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
          <div className="text-[#73FC49] text-xl sm:text-2xl font-serif text-center lg:text-left">
            Tenemos redes sociales
          </div>
          <div className="mt-1 font-serif text-second text-center lg:text-left">
            Visita y revisa el contenido de nuestras redes sociales
          </div>
        </div>

        {/* Componente de redes sociales */}
        <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-8 px-4">
          <RedesSociales />
        </div>
      </div>
    </div>
  );
};

export default ContactanosPage;
