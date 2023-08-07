import { Header } from "../components/Header";
import { DetailComponent } from "../components/DetailComponent";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

import { ProductContextProvider } from "../context/Product";
import { CarListContextProvider } from "../context/CarList";

export function Detail() {
  return (
    <>
      <ProductContextProvider>
        <CarListContextProvider>
          <Header />
          <DetailComponent />
          <Footer />
          <ScrollToTop />
        </CarListContextProvider>
      </ProductContextProvider>
    </>
  );
}
