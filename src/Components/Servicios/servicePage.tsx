import React from "react";
import Image from "next/image";

const Services = {
  servicios: [
    {
      title: "Servicio",
      text: "asdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsa",
      image: "",
    },
    {
      title: "Servicio",
      text: "asdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsa",
      image: "",
    },
    {
      title: "Servicio",
      text: "asdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsa",
      image: "",
    },
    {
      title: "Servicio",
      text: "asdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsa",
      image: "",
    },
    {
      title: "Servicio",
      text: "asdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsa",
      image: "",
    },
    {
      title: "Servicio",
      text: "asdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsa",
      image: "",
    },
    {
      title: "Servicio",
      text: "asdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsa",
      image: "",
    },
    {
      title: "Servicio",
      text: "asdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsa",
      image: "",
    },
    {
      title: "Servicio",
      text: "asdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsaasdasdasdadsa",
      image: "",
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
        <div className="my-6 sm:my-8 mx-4 sm:mx-8 md:mx-16 lg:mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {Services.servicios.map((item, index) => (
            <div key={index} className="gap-4 rounded-2xl overflow-hidden">
              <div className="bg-third w-full h-40 rounded-t-2xl">
                {item.image}
              </div>
              <div className="bg-[#000] text-[#5BB543] w-1/3 rounded-3xl text-center my-1 py-2 text-xl font-serif">
                {item.title}
              </div>
              <div className="text-center text-second text-xs sm:text-sm md:text-base px-2 leading-relaxed flex-grow flex items-center justify-center mb-4">
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
