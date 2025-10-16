"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { PiSquaresFourFill } from "react-icons/pi";
import { FaBriefcaseMedical } from "react-icons/fa";
import { TbPill } from "react-icons/tb";
import { FaWallet } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

export default function Asidebar() {
  const pages = [
    {
      id: 1,
      name: "Dashboard",
      image: <PiSquaresFourFill className="w-[15px] h-[15px]" />,
      path: "/patient-profile",
    },
    {
      id: 2,
      name: "Doctor",
      image: <FaBriefcaseMedical className="w-[15px] h-[15px]" />,
      path: "/doctor-profile",
    },
    {
      id: 3,
      name: "Pharmacy",
      image: <TbPill className="w-[15px] h-[15px]" />,
      path: "/pharmacist-profile",
    },
    {
      id: 4,
      name: "Wallets",
      image: <FaWallet className="w-[15px] h-[15px]" />,
      path: "/wallet",
    },
  ];
  const router = useRouter();
  const pathname = usePathname();
  return (
    <aside className="fixed left- 0 top-0 bottom-0 hidden lg:block w-[230px]  py-[54px] px-[23px] ">
      <div className="w-[184px] h-full flex flex-col gap-7.5 ">
        <div className="flex-1 ">
          <div className="mb-[32px]  ">
            <Image
              src="/logo2.svg"
              alt="logo2"
              width={160}
              height={40}
              className="object-contain"
            />
          </div>

          <div className="flex gap-3 flex-col items-center justify-center text-[#4D4D4D] font-dmSans  flex-1">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => router.push(page.path)}
                className={`w-full h-[48px] py-2.5 px-6 flex items-center  gap-4 ${
                  pathname === page.path
                    ? "bg-[#03B156] text-white rounded-2xl"
                    : "bg-white text-[#4D4D4D]"
                }`}
              >
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  {page.image}
                </div>

                <div className="font-plusJakarta font-medium">{page.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <button className="flex font-medium font-dmSans py-2.5 px-6 items-center  gap-4 text-[#4D4D4D] cursor-pointer">
            <IoIosLogOut className="w-[20px] h-[20px] " /> Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
