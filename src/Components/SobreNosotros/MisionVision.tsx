const Data = {
  Mision:
    "Ser la empresa líder en servicios de fontanería en nuestra comunidad, reconocida por su profesionalismo, puntualidad y soluciones duraderas en el mantenimiento de termas, reparaciones y sistemas de almacenamiento de agua, garantizando la seguridad y confort de nuestros clientes.",
  Vision:
    "Brindar servicios de fontanería confiables y de alta calidad, especializados en el mantenimiento de termas, reparación de instalaciones y tanques elevados. Nos comprometemos a ofrecer atención rápida, personalizada y con los más altos estándares técnicos, cuidando los recursos de nuestros clientes y el medio ambiente.",
};

const MisionVision: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row my-8 sm:my-12 md:my-16 gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Card Misión */}
        <div className="flex-1 bg-main rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-[#FFF94D] text-2xl sm:text-3xl font-serif text-center mb-4">
            Misión
          </div>
          <div className="pt-2 sm:pt-4 px-2 sm:px-4 text-center text-[#f1fbea] text-sm sm:text-base leading-relaxed">
            {Data.Mision}
          </div>
        </div>

        {/* Card Visión */}
        <div className="flex-1 bg-main rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-[#FFF94D] text-2xl sm:text-3xl font-serif text-center mb-4">
            Visión
          </div>
          <div className="pt-2 sm:pt-4 px-2 sm:px-4 text-center text-[#f1fbea] text-sm sm:text-base leading-relaxed">
            {Data.Vision}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MisionVision;
