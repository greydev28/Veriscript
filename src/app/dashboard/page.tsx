import Image from "next/image";

export default function dashboard() {
  const details = [
    { id: 1, image: "/patient", title: "patient" },
    { id: 2, image: "/doctor.png", title: "Doctor" },
    { id: 3, image: "/pharmacist.png", title: "patient" },
  ];
  return (
    <section className=" min-h-full flex bg-white font-plusJakarta">
      <div className="max-w-7xl mx-[30px] flex justify-between items-center">
        <div className=" my-[27.5px] h-fit  w-1/2 relative hidden lg:flex items-center justify-center overflow-hidden">
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
          <div className="flex justify-between items-center">
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
