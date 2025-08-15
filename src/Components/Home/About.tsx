import Link from "next/link";
import { PiGitBranchDuotone } from "react-icons/pi";
import Image from "next/image";
const Data = {
  title: "Experimente servicios de calidad",
  text: "Entendemos la importancia de contar con un sistema de plemeria confiable. Por eso, nos comprometemos a brindar a nuestros clientes servicios de plromeria de la mas alta calidad en lo que puedan confiar.",
};

const AboutUs: React.FC = () => {
  return (
    <div className="px-32">
      <div className="w-full h-px bg-gray-300 my-16"></div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="flex text-[#5BB543] text-xl gap-2">
            <span>
              <PiGitBranchDuotone />
            </span>
            Sobre Nosotros
          </div>
          <div className="text-6xl text-theme pt-4">{Data.title}</div>
          <div className="text-second pt-4 w-5/6">{Data.text}</div>
          <Link
            href={"./sobreNosotros"}
            className="inline-block my-6 py-3 px-12 bg-[#DAE021] rounded-xl"
          >
            Leer Mas
          </Link>
        </div>
        <div className="flex-1 h-86 w-full bg-third rounded-2xl relative">
          <Image
            src="/Home/IMG_20250501_114703.webp"
            alt="About"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
