import { Header } from "../components/Header";
import { LoginComponent } from "../components/LoginComponent";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function Login() {
  return (
    <>
      <Header/>
      <LoginComponent/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}