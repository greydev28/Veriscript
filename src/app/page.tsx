import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-7xl  overflow-hidden relative max-h-screen mx-auto  z-50 flex justify-between items-center ">
      <div className="absolute  top-[60%]  right-[-50px] h-[600px] blur-2xl w-[600px]  bg-gradient-to-l from-[#e6f7ee] to-transparent z-0" />
      <div className="max-w-[626px] flex flex-col gap-2">
        <div className="h-[52px]  bg-[#e6f7ee]  flex justify-between items-center px-4 py-2 w-fit rounded-full gap-2 mb-1.5">
          <Image
            src="/Vector.png"
            alt="secure precription"
            width={28}
            height={23.99}
          />
          <span className="text-xl text-[var(--button-background)] font-semibold">
            Secure Prescriptions
          </span>
        </div>
        <div>
          <h1 className="font-bold  text-5xl  leading-tight text-gray-900">
            Get digital prescriptions from certified doctors and trusted
            pharmacies.
          </h1>
          <p className="text-lg  leading-snug my-1.5 text-gray-500 px-2">
            Connect with certified medical professionals anytime, get
            personalized digital prescriptions, and access a network of trusted
            pharmacies for your medication needs.
          </p>
        </div>
        <div>
          <button
            className="h-[48px] w-[216px] rounded-[10px] py-[10px] px-[24px] 
             bg-[var(--button-background)] text-white border-0 
             transition duration-100 ease-in-out hover:opacity-50 
             text-[16px] cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/image.png"
          alt="hero"
          width={900.3}
          height={900.3}
          className="object-contain"
          priority
        />
        <div className="absolute w-12 h- bottom-0 left-0 bg-[#e6f7ee]" />
      </div>
    </section>
  );
}
