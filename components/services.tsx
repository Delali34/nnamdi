import { motion } from "framer-motion";
import React from "react";

function services() {
  return (
    <div>
      <div className="max-w-7xl xl:px-40 2xl:px-0 mx-auto p-5 " id="services">
        <div>
          {" "}
          <h1 className="md:text-4xl text-2xl">OUR SERVICES</h1>
          <h1 className="bg-green-400 w-16 h-2 mt-3 "></h1>
        </div>
        <div className="mt-10 md:text-xl text-sm">
          <motion.h1
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
            className="font-bold"
            id="sea"
          >
            SEA FREIGHT
          </motion.h1>
          <motion.div
            initial={{
              y: -90,
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
          >
            {" "}
            <p className="pt-5">
              Whether you have general or perishable cargo we will ensure your
              shipment receives all the attention it deserves to ensure that you
              obtain clearance and delivery in a timely and cost effective
              manner.
            </p>
            <p className="pt-5">
              With Sea Freight professionals matching frequent sailings and
              flexible service options to your specific business objectives,
              Greenvine promises a new taste of Personal Service.
            </p>
            <p className="pt-5">
              Our freight management experts partner with you to learn your
              business first-hand. Equipped with an intimate understanding of
              your supply chain requirements, we pull from a range of standard
              Sea Freight products and supplementary options to secure the space
              allocation, timing, frequency and rates that fit your precise
              objectives.
            </p>
            <p className="pt-5">
              Whether we need to reserve an oversize container or securely
              transport your high-value cargo, experts at Greenvine treat each
              shipment with the care and attention it takes to earn your trust
            </p>
          </motion.div>
        </div>
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
          className="mt-10 md:text-xl text-sm"
        >
          <h1 className="font-bold" id="air">
            AIR FREIGHT
          </h1>
          <p className="pt-5">
            Whether you are a private importer or a multi-national corporation
            we will ensure your shipment receives all the care and attention it
            needs.
          </p>
          <p className="pt-5">
            its worldwide coverage has experienced, reputable cargo agents in
            most international airports throughout the world has the ability to
            move cargo of any size and nature.
          </p>
          <p className="pt-5">
            With an experienced team of Air Freight specialists delivering on
            your daily priorities for time, space, frequency and cost, you have
            a new taste of Personal Service.
          </p>
          <p className="pt-5">
            Our standard Air Freight products and their customizable options
            bring added flexibility to your supply chain.
          </p>
        </motion.div>
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
          className="mt-10 md:text-xl text-sm"
        >
          <h1 className="font-bold" id="haul">
            HAULAGE
          </h1>
          <p className="pt-5">
            We have the ability to haul your cargo from the ports to any part of
            the country. We can also haul your cargo to other landlocked
            countries eg. Burkina Faso and Mali. The service is designed to
            attract small and medium-sized importers as well as heavy importers.
          </p>
          <p className="pt-5">
            This means Greenvine can move Full Truck Load and Less than Full
            track load. From any location in Ghana to any location in
            Ghana.Greenvine has the ability to haul your cargo from the ports to
            any part of the country. We can also haul your cargo to other
            landlocked countries eg. Burkina Faso and Mali. The service is
            designed to attract small and medium-sized importers as well as
            heavy importers.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default services;
