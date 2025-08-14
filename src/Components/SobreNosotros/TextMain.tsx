import Image from "next/image";

const Textos = {
  title: "¿Listo para un servicio de calidad?",
  text: "Estamos aquí para ofrecerte un servicio de calidad para tu hogar y tu familia. Contáctanos y recibe asesoría personalizada para la instalación, mantenimiento y reparación de therma. Nos aseguramos de que disfrutes de agua caliente de forma segura, eficiente y continua. Ya sea para una instalación nueva o una revisión preventiva, estamos listos para ayudarte a cuidar lo que más importa.",
};

const TextMain: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row px-4 py-8">
        <div className="flex-1 p-4 flex flex-col justify-center items-center">
          <div className="text-4xl text-[#73FC49] font-serif flex justify-center">
            {Textos.title}
          </div>
          <div className="text-second mt-8 flex items-center justify-center px-20 text-center">
            {Textos.text}
          </div>
        </div>
        <div className="flex-1 w-full bg-third rounded-2xl h-96 mx-20 relative">
          <Image
            src="/Home/IMG_20250501_114700.webp"
            alt="Service"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default TextMain;
