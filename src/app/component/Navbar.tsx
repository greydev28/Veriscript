import Image from "next/image";
import { ChevronDown } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="bg-white  mt-[40px] mx-[72px] z-50">
      <div className="max-w-7xl mx-auto px-[29px] py-[32px] flex justify-between items-center border-2 border-[#e6f7ee] rounded-xl">
        <div className="flex-1 ">
          <Image
            src="/logo.png"
            alt="veriscript"
            width={97}
            height={21}
            className="object-contain"
          />
        </div>
        <ul className="flex justify-between items-center w-[536px] h-[44px] gap-[10px] text-xl font-medium">
          <li className="cursor-pointer hover:text-[var(--button-background)] transition">
            How it works
          </li>
          <li className="cursor-pointer flex items-center gap-1  hover:text-[var(--button-background)] transition">
            Industries <ChevronDown size={18} className="ml-[4px]" />
          </li>
          <li className="cursor-pointer hover:text-[var(--button-background)] transition">
            Pricing
          </li>
          <button className="bg-[var(--button-background)] text-white px-[14px] py-[10px] rounded-lg border-0 hover:opacity-50 hover:transition duration-100 ease-in-out cursor-pointer">
            Get Started
          </button>
        </ul>
      </div>
    </nav>
  );
}
