import { Header } from "../components/Header";
import { DetailComponent } from "../components/DetailComponent";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function Detail() {
  return (
    <>
      <Header />
      <DetailComponent />
      <Footer />
      <ScrollToTop />
    </>
  );
}
