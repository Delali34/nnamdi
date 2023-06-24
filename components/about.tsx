import React from "react";
import Image from "next/image";
import core1 from "../public/pexels-jopwell-2422294 (1) (1).jpg";
import core2 from "../public/pexels-mica-asato-1198171 (1).jpg";
import { motion } from "framer-motion";

function about() {
  return (
    <div>
      <div
        className="max-w-7xl mx-auto p-5 lg:p-20 xl:px-40 2xl:px-0"
        id="#about"
      >
        <motion.h1
          initial={{
            x: -70,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10 md:text-4xl text-2xl font-medium"
        >
          ABOUT US{" "}
        </motion.h1>
        <motion.h1
          initial={{
            x: -70,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="bg-blue-400 w-16 h-2 mt-3 "
        ></motion.h1>
        <motion.div
          initial={{
            x: 70,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className="pt-10"
        >
          <p className="md:text-xl text-sm ">
            At{" "}
            <span className="font-bold">
              Namdi And Ifeoma Corporate Service Provider
            </span>
            , we are a dedicated team of professionals passionate about
            delivering comprehensive energy solutions to our valued clients.
            With extensive expertise in the residual fuel industry, we strive to
            provide unmatched knowledge and exceptional services. Our
            Commitment: We are committed to fueling industries with reliable,
            high-quality residual fuel solutions. Our focus is on understanding
            your unique energy requirements and delivering tailored solutions to
            optimize your operations.
            <br /> <br /> Industry Leaders: As industry leaders, we stay ahead
            of the curve, constantly adapting to the evolving energy landscape.
            Our team stays abreast of the latest industry trends, regulations,
            and technological advancements to provide you with cutting-edge
            solutions. Customer-Centric Approach: We prioritize our clients,
            putting their needs at the forefront of everything we do. By
            fostering strong partnerships and understanding your business
            objectives, we ensure that our solutions align with your goals,
            leading to long-term success.
          </p>
        </motion.div>
        <div>
          <motion.h1
            initial={{
              x: -80,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mt-10 md:text-4xl text-2xl font-medium"
          >
            OUR CORE VALUES
          </motion.h1>
          <motion.h1
            initial={{
              x: -70,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="bg-blue-400 w-16 h-2 mt-3 "
          ></motion.h1>
        </div>
        <div className="flex items-center lg:flex-row flex-col gap-5">
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mt-10  relative"
          >
            <Image
              className="sm:w-[700px] sm:h-[400px] h-[200px] object-cover"
              src={core1}
              width={1000}
              height={1000}
              alt=""
            ></Image>
            <div className="bg-black/40 absolute sm:w-[100%] sm:h-[100%] h-[200px] top-0 right-0 bottom-0 left-0 "></div>
            <div className=" absolute md:text-5xl text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-white font-bold">Teamwork</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              duration: 1,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="lg:mt-10 mt-5  relative"
          >
            <Image
              className="w-[700px] sm:h-[400px] h-[200px] object-cover"
              src={core2}
              width={1000}
              height={1000}
              alt=""
            ></Image>
            <div className="bg-black/40 absolute sm:w-[100%] sm:h-[100%] h-[200px] top-0 right-0  "></div>
            <div className=" absolute md:text-5xl text-3xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-white font-bold">Unity</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default about;
