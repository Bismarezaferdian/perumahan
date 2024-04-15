import About1 from "@/components/landingPage/About";
import Banner from "@/components/landingPage/Banner";
import Fasilitas from "@/components/landingPage/Fasilitas";
import Hero from "@/components/landingPage/Hero";
import Question from "@/components/landingPage/Question";
import Unit from "@/components/landingPage/Unit";
import Image from "next/image";
import Whatapp from "../../public/whatsapp.png";
import Map from "../../public/map.png";
import Link from "next/link";
import Contact from "@/components/landingPage/Contact";

export default function Home() {
  return (
    <div className="mx-2 ">
      <Hero />
      <Banner />
      <About1 />
      <Fasilitas />
      <Unit />
      <Contact />
      <Question />
      <div className="relative">
        <div className="fixed bottom-32 right-10 overflow-hidden z-50  ">
          <Link href={"https://maps.app.goo.gl/Kg6ZdFPMKrwH8bD28"}>
            <Image
              src={Map}
              style={{ width: 50 }}
              alt="Whatsapp icons created by riajulislam - Flaticon"
            />
          </Link>
        </div>
        <div className="fixed bottom-10 right-10 overflow-hidden z-50  ">
          <Link
            href={"https://wa.me/+6281513523006?text=text%20ini%20dari%20web"}
          >
            <Image
              src={Whatapp}
              style={{ width: 50, boxShadow: "200px black" }}
              alt="Whatsapp icons created by riajulislam - Flaticon"
              // className="shadow-2xl shadow-slate-950"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
