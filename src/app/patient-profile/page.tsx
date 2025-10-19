import Image from "next/image";

import PatientNavbar from "@/components/PatientNavbar";
import Description from "@/components/Description";
import Asidebar from "@/components/Asidebar";
export default function PatientProfile() {
  return (
    <section className="w-full min-h-screen bg-[#F5F5F5]">
      <Asidebar />
      <PatientNavbar />
      <Description />
    </section>
  );
}
