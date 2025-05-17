import Footer from "@/Components/footer";
import Header from "@/Components/header";
import Headerh from "@/Components/headerh";
import AboutUs from "@/Components/Home/About";
import HeroSections from "@/Components/Home/HeroSections";
import WhyChoooseUs from "@/Components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Headerh />
      <Header />
      <HeroSections />
      <AboutUs />
      <WhyChoooseUs />
      <Footer />
    </div>
  );
}
