"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const About1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const right = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const mainControl = useAnimation();

  useEffect(() => {
    // console.log(isInView);
    if (isInView) {
      mainControl.start("visible");
    } else {
      mainControl.start("hidden");
    }
  }, [isInView, mainControl]);

  return (
    // <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] ">
    <div className="container mx-auto overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="flex flex-wrap items-center justify-between -mx-4">
        <div className="w-full px-4 lg:w-6/12">
          <div className="flex items-center -mx-3 sm:-mx-4">
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <motion.div
                ref={ref}
                initial={"hidden"}
                animate={mainControl}
                transition={{ delay: 1, duration: 0.5 }}
                variants={variants}
                className="py-3 sm:py-4"
              >
                <Image
                  src="https://res.cloudinary.com/websitemuid/image/upload/v1705479767/WhatsApp_Image_2024-01-17_at_11.47.08_ajpf12.jpg"
                  alt=""
                  className="w-full rounded-2xl"
                  width={200}
                  height={200}
                />
              </motion.div>
              <motion.div
                ref={ref}
                initial={"hidden"}
                animate={mainControl}
                transition={{ delay: 0.8, duration: 0.5 }}
                variants={variants}
                className="py-4 sm:py-4"
              >
                <Image
                  src="https://res.cloudinary.com/websitemuid/image/upload/v1705479767/WhatsApp_Image_2024-01-17_at_11.47.07_i7xgec.jpg"
                  alt="test"
                  className="w-full rounded-2xl"
                  width={200}
                  height={200}
                />
              </motion.div>
            </div>
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <motion.div
                ref={ref}
                initial={"hidden"}
                animate={mainControl}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={variants}
                className="relative z-10 my-4"
              >
                <Image
                  src="https://res.cloudinary.com/websitemuid/image/upload/v1705479872/WhatsApp_Image_2024-01-17_at_11.47.07_ykzvn2.jpg"
                  alt="test"
                  className="w-full h-full rounded-2xl"
                  width={200}
                  height={200}
                />
                <span className="absolute -right-7 -bottom-7 z-[-1]">
                  <svg
                    width={134}
                    height={106}
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.66667"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 1.66667 104)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="16.3333"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 16.3333 104)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={31}
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 31 104)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="45.6667"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 45.6667 104)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="60.3334"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 60.3334 104)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="88.6667"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 88.6667 104)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="117.667"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 117.667 104)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="74.6667"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 74.6667 104)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={103}
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 103 104)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={132}
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 132 104)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.66667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 89.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="16.3333"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 89.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={31}
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 31 89.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="45.6667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 89.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="60.3333"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 89.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="88.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 89.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="117.667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 89.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="74.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 89.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={103}
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 103 89.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={132}
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 132 89.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.66667"
                      cy="74.6673"
                      r="1.66667"
                      transform="rotate(-90 1.66667 74.6673)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.66667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 31.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="16.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 16.3333 74.6668)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="16.3333"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 31.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={31}
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 31 74.6668)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={31}
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 31 31.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="45.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 45.6667 74.6668)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="45.6667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 31.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="60.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 60.3333 74.6668)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="60.3333"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 60.3333 30.9998)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="88.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 88.6667 74.6668)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="88.6667"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 88.6667 30.9998)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="117.667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 117.667 74.6668)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="117.667"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 117.667 30.9998)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="74.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 74.6667 74.6668)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="74.6667"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 74.6667 30.9998)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={103}
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 103 74.6668)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={103}
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 103 30.9998)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={132}
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 132 74.6668)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={132}
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 132 30.9998)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.66667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 60.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.66667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 16.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="16.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 60.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="16.3333"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 16.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={31}
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 31 60.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={31}
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 31 16.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="45.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 60.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="45.6667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 16.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="60.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 60.3333 60.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="60.3333"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 60.3333 16.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="88.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 88.6667 60.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="88.6667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 88.6667 16.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="117.667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 117.667 60.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="117.667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 117.667 16.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="74.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 74.6667 60.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="74.6667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 74.6667 16.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={103}
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 103 60.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={103}
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 103 16.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={132}
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 132 60.0003)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={132}
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 132 16.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.66667"
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 45.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.66667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.66667 1.66683)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="16.3333"
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 45.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="16.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.3333 1.66683)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={31}
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 31 45.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={31}
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 31 1.66683)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="45.6667"
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 45.3333)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="45.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 45.6667 1.66683)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="60.3333"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 45.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="60.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 60.3333 1.66683)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="88.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 45.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="88.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 88.6667 1.66683)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="117.667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 45.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="117.667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 117.667 1.66683)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="74.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 45.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="74.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 74.6667 1.66683)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={103}
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 103 45.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={103}
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 103 1.66683)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={132}
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 132 45.3338)"
                      fill="#3056D3"
                    />
                    <circle
                      cx={132}
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 132 1.66683)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <motion.div
            initial={"hidden"}
            animate={mainControl}
            transition={{ delay: 1, duration: 0.5 }}
            variants={right}
            className="mt-10 lg:mt-0"
          >
            <span className="block mb-4 text-lg font-semibold text-primary">
              Kenapa harus
            </span>
            <h2 className="mb-5 text-yellow-600   text-3xl font-bold text-dark dark:text-yellow-600 sm:text-[40px]/[48px]">
              GRIYA PESONA MANDIRI
            </h2>
            <p className="mb-5 text-base text-body-color dark:text-dark-6">
              Griya Pesona Bahari berdiri sudah sejak lama. GPB merupakan
              platform properti penghubung customer dengan developer terbaik.
            </p>
            <p className="mb-8 text-base text-body-color dark:text-dark-6">
              kami selalu mengupayakan dan mengutamakan kenyamanan customer.
              segala bentuk bantuan customer akan selalu kami tampung.
            </p>
            {/* <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                ></a> */}
          </motion.div>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default About1;
