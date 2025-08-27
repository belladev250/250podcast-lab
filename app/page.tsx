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
        </div>
      </main>
    </div>
  );
}
