import ContactanosPage from "@/Components/Contactanos/ContactanosPage";
import Footer from "@/Components/footer";
import Header from "@/Components/header";
import ServicePage from "@/Components/Servicios/servicePage";

export default function Home() {
  return (
    <div>
      <Header />
      <ContactanosPage />
      <Footer />
    </div>
  );
}