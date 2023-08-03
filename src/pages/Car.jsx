import { Header } from "../components/Header";
import { CarForm } from "../components/CarForm";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function Car () {
  return (
    <>
      <Header/>
      <CarForm/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}