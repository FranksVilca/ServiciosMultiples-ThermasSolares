const Service = {
    title:"Nuestros Servicios",
    Servicios:[
      {subtitulo:"Venta de thermas solares"},
      {subtitulo:"Manteniento de Thermas"},
      {subtitulo:"Limpieza de pozos"}
    ],

}

const HeroSections: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="">Su amigo tecnico preocupandose por usted</div>
          <div>Ofrecemos servicios de plomería confiables que cubren todas sus necesidades. Desde reparaciones sencillas de tuberías hasta instalaciones complejas.</div>
          <div>{Service.title}</div>
          <div></div>
        </div>
        <div className="flex-1">
          <div className="bg-second w-full">asd</div>
          <div className="bg-[#939393] w-full">asd</div>
        </div>
        <div className="flex-1 justify-items-center">
          <button className="bg-[#5BB543] rounded-full w-20 h-20">as</button>
          <div className="text-[#2C2E47] w-32">
            Puedes Observar nuestro trabajos
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
