import React from "react";
import Image from "next/image";
import profile from "@/public/profile2.jpg";

function team() {
  return (
    <div>
      <main>
        <section className="mt-[50px]">
          <div className="my-[30px]">
            <h2 className="text-[#181818] lg:text-[50px] text-[30px] font-extrabold text-center">
              Meet our team
            </h2>
            <p className="text-[#181818] text-center font-medium lg:text-[20px] text-[17px] px-5 lg:px-0">
              Meet our diverse team of world-class creators and event planners.
            </p>
          </div>

          <section className="flex justify-evenly items-start flex-wrap my-8 md:mx-[150px] mx-0">
            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              <div className=" z-10 cursor-pointer hover:scale-105">
                {/* div content */}
                <div className="w-[300px] h-[340px] overflow-hidden ">
                  <Image
                    loading="lazy"
                    className="w-[100%]"
                    src={profile}
                    alt=""
                  />
                </div>
                {/* <h1 className="text-black opacity-100 group-hover:opacity-0 transition-opacity"> */}
                <h1 className="text-black text-center font-semibold">
                  CIDA CIDAIOUS
                </h1>
                <h1 className="text-center italic text-sky-600">
                  Secretary, Wisdeck
                </h1>
              </div>
            </article>

            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              {/* Overlay content */}

              <div className=" z-10 cursor-pointer hover:scale-105">
                {/* div content */}
                <div className="w-[300px] h-[340px] overflow-hidden ">
                  <Image
                    loading="lazy"
                    className="w-[100%]"
                    src={profile}
                    alt=""
                  />
                </div>
                {/* <h1 className="text-black opacity-100 group-hover:opacity-0 transition-opacity"> */}
                <h1 className="text-black text-center font-semibold">
                  CIDA CIDAIOUS
                </h1>
                <h1 className="text-center italic text-sky-600">
                  Secretary, Website
                </h1>
              </div>
            </article>

            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              {/* Overlay content */}

              <div className=" z-10 cursor-pointer hover:scale-105">
                {/* div content */}
                <div className="w-[300px] h-[340px] overflow-hidden">
                  <Image
                    loading="lazy"
                    className="w-[100%]"
                    src={profile}
                    alt=""
                  />
                </div>
                {/* <h1 className="text-black opacity-100 group-hover:opacity-0 transition-opacity"> */}
                <h1 className="text-black text-center font-semibold">
                  CIDA CIDAIOUS
                </h1>
                <h1 className="text-center italic text-sky-600">
                  Secretary, Website
                </h1>
              </div>
            </article>

            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              <div className=" z-10 cursor-pointer hover:scale-105">
                {/* div content */}
                <div className="w-[300px] h-[340px] overflow-hidden">
                  <Image
                    loading="lazy"
                    className="w-[100%]"
                    src={profile}
                    alt=""
                  />
                </div>
                {/* <h1 className="text-black opacity-100 group-hover:opacity-0 transition-opacity"> */}
                <h1 className="text-black text-center font-semibold">
                  CIDA CIDAIOUS
                </h1>
                <h1 className="text-center italic text-sky-600">
                  Secretary, Website
                </h1>
              </div>
            </article>

            <article className="w-[300px] h-[400px] shadow-md relative group pb-[50px] rounded-lg overflow-hidden mb-[80px]">
              <div className=" z-10 cursor-pointer hover:scale-105">
                {/* div content */}
                <div className="w-[300px] h-[340px] overflow-hidden">
                  <Image
                    loading="lazy"
                    className="w-[100%]"
                    src={profile}
                    alt=""
                  />
                </div>
                {/* <h1 className="text-black opacity-100 group-hover:opacity-0 transition-opacity"> */}
                <h1 className="text-black text-center font-semibold">
                  CIDA CIDAIOUS
                </h1>
                <h1 className="text-center italic text-sky-600">
                  Secretary, Website
                </h1>
              </div>
            </article>
          </section>
        </section>
      </main>
    </div>
  );
}

export default team;
