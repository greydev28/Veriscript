"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative h-full z-50 ">
        <div className="max-w-7xl mx-[72px] flex justify-center items-center ">
          <div className="absolute  top-[60%]  right-[-50px] h-[600px] blur-2xl opacity-50 w-[600px]  bg-gradient-to-l from-[#03B156] to-white z-0" />
          <div className=" max-w-[600px] max-h-[380px] flex flex-col gap-2 my-[58px]">
            <div className="h-[52px]  bg-[#e6f7ee]  flex justify-between items-center px-4 py-2 w-fit rounded-full gap-2 mb-1.5 font-plusJakarta max-md:mx-auto">
              <Image
                src="/Vector.png"
                alt="secure precription"
                width={28}
                height={23.99}
              />
              <span className="text-xl text-[var(--button-background)] font-semibold ">
                Secure Prescriptions
              </span>
            </div>
            <div>
              <h1 className="font-bold  text-5xl  leading-none text-[#454861] max-md:text-center">
                Get digital prescriptions from certified doctors and trusted
                pharmacies.
              </h1>
              <p className="text-lg   my-2.5 text-[#454861] px-2 text-center">
                Connect with certified medical professionals anytime, get
                personalized digital prescriptions, and access a network of
                trusted pharmacies for your medication needs.
              </p>
            </div>
            <div className="w-fit mx-auto">
              <button
                className="h-[48px] w-[216px] rounded-[10px] py-[10px] px-[24px] 
             bg-[var(--button-background)] text-white 
             transition duration-100 ease-in-out hover:opacity-50 
             text-[16px] cursor-pointer font-inter font-semibold"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className=" grid place-content-center z-50 mr-2.5 ">
            <Image
              src="/image.png"
              alt="hero"
              width={900}
              height={900}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
