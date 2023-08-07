import { Header } from "../components/Header";
import { CarForm } from "../components/CarForm";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

import { CarListContextProvider } from "../context/CarList";

export function Car() {
  return (
    <>
      <CarListContextProvider>
        <Header />
        <CarForm />
        <Footer />
        <ScrollToTop />
      </CarListContextProvider>
    </>
  );
}
