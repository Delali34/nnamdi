"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import Map from "@/components/map";
import Footer from "@/components/footer";
import Link from "next/link";
import Type from "@/components/type";
import { GrLinkTop } from "react-icons/gr";

import Menu from "../components/menu";

import bground from "../public/WISDECK LOGO WITH TRANSPARENT BACKGROUND.png";
import Who from "@/components/who";
import Contact from "@/components/contact";
export default function Home() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative ">
        <video
          className="w-full object-cover h-screen "
          autoPlay
          muted
          loop
          src="/pexels-alex-kad-5171156-3840x2160-60fps_H.264.mp4"
        ></video>
      </div>
      <div className="bg-black/40 h-screen absolute top-0 bottom-0 right-0 left-0"></div>
      <div className="absolute text-white flex w-full justify-between p-5 items-center  top-0 left-0 right-0 z-50">
        <div>
          <Link href="/">
            <div>
              {" "}
              <Image
                className="cursor-pointer md:w-[100px] md:h-[70px] w-[70px] h-[40px]"
                src={bground}
                width={100}
                height={100}
                alt="nnamdi"
              ></Image>
            </div>{" "}
          </Link>
        </div>

        <div>
          <div className="absolute right-10 md:hidden top-6">
            <HiBars3BottomRight
              className="text-4xl font-bold"
              onClick={showMenu}
            />
          </div>
          <div className="md:flex hidden justify-between md:gap-10 gap-5 items-center bg-white/10 backdrop-blur-md p-5 text-2xl">
            <Link href="/about#contact">
              <div>
                <h1 className="cursor-pointer hover:underline">About Us</h1>
              </div>
            </Link>
            <Link href="/about#services">
              <div>
                {" "}
                <h1 className="cursor-pointer hover:underline">Services</h1>
              </div>
            </Link>
            <Link href="#contact">
              <div>
                {" "}
                <h1 className="cursor-pointer hover:underline">Contact</h1>
              </div>
            </Link>
          </div>
          <Menu showMenu={showMenu} active={active} />
        </div>
      </div>
      {/* <div className="flex items-center h-[100vh] absolute w-[100%] top-0  justify-center md:px-10 px-5">
        <div className="">
          <h1 className="text-white text-4xl font-font xl:text-7xl 2xl:text-[120px] md:text-5xl font-extrabold  ">
            Efficient logistics
          </h1>
          <h1 className="text-white text-center text-sm font-font xl:text-2xl md:text-2xl 2xl:text-4xl   xl:pt-5">
            solutions for seamless operations
          </h1>
        </div>
      </div> */}
      <Type />
      <Who />
      <Contact />
      <Map />
      <Footer />
      {showScrollTop && (
        <button
          className="fixed md:bottom-0   md:right-3 right-0 bottom-0  md:m-5 m-2 p-3 font-font bg-blue-400  shadow-md  hover:bg-white hover:border hover:border-black transition transform duration-200 ease-in-out"
          onClick={handleScrollToTop}
        >
          <GrLinkTop />
        </button>
      )}
    </div>
  );
}
