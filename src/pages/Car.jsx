import { Header } from "../components/Header";
import { CarForm } from "../components/CarForm";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { ContextProvider } from "../context/GlobalContext";

export function Car() {
  return (
    <>
      <ContextProvider>
        <Header />
        <CarForm />
        <Footer />
        <ScrollToTop />
      </ContextProvider>
    </>
  );
}
