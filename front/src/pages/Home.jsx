import { Header } from "../components/Header";
import { HeroHome } from "../components/HeroHome";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function Home() {
  return (
    <>
      <Header />
      <HeroHome />
      <Footer />
      <ScrollToTop />
    </>
  );
}
