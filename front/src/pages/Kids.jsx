import { Header } from "../components/Header";
import { HeroKids } from "../components/HeroKids";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { ProductContextProvider } from "../context/Product";

export function Kids() {
  return (
    <>
      <ProductContextProvider>
        <Header />
        <HeroKids />
        <Footer />
        <ScrollToTop />
      </ProductContextProvider>
    </>
  );
}