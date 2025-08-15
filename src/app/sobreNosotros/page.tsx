import Footer from "@/Components/footer";
import Header from "@/Components/header";
import MisionVision from "@/Components/SobreNosotros/MisionVision";
import TextMain from "@/Components/SobreNosotros/TextMain";

export default function Home() {
  return (
    <div>
      <Header />
        <div className="text-6xl text-theme flex justify-center pt-8 font-serif text-center">Sobre Nosotros</div>
        <TextMain/>
        <MisionVision/>
      <Footer />
    </div>
  );
}
