"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/register");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-5xl text-center bg-gradient-to-l from-indigo-900 to-black bg-clip-text text-transparent pb-2">
          Welcome to Muxy.
        </h1>
        <Button
          onClick={handleClick}
          size={"lg"}
          className="w-full text-[16px] px-5 "
        >
          Let's Started now
        </Button>
      </div>
      <div className="absolute inset-0 -z-10 hidden xl:block">
        <Image
          className=""
          src="/bg-gradient-4k.webp" // remplace par le bon chemin
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
