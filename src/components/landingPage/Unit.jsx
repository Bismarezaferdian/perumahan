"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Unit = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };
  return (
    <>
      {/* <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] "> */}
      <div className="container overflow-hidden mx-auto pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] ">
        <div className="flex flex-wrap ">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className=" text-slate-950 dark:text-slate-50 mb-2 block text-lg font-semibold">
                Gallery
              </span>
              <h2 className="text-slate-900 mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Our Recent Projects
              </h2>
              <p className="text-body-color text-base dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              <li className="flex justify-center items-center mb-1 flex-col">
                <button
                  onClick={() => handleProject("all")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8`}
                >
                  Cluster Cemara
                </button>
                {showCard === "all" && (
                  <motion.div className="underline" layoutId="underline" />
                )}
              </li>
              <li className="flex justify-center items-center mb-1 flex-col">
                <button
                  onClick={() => handleProject("branding")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 `}
                >
                  Cluster Merpati
                </button>
                {showCard === "branding" && (
                  <motion.div className="underline" layoutId="underline" />
                )}
              </li>
              <li className=" flex justify-center items-center mb-1 flex-col">
                <button
                  onClick={() => handleProject("design")}
                  className={`inline-block py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 `}
                  // layoutId="underline"
                >
                  Cluster Cendrawasih
                </button>
                {showCard === "design" && (
                  <motion.div className="underline" layoutId="underline" />
                )}
              </li>
              <li className="flex justify-center items-center mb-1 flex-col">
                {/* <motion.div className="underline" layoutId="underline"> */}
                <button
                  onClick={() => handleProject("marketing")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 `}
                >
                  Cluster elang
                </button>
                {showCard === "marketing" && (
                  <motion.div className="underline" layoutId="underline" />
                )}
                {/* </motion.div> */}
              </li>
              <li className="flex justify-center items-center mb-1 flex-col">
                <button
                  onClick={() => handleProject("development")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 `}
                >
                  Claster Camar
                </button>
                {showCard === "development" && (
                  <motion.div className="underline" layoutId="underline" />
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 -mx-4 gap-1">
          {/* <div className="flex flex-wrap -mx-4"> */}
          <PortfolioCard
            ImageHref="https://res.cloudinary.com/websitemuid/image/upload/v1705479872/WhatsApp_Image_2024-01-17_at_11.47.07_ykzvn2.jpg"
            category="Branding"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://res.cloudinary.com/websitemuid/image/upload/v1705479766/WhatsApp_Image_2024-01-17_at_11.47.10_m4tsrf.jpg"
            category="marketing"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://res.cloudinary.com/websitemuid/image/upload/v1681308704/f40nxw4jjbcns8tisi7d.jpg"
            category="marketing"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://res.cloudinary.com/websitemuid/image/upload/v1681308704/f40nxw4jjbcns8tisi7d.jpg"
            category="Development"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://res.cloudinary.com/websitemuid/image/upload/v1681308704/f40nxw4jjbcns8tisi7d.jpg"
            category="Design"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          <PortfolioCard
            ImageHref="https://res.cloudinary.com/websitemuid/image/upload/v1681308704/f40nxw4jjbcns8tisi7d.jpg"
            category="Marketing"
            title="Creative Agency"
            button="View Details"
            buttonHref="#"
            showCard={showCard}
          />
          {/* <div className="w-full bg-red-200">test</div>
            <div className="w-full bg-red-200">test</div>
            <div className="w-full bg-red-200">test</div>
            <div className="w-full bg-red-200">test</div>
            <div className="w-full bg-red-200">test</div>
            <div className="w-full bg-red-200">test</div> */}
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default Unit;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    // <>
    <div
      className={`w-full px-4  ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <div className="mb-12 bg-red-200 h-44 overflow-hidden">
        {/* <div className="overflow-hidden rounded-[10px]"> */}
        <Image
          src={ImageHref}
          alt="portfolio"
          // className="w-full"
          //   fill
          width={400}
          height={400}
        />
        {/* </div> */}
        {/* <div className="relative z-10 mx-7 -mt-20 rounded-lg py-[34px] px-3 text-center dark:bg-slate-50 ">
          <span className="text-primary mb-2 block text-sm font-medium dark:text-slate-950">
            {category}
          </span>
          <h3 className="text-slate-50 dark:text-slate-950 mb-5 text-xl font-bold">
            {title}
          </h3>
          <a
            href={buttonHref}
            className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
          >
            {button}
          </a>
        </div> */}
      </div>
    </div>
    // </>
  );
};
