import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Best_Sell from "@/components/best_sell/Best_Sell";
import GetBooks from "@/components/getBooks/GetBooks";

export default function Home() {
  return (
    <>
      <div className="mx-8 md:mx-20">
        <Hero />
        <Best_Sell />
        <GetBooks />
        <Footer />
      </div>
    </>
  );
}
