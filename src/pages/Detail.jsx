import { Header } from "../components/Header";
import { DetailComponent } from "../components/DetailComponent";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { ProductContextProvider } from "../context/ProductContext";

export function Detail() {
  return (
    <>
      <ProductContextProvider>
        <Header />
        <DetailComponent />
        <Footer />
        <ScrollToTop />
      </ProductContextProvider>
    </>
  );
}
