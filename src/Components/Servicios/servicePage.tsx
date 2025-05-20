import React from "react";

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
        <div className="w-full bg-third h-96"></div>
        <div className="my-8 mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Services.servicios.map((item, index) => (
            <div key={index} className="gap-4 rounded-2xl">
              <div className="bg-third w-full h-40 rounded-t-2xl">
                {item.image}
              </div>
              <div className="bg-[#000] text-[#5BB543] w-1/3 rounded-3xl text-center my-1 py-2 text-xl font-serif">
                {item.title}
              </div>
              <div className="flex justify-center my-2 text-second">{item.text.slice(0, 50)}...</div>
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
