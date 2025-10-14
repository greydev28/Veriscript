"use client";
import Image from "next/image";
import { useState } from "react";
export default function Dashboard() {
  const details = [
    { id: 1, image: "/patient.png", title: "patient" },
    { id: 2, image: "/pharmacist.png", title: "Doctor" },
    { id: 3, image: "/pharmacist.png", title: "pharmacist" },
  ];

  const [selected, setSelected] = useState<null | number>(null);
  return (
    <section className=" w-full min-h-screen bg-white overflow-hidden font-plusJakarta">
      <div className="max-w-7xl mx-[30px] flex justify-between items-center">
        <div className="hidden md:block md:my-[27.5px] w-1/2 overflow-hidden">
          <Image
            src="/profile-images.png"
            alt="welcome"
            width={600}
            height={300}
            className="object-contain h-full w-full"
            priority
          />
        </div>
        <div className="w-[520px] min-h-[291px] flex flex-col gap-[31px]">
          <div className=" w-[128px] h-[32px]">
            <Image
              src="/logo.png"
              alt="veriscript"
              width={150}
              height={21}
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="font-semibold leading-tight  text-2xl text-[#4D4D4D]">
              Hello ✨<br /> Welcome to Veriscript
            </h2>
            <p className="font-semibold text-[#808080] leading-tight my-1.5">
              Which of these perfectly describes you
            </p>
          </div>

          <div className=" flex  justify-between items-center  w-[520px] h-[175px] gap-[10px] ">
            {details.map((detail) => (
              <button
                key={detail.id}
                className="border-2 border-[#CCCCCC] w-[168px] h-[175px] rounded-2xl px-[10px] py-[9px] relative cursor-pointer"
                onClick={() => setSelected(detail.id)}
              >
                <div className="w-[148px] h-[158px] flex flex-col justify-center items-center gap-2 px-4 py-4">
                  <div className="w-[103px] h-[103px] p-2">
                    <Image
                      src={detail.image}
                      alt={detail.title}
                      width={103}
                      height={103}
                      className="w-full h-full"
                    />
                  </div>

                  <span className="text-[#808080] font-semibold ">
                    {detail.title}
                  </span>
                </div>
                {/* decorative circle */}
                <input
                  type="checkbox"
                  readOnly
                  checked={selected === detail.id}
                  className={`appearance-none border-2 border-[var(--button-background)] absolute top-3 left-3 w-[16px] h-[16px] rounded-full ${
                    selected === detail.id
                      ? "bg-[var(--button-background)]"
                      : "bg-white"
                  }`}
                />
                {/* mark icon */}

                {selected === detail.id && (
                  <div className="absolute top-3 left-3 w-[15px] h-[15px] rounded-full flex items-center justify-center">
                    <Image
                      src="/icon.png"
                      alt="selected"
                      width={10}
                      height={10}
                      className="object-contain"
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
          <button className="bg-[var(--button-background)] w-[128px] h-[48px] text-white py-[9px] flex items-center justify-center gap-2 rounded-2xl cursor-pointer hover:opacity-50 transition duration-300">
            Continue{" "}
            <Image src="/vector2.png" alt="angle" width={5.83} height={9.55} />{" "}
          </button>
          <div
            className="text-[#35C178] font-semibold font-plusJakarta w-[130px] h-[48px] text-[16px] cursor-pointer hover:underline hover:opacity-50 transition duration-300
"
          >
            <p>
              Already have an account?{" "}
              <span
                className="whitespace-nowrap
"
              >
                Sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
