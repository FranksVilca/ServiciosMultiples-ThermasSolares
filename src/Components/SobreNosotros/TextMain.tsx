import Image from "next/image";

const Textos = {
  title: "¿Listo para un servicio de calidad?",
  text: "Estamos aquí para ofrecerte un servicio de calidad para tu hogar y tu familia. Contáctanos y recibe asesoría personalizada para la instalación, mantenimiento y reparación de therma. Nos aseguramos de que disfrutes de agua caliente de forma segura, eficiente y continua. Ya sea para una instalación nueva o una revisión preventiva, estamos listos para ayudarte a cuidar lo que más importa.",
};

const TextMain: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 py-6 md:py-8 gap-6 md:gap-8">
        {/* Sección de texto */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center items-center lg:items-start">
          <div className="text-2xl sm:text-3xl md:text-4xl text-[#73FC49] font-serif text-center lg:text-left">
            {Textos.title}
          </div>
          <div className="text-second mt-4 sm:mt-6 md:mt-8 text-center lg:text-left px-4 sm:px-8 lg:px-0 max-w-lg">
            {Textos.text}
          </div>
        </div>

        {/* Sección de imagen */}
        <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0">
          <div className="bg-third rounded-2xl h-64 sm:h-80 md:h-96 relative overflow-hidden">
            <Image
              src="/Home/IMG_20250501_114700.webp"
              alt="Service"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextMain;
