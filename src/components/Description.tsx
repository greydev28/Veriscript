"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import { FaWallet } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
export default function Description() {
  /*  const data = [
    {
      id: 1,
      doctor: "Dr. Benjamin Okoli",
      date: "12/10/25",
      pid: "17234567A",
      fee: "200 HBAR",
      status: "Dispensed",
    },
    {
      id: 2,
      doctor: "Dr. Benjamin Okoli",
      date: "12/10/25",
      pid: "17234567A",
      fee: "200 HBAR",
      status: "Pending",
    },
    {
      id: 3,
      doctor: "Dr. Benjamin Okoli",
      date: "12/10/25",
      pid: "17234567A",
      fee: "200 HBAR",
      status: "Pending",
    },
    {
      id: 4,
      doctor: "Dr. Benjamin Okoli",
      date: "12/10/25",
      pid: "17234567A",
      fee: "200 HBAR",
      status: "Dispensed",
    },
  ];
  const filteredData =
    activeTab === "All"
      ? data
      : activeTab === "Pending"
      ? data.filter((item) => item.status === "Pending")
      : activeTab === "Active"
      ? data.filter((item) => item.status === "Dispensed") // Example mapping for demo
      : data;

  const statusColor = (status: string): string =>
    status === "Dispensed"
      ? "text-blue-600 bg-blue-100"
      : "text-orange-600 bg-orange-100";
 */
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabs = ["All", "Recents", "Active", "Pending"];

  return (
    <div
      className="w-[991px] h-[674px] ml-[262px] 
      mt-31.5"
    >
      <div className="w-full h-[213px] flex flex-col justify-center gap-4 ">
        <div className="font-plusJakarta w-[285px] h-[46px] flex flex-col justify-center gap-2 mb-1.5">
          <h1 className=" font-semibold text-[#4D4D4D] text-[20px]">
            Hey Goodness
          </h1>
          <p className="font-medium text-[#4D4D4D]">How are you doing today</p>
        </div>
        <div className="flex  items-center gap-3.5">
          <div className="relative w-[321px] h-[153px] rounded-2xl overflow-hidden">
            <div className="absolute h-full w-full bg-gradient-to-tl from-[#004B24] to-[#00B155] z-10 " />
            <div className="absolute -top-[65px] opacity-20 z-10">
              <Image
                src="/marked.svg"
                alt="Marked"
                width={447}
                height={246}
                className="object-contain rotate-[18deg] "
              />
            </div>
            <div className="absolute -top-[11px] left-8  opacity-20 z-10">
              <Image
                src="/marked.svg"
                alt="Marked"
                width={447}
                height={246}
                className="object-contain rotate-[18deg]"
              />
            </div>
            <div className="relative z-10 flex flex-col gap-8 pt-7 pl-5  text-white font-plusJakarta">
              <div className="flex items-center gap-2">
                <FaWallet className="w-5 h-5" />
                <span className="text-sm font-semibold">Wallet</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div>
                  <Image
                    src="/subtract.svg"
                    width={32}
                    alt="hbar"
                    height={32}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    10,000.00
                    <span className=" font-semibold"> HBAR</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[321px] h-[153px] rounded-2xl overflow-hidden bg-white">
            <div className="flex flex-col gap-8 pt-7 pl-5 ">
              <div className="flex items-center gap-2">
                <FaBriefcaseMedical className="w-5 h-5 text-[#2C4BFF]" />
                <span className="text-sm font-semibold">Doctor</span>
              </div>
              <div>
                <span className="text-4xl text-[#4D4D4D]">25</span>{" "}
                <span className="text-sm ">Available</span>
              </div>
            </div>
          </div>

          <div className="w-[321px] h-[153px] rounded-2xl overflow-hidden bg-white">
            <div className="flex flex-col gap-8 pt-7 pl-5 ">
              <div className="flex items-center gap-2">
                <Image
                  src="/Prescription.svg"
                  width={24}
                  height={24}
                  alt="pharmacy"
                />
                <span className="text-sm font-semibold">Pharmacy</span>
              </div>
              <div>
                <span className="text-4xl text-[#4D4D4D]">200</span>{" "}
                <span className="text-sm ">near you </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[991px] h-[437px] flex flex-col gap-3 ">
          <div className="w-full h-8 flex justify-between items-center ">
            <h1 className="font-semibold font-plusJakarta text-[#4D4D4D]">
              Recent Activity
            </h1>
            <div className="w-[300px] h-8 relative">
              <input
                type="text"
                placeholder="search"
                className="w-full h-full placeholder:text-[#4D4D4D] place border-[0.5px] border-[#4D4D4D]/50 pl-8 pr-1.5 py-1.5 rounded-lg focus:outline-none focus:ring-0 focus:border-green-700"
              />
              <div className="absolute text-[#525866]  left-2 top-1/2 -translate-y-1/2">
                <Search className=" w-[15px] h-[15px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-8 rounded-lg px-6 py-6 flex justify-between items-center bg-white">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`focus:outline-0 cursor-pointer transition-colors font-inter ${
                activeTab === tab
                  ? "text-[#03B156] border-b-2 border-[#03B156]"
                  : "text-[#808080] hover:text-green-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <table className="w-[991px] h-[350px] px-2.5 pb-3.5 bg-white">
          <thead className="text-gray-500 w-full px-3 h-16 flex justify-between items-center">
            <tr>
              <th className="text-right">
                <input type="checkbox" />
              </th>
              <th className="text-left px-2.5">S/N</th>
              <th className="text-left">Doctor</th>
              <th className="text-left">Date</th>
              <th className="text-left">Prescription ID</th>
              <th className="text-left">Fee</th>
              <th className="text-left">Status</th>
              <th className="text-left">
                <Image
                  src="/ThreeVertical.svg"
                  alt="Options menu"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
