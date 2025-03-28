import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <div className="bg-[#F8F9FA]">
      <Hero />

      <h2 className="w-full text-center text-2xl md:text-4xl font-semibold py-6">
       Alle Produkte
      </h2>
      <ProductList />
      <Footer/>
    </div>
  );
}