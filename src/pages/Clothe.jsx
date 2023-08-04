import { Header } from "../components/Header";
import { HeroClothe } from "../components/HeroClothe";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { ContextProvider } from "../context/GlobalContext";

export function Clothe() {
  return (
    <>
      <ContextProvider>
        <Header />
        <HeroClothe />
        <Footer />
        <ScrollToTop />
      </ContextProvider>
    </>
  );
}
