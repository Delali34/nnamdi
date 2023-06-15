import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  showMenu: () => void;
  active: boolean;
}

function Menu({ showMenu, active }: Props) {
  return (
    <div>
      <motion.div
        initial={{
          x: 70,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: false,
        }}
        className={
          active
            ? "md:hidden flex-col flex fixed inset-0 justify-center left-1/4 bg-black/40 backdrop-blur-lg gap-8 items-center"
            : "hidden"
        }
      >
        <AiOutlineCloseCircle className="text-5xl" onClick={showMenu} />
        <Link href="/about#about">
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
              once: false,
            }}
          >
            <h1
              className="cursor-pointer hover:underline text-4xl"
              onClick={showMenu}
            >
              About Us
            </h1>
          </motion.div>
        </Link>
        <Link href="/services">
          <motion.div
            initial={{
              x: 70,
              opacity: 0,
            }}
            transition={{
              duration: 0.85,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
            }}
          >
            <h1
              className="cursor-pointer hover:underline text-4xl"
              onClick={showMenu}
            >
              Services
            </h1>
          </motion.div>
        </Link>
        <Link href="#contact">
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
              once: false,
            }}
          >
            <h1
              className="cursor-pointer hover:underline text-4xl"
              onClick={showMenu}
            >
              Contact
            </h1>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}

export default Menu;
