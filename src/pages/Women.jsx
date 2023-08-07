import { Header } from "../components/Header";
import { HeroWomen } from "../components/HeroWomen";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { ProductContextProvider } from "../context/Product";

export function Women() {
  return (
    <>
      <ProductContextProvider>
        <Header />
        <HeroWomen />
        <Footer />
        <ScrollToTop />
      </ProductContextProvider>
    </>
  );
}
