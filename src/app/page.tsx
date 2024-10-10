import Footer from "@/components/Footer";
import Home from "@/components/Home";
//import Image from "next/image";

export default function page() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 ">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
