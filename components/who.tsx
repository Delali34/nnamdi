import React from "react";
import Image from "next/image";
import first from "../public/pexels-albin-berlin-906982.jpg";
import second from "../public/pexels-david-dibert-1117210.jpg";
import third from "../public/pexels-pixabay-416405.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

function who() {
  return (
    <div className="bg-slate-300 pb-20">
      <motion.div
        initial={{
          y: -70,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="pt-10 "
      >
        <h1 className="text-center text-4xl font-bold">WHO WE ARE</h1>
      </motion.div>
      <motion.div
        initial={{
          y: 70,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="max-w-7xl mx-auto xl:w-[50%] w-[80%]"
      >
        <p className="text-center pt-8 px-5 xl:text-xl text-sm">
          we are passionate about delivering seamless logistics solutions that
          drive efficiency, reliability, and growth. With of industry
          experience, we have established ourselves as a leading provider in the
          field.
        </p>
      </motion.div>
      <div className=" flex flex-col lg:flex-row gap-10 justify-center items-center pt-20 pb-5">
        <Link href="/about#sea">
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="w-[350px]  hover:shadow-lg hover:shadow-black  cursor-pointer"
          >
            <Image
              className="w-[350px] h-[200px]"
              src={first}
              width={1000}
              height={1000}
              alt="about us"
            ></Image>
            <h1 className="text-2xl text-center p-5 font-bold bg-white">
              SEA FREIGHT
            </h1>
            <p className="text-center p-5 bg-white">
              Whether you have general or perishable cargo we will ensure your
              shipment receives all the attention it deserves to ensure that you
              obtain clearance and delivery in a timely and...
            </p>
            <div className="bg-blue-400 p-5 hover:border hover:border-black">
              <h1 className="text-center md:text-2xl text-sm">Learn more</h1>
            </div>
          </motion.div>
        </Link>
        <Link href="/about#air">
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="w-[350px]  hover:shadow-lg hover:shadow-black  cursor-pointer"
          >
            <Image
              className="w-[350px] h-[200px]"
              src={second}
              width={1000}
              height={1000}
              alt="about us"
            ></Image>
            <h1 className="text-2xl text-center p-5 font-bold bg-white">
              AIR FREIGHT
            </h1>
            <p className="text-center p-5 bg-white">
              Whether you have general or perishable cargo we will ensure your
              shipment receives all the attention it deserves to ensure that you
              obtain clearance and delivery in a timely and...
            </p>

            <div className="bg-blue-400 p-5 hover:border hover:border-black">
              <h1 className="text-center md:text-2xl text-sm">Learn more</h1>
            </div>
          </motion.div>
        </Link>
        <Link href="/about#haul">
          {" "}
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="w-[350px]  hover:shadow-lg hover:shadow-black  cursor-pointer"
          >
            <Image
              className="w-[350px] h-[200px]"
              src={third}
              width={1000}
              height={1000}
              alt="about us"
            ></Image>
            <h1 className="text-2xl text-center p-5 font-bold bg-white">
              HAULAGE
            </h1>
            <p className="text-center p-5 bg-white">
              Whether you have general or perishable cargo we will ensure your
              shipment receives all the attention it deserves to ensure that you
              obtain clearance and delivery in a timely and...
            </p>
            <div className="bg-blue-400 p-5 hover:border hover:border-black">
              <h1 className="text-center md:text-2xl text-sm">Learn more</h1>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default who;
