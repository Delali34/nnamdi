"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from "next/link";
import Menu from "../components/menu";
import bground from "../public/WISDECK LOGO WITH TRANSPARENT BACKGROUND.png";
import { motion } from "framer-motion";

export default function Home() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className=" bg-blue-500 text-white flex w-full justify-between p-5 items-center ">
      <motion.div
        initial={{
          x: -70,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
      >
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
          </div>
        </Link>
      </motion.div>

      <div>
        <motion.div
          initial={{
            x: 70,
            opacity: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="absolute right-10 md:hidden top-6"
        >
          <HiBars3BottomRight
            className="text-4xl font-bold"
            onClick={showMenu}
          />
        </motion.div>
        <div className="md:flex hidden justify-between md:gap-10 gap-5 items-center bg-white/10 backdrop-blur-md p-5 text-2xl">
          <Link href="/about">
            <div>
              {" "}
              <h1 className="cursor-pointer hover:underline">About Us</h1>
            </div>
          </Link>
          <Link href="/services">
            <div>
              <h1 className="cursor-pointer hover:underline">Services</h1>
            </div>
          </Link>
          <Link href="/.#contact">
            <div>
              <h1 className="cursor-pointer hover:underline">Contact</h1>
            </div>
          </Link>
        </div>
        <Menu showMenu={showMenu} active={active} />
      </div>
    </div>
  );
}
