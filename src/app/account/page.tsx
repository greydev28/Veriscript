"use client";

import Image from "next/image";
import { useState } from "react";
export default function Account() {
  const gender = [
    { id: 1, title: "Male" },
    { id: 2, title: "Female" },
  ];

  const [selectedGender, setSelectedGender] = useState<number | string>("Male");
  return (
    <section className=" w-full min-h-screen bg-white overflow-hidden font-plusJakarta">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-20">
        <div className="hidden lg:block lg:my-[27.5px] w-1/2 overflow-hidden">
          <Image
            src="/profile-images.png"
            alt="welcome"
            width={600}
            height={300}
            className="object-contain h-full w-full"
            priority
          />
        </div>
        <div className="lg:w-1/2 w-full min-h-screen flex flex-col gap-[24px] pb-2.5">
          <button className="capitalize flex justify-center items-center h-[84px] w-[40px]  p-[10px] gap-1">
            {" "}
            <Image
              src="/back-arrow.png"
              alt="back-arrow"
              width={20}
              height={20}
            />{" "}
            back
          </button>
          <div className="">
            <Image
              src="/logo.png"
              alt="back-arrow"
              width={150}
              height={21}
              className="object-contain"
            />{" "}
          </div>
          {/* form  */}
          <form action="">
            <div className="flex flex-col gap-[24px] justify-center ">
              <h1 className="font-semibold text-3xl text-[#4D4D4D] ">
                Create Account
              </h1>
              <p className="font-semibold text-[#808080] ">
                Please fill in the required data to proceed
              </p>
            </div>
            {/* name */}
            <div className="mt-3">
              <label
                htmlFor="name"
                className="flex items-center font-semibold my-1"
              >
                Full Name{" "}
                <span className="flex items-center text-[#525866] font-plusJakarta font-semibold">
                  (Option)
                  <Image
                    src="/info-custom-fill.svg"
                    alt="info-custom-fill"
                    width={20}
                    height={20}
                  />
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John doe"
                  className="w-full  h-[48px] pl-10 pr-10 outline-none rounded-[10px] border border-[#E2E4E9] font-plusJakarta focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute  left-3 top-1/2 -translate-y-1/2  ">
                  <Image
                    src="/profile.svg"
                    alt="profile"
                    width={12}
                    height={15.75}
                    className="object-contain"
                  />
                </div>
                <div className="absolute  right-3 top-1/2 -translate-y-1/2  ">
                  <Image
                    src="/info-custom-fill2.svg"
                    alt="profile"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            {/* date*/}
            <div className="mt-3">
              <label
                htmlFor="date"
                className="flex items-center font-semibold my-1"
              >
                Date of birth{" "}
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full  h-[48px] pl-10 pr-10 py-2.5 outline-none rounded-[10px] border border-[#E2E4E9] focus:ring-2 focus:ring-green-500 placeholder:text-[#525866]"
                />
                <div className="absolute  left-3 top-1/2 -translate-y-1/2  ">
                  <Image
                    src="/calendar-2-line.svg"
                    alt="profile"
                    width={15}
                    height={15}
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2  ">
                  <Image
                    src="/info-custom-fill2.svg"
                    alt="profile"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* email*/}

            <div className="mt-3">
              <label
                htmlFor="email"
                className="flex items-center font-semibold my-1"
              >
                Email Address{" "}
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="grey@gmail.com"
                  className="w-full  h-[48px] pl-10 pr-10 py-2.5  outline-none rounded-[10px] border border-[#E2E4E9]  focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 ">
                  <Image
                    src="/mail-line.svg"
                    alt="profile"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2   ">
                  <Image
                    src="/info-custom-fill2.svg"
                    alt="profile"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            {/* location */}
            <div className="mt-3">
              <label
                htmlFor="location"
                className="flex items-center font-semibold my-1"
              >
                Location{" "}
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Enter location"
                  className="w-full  h-[48px] pl-10 pr-10 py-2.5  outline-none rounded-[10px] border border-[#E2E4E9]  focus:ring-2 focus:ring-green-500"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 ">
                  <Image
                    src="/mapPin.svg"
                    alt="profile"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2   ">
                  <Image
                    src="/info-custom-fill2.svg"
                    alt="profile"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </form>
          <div>
            <h1 className="font-semibold text-[#1B1D21] mb-2 font-inter">
              Gender
            </h1>
            <div className="flex items-center  gap-6">
              {gender.map((item) => (
                <label key={item.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    onClick={() => setSelectedGender(item.id)}
                    checked={selectedGender == item.id}
                    className={`appearance-none border border-[var(--button-background)] rounded-full h-[14px] w-[14px] ${
                      selectedGender === item.id
                        ? "bg-[var(--button-background)]"
                        : "bg-white"
                    } relative`}
                  />
                  {selectedGender === item.id && (
                    <div className="absolute">
                      <Image
                        src="/icon.png"
                        alt="selected"
                        width={12}
                        height={12}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <span className="font-inter font-medium">{item.title}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="bg-[var(--button-background)] w-full h-full text-white py-[9px] flex items-center justify-center gap-2 rounded-2xl cursor-pointer hover:opacity-50 transition duration-300">
            Continue{" "}
            <Image src="/vector2.png" alt="angle" width={5.83} height={9.55} />{" "}
          </button>
          <div
            className="text-[#35C178] font-semibold font-plusJakarta w-full h-[48px] text-[16px] cursor-pointer hover:underline hover:opacity-50 transition duration-300
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
