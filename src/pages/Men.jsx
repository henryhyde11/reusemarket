import { Header } from "../components/Header";
import { HeroMen } from "../components/HeroMen";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { ProductContextProvider } from "../context/Product";

export function Men() {
  return (
    <>
      <ProductContextProvider>
        <Header />
        <HeroMen />
        <Footer />
        <ScrollToTop />
      </ProductContextProvider>
    </>
  );
}
