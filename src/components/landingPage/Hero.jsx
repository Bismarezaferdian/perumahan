"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "swiper/css/navigation";
import ImgHero from "../../../public/hero1.jpeg";
import ImgHero2 from "../../../public/hero2.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const data = [
  { id: 1, img: ImgHero, alt: "Image", title: "Perumahan tanggerang" },
  { id: 2, img: ImgHero2, alt: "Image", title: "Perumahan jakarta" },
];

const Hero = () => {
  return (
    <div className="flex relative justify-center -top-[68px] ">
      <div className=" items-center w-[100vw] ">
        <Swiper
          //   spaceBetween={5}
          // slidesPerView={2.5}
          //   slidesPerView={windowSize.width < 640 ? 2.5 : 3.5}
          // navigation={true}
          //   reverseDirection={true}
          //   pagination={{ clickable: true }}
          navigation={true}
          // loop={true}
          //   autoplay={{
          //     delay: 1000,
          //     disableOnInteraction: false,
          //   }}
          modules={[Navigation]}
          //   draggable={true}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full relative  h-screen z-0 bg-black">
                <div className=" flex justify-center flex-col absolute left-1/2 text-slate-200 -translate-x-1/2 top-[14vh]  md:top-[18vh] lg:top-[34vh] z-50 text-center  ">
                  {/* <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className=""
                  >
                    <h1 className="text-xl md:text-5xl lg:text-7xl font-semibold md:font-medium  whitespace-nowrap">
                      {" "}
                      {item.title}
                    </h1>
                    <p className="text-sm md:text-3xl md:mt-2">
                      Terlengkap Tersedia Berbagai Merk Cat
                    </p>
                    <Link href={"/products"}>
                      <button className=" text-green-700 md:mt-4 ">
                        <span className=" text-xs md:text-xl  ">
                          View Product
                        </span>
                      </button>
                    </Link>
                  </motion.div> */}
                  <h1>test</h1>
                </div>
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  style={{ opacity: 0.4, objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="flex justify-center items-center">
<div className="bg-black w-screen overflow-hidden">
  <div className=" flex justify-center flex-col absolute left-1/2 text-slate-200 -translate-x-1/2 top-[14vh]  md:top-[18vh] lg:top-[34vh] z-50 text-center  ">
    <div className="">
      <h1 className="text-xl md:text-5xl lg:text-7xl font-semibold md:font-medium  whitespace-nowrap">
        {" "}
        Toko Cat Mega Utama
      </h1>
      <p className="text-sm md:text-3xl md:mt-2">
        Terlengkap Tersedia Berbagai Merk Cat
      </p>
      <Link href={"/products"}>
        <button className=" text-green-700 md:mt-4 ">
          <span className=" text-xs md:text-xl  ">View Product</span>
        </button>
      </Link>
    </div>
  </div>
  <Image
    src={ImgHero}
    alt="toko"
    priority={true}
    //   width={200}
    //   height={200}
    sizes="(max-width:100%)"
    style={{ color: "transparent", opacity: "0.8", objectFit: "cover" }}
  />
  {/* <h1 className="z-40 text-white absolute translate-x-40 opacity-100">
    test
  </h1> */
}
// </div>
// </div> */}
