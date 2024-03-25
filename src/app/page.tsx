import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Testimoni from "./components/Testimoni";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <Products />
      <Testimoni />
    </main>
  );
}
