import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section className=" overflow-hidden relative min-h-screen z-50 px-5">
      <Navbar />

      <div className="max-w-7xl md:mx-[72px] flex justify-center items-center">
        {/* bg-gradient */}
        <div className="absolute top-[60%]  right-[-50px] h-[600px] blur-2xl opacity-50 w-[600px]  lg:bg-gradient-to-l from-[#03B156] to-white z-0" />

        <div className="max-w-[600px] flex flex-col gap-2 my-[58px] max-lg:items-center max-lg:justify-center max-lg:text-center">
          <div className="h-[52px]  bg-[#e6f7ee]  flex justify-between items-center px-4 py-2 w-fit rounded-full gap-2 mb-1.5 font-plusJakarta">
            <Image
              src="/Vector.png"
              alt="secure precription"
              width={28}
              height={23.99}
            />
            <span className="text-xl max-md:text-base text-[var(--button-background)] font-semibold text-nowrap">
              Secure Prescriptions
            </span>
          </div>

          <div>
            <h1 className="font-bold text-5xl max-md:text-4xl  leading-none text-[#454861]">
              Get digital prescriptions from certified doctors and trusted
              pharmacies.
            </h1>
            <p className="text-lg max-md:text-sm my-2.5 text-[#454861] px-2 max-md:px-0">
              Connect with certified medical professionals anytime, get
              personalized digital prescriptions, and access a network of
              trusted pharmacies for your medication needs.
            </p>
          </div>
          <div>
            <button
              className="h-[48px] w-[216px] rounded-[10px] py-[10px] px-[24px] 
             bg-[var(--button-background)] text-white border-0 
             transition duration-100 ease-in-out hover:opacity-50 
             text-[16px] cursor-pointer font-inter font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-[60px] z-50  max-lg:hidden">
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
  );
}
