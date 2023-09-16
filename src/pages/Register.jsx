import { Header } from "../components/Header";
import { RegisterComponent } from "../components/RegisterComponent";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { ProductContextProvider } from "../context/Product";

export function Register() {
  return (
    <>
      <ProductContextProvider>
        <Header />
        <RegisterComponent/>
        <Footer />
        <ScrollToTop />
      </ProductContextProvider>
    </>
  );
}