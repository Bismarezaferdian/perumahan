import WrappLayout from "@/app/WrappLayout";
import React from "react";

const Question = () => {
  return (
    <WrappLayout>
      <div className="container mx-auto">
        <div className="relative z-10 bg-blue-700 overflow-hidden rounded bg-primary my-12 px-8 py-2 md:p-[70px]">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full flex flex-col md:flex-row justify-between px-4">
              <div className=" flex flex-col justify-center items-start">
                <span className="block   text-base font-medium text-slate-200">
                  Temukan Rumah Impianmu Disini !
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                  Dapatkan Promo Sekarang
                  {/* <span>our free trial</span> */}
                </h2>
                <span className="block mb-4 text-base font-medium text-white">
                  free ac dan sofabed untuk 100 pembeli pertama !{" "}
                </span>
              </div>
              <div className="flex flex-col justify-center items-start  ">
                <button className="bg-blue-100 px-2 py-3 rounded-lg font-semibold dark:text-slate-950 ">
                  hubungi Developer
                </button>
              </div>
            </div>
          </div>

          <div className=" ">
            <span className="absolute top-0">
              {/* <span className="absolute top-0 left-0 z-[-1]"> */}
              <svg
                width="189"
                height="162"
                viewBox="0 0 189 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="16"
                  cy="-16.5"
                  rx="173"
                  ry="178.5"
                  transform="rotate(180 16 -16.5)"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-157"
                    y1="-107.754"
                    x2="98.5011"
                    y2="-106.425"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.07" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className=" absolute bottom-0 right-0 z-[-1]">
              <svg
                width="191"
                height="208"
                viewBox="0 0 191 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="173"
                  cy="178.5"
                  rx="173"
                  ry="178.5"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-3.27832e-05"
                    y1="87.2457"
                    x2="255.501"
                    y2="88.5747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.07" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* </section> */}
    </WrappLayout>
  );
};

export default Question;
