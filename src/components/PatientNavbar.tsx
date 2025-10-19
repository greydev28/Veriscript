import Image from "next/image";
export default function Patientbar() {
  return (
    <div className="w-[1050px] h-[94px] ml-[230px] bg-white flex justify-between items-center py-5.5 px-8 gap-2.5 font-plusJakarta">
      <div className="flex items-center justify-center gap-2.5 bg-[#F5F5F5] py-3 px-3.5 rounded-xl">
        <div className="w-6 h-6">
          <Image
            src="/mapin.svg"
            alt="location"
            width={17}
            height={21}
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-[#4D4D4D] font-medium lead-tight">
            28 Admin Rd Ikeja Lagos
          </h1>
        </div>
        <div>
          <Image
            src="/caretdown.svg"
            alt="cartdown"
            width={14}
            height={8}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-[242px] h-[32px] gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#00B155] grid place-content-center">
          <Image
            src="/image 4.svg"
            width={46}
            alt="patient-profile"
            height={46}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="font-medium ">Goodness Okwudii</div>
        <div>
          <Image
            src="/Bell.svg"
            alt="bell"
            width={46}
            height={46}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
