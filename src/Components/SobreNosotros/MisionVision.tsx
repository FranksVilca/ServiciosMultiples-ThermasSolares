const Data = {
    Mision: "Ser la empresa líder en servicios de fontanería en nuestra comunidad, reconocida por su profesionalismo, puntualidad y soluciones duraderas en el mantenimiento de termas, reparaciones y sistemas de almacenamiento de agua, garantizando la seguridad y confort de nuestros clientes.",
    Vision: "Brindar servicios de fontanería confiables y de alta calidad, especializados en el mantenimiento de termas, reparación de instalaciones y tanques elevados. Nos comprometemos a ofrecer atención rápida, personalizada y con los más altos estándares técnicos, cuidando los recursos de nuestros clientes y el medio ambiente.",
};

const MisionVision: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row my-16 gap-16 px-24">
        <div className="flex-1 bg-main rounded-3xl p-8">
          <div className="text-[#FFF94D] text-3xl font-serif flex justify-center">Mision</div>
          <div className="pt-4 px-4 text-center">{Data.Mision}</div>
        </div>
        <div className="flex-1 bg-main rounded-3xl p-8">
          <div className="text-[#FFF94D] text-3xl font-serif flex justify-center">Vision</div>
          <div className="pt-4 px-4 text-center">{Data.Vision}</div>
        </div>
      </div>
    </div>
  );
};
export default MisionVision;
