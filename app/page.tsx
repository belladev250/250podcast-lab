import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="w-full h-screen relative ">
            <div className="absolute inset-0 bg-black"></div>
          <Image
            src="/home-bg.png"
            alt="250podcast Logo"
            fill
            className="object-cover opacity-50"
            priority
          />

          <div className="flex absolute inset-0 justify-between  top-2/3 gap-10 px-20 bg-black/2 backdrop-blur-sm py-10 ">

            <div className="text-white space-y-4">
                <h1 className="text-3xl font-bold">EMPOWERING THE NEW RWANDAN </h1>
                <h1 className="text-3xl font-bold">PODCASTING MOVEMENT </h1>

                <h1 className="text-xl ">Join a community of podcasters, innovators, and changemakers driving Rwanda’s tech revolution.</h1>
            </div>

            <div className="mt-20 ">
            <button className="bg-NeonGreen text-militaryGreen px-6 py-3 rounded-md border-2 border-militaryGreen font-semibold  transition">
                APPLY HERE
            </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
