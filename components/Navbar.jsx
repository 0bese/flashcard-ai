import React from "react";
import Auth from "./Auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 px-5 shadow-md">
      <Image src={"/logo.svg"} height={30} width={120} alt="logo" />
      <div className="flex gap-4 items-center justify-center">
        <Link href={"/flashcards"}>Flashcards</Link>
        <Auth />
      </div>
    </div>
  );
};

export default Navbar;
