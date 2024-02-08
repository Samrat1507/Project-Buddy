import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { useState, useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if(!localStorage.getItem("theme"))
      localStorage.setItem("theme", "light");
  }, []);


  return (
    <main className="h-screen bg-gradient-to-br from-[#F5F7FA] to-[#C3CFE2] dark:bg-gradient-to-br dark:from-[#464647] dark:to-[#030913] px-5 py-5">
      <Navbar />
      <Hero />
    </main>
  );
}
