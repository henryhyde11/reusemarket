import { Header } from "../components/Header";
import { DetailComponent } from "../components/DetailComponent";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { ContextProvider } from "../context/GlobalContext";

export function Detail() {
  return (
    <>
      <ContextProvider>
        <Header />
        <DetailComponent />
        <Footer />
        <ScrollToTop />
      </ContextProvider>
    </>
  );
}
