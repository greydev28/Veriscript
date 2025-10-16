import Image from "next/image";
import { title } from "node:process";

export default function dashboard() {
  const details = [
    { id: 1, image: "/patient", title: "patient" },
    { id: 2, image: "/doctor.png", title: "Doctor" },
    { id: 3, image: "/pharmacist.png", title: "patient" },
  ];
  return (
    <section className=" w-full max-h-screen bg-white over-flow-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className=" mt-[27.5px] w-1/2">
          <Image
            src="/profile-images.png"
            alt="welcome"
            width={777}
            height={521}
            className="object-contain"
            priority
          />
        </div>
        <div>
          <div>
            <Image
              src="/logo.png"
              alt="veriscript"
              width={150}
              height={21}
              className="object-contain"
            />
          </div>
          <div>
            <h2>
              Hello ✨<br /> Welcome to Veriscript
            </h2>
            <p>Which of these perfectly describes you.</p>
          </div>
          <div>
            <div>
              <Image
                src="/patient.png"
                alt="patient"
                width={103}
                height={103}
              />
            </div>
            <div>
              <Image src="/doctor.png" alt="patient" width={103} height={103} />
            </div>
            <div>
              <Image
                src="/pharmacist.png"
                alt="patient"
                width={103}
                height={103}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
