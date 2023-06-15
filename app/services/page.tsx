"use client";
import React from "react";
import Services from "@/components/services";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function page() {
  return (
    <div>
      <Navbar />
      <Services />
      <Footer />
    </div>
  );
}

export default page;
