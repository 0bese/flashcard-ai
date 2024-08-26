import React from "react";
import Auth from "./Auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 px-5 shadow-md">
      <Link href={"/"}>
        <Image src={"/logo.svg"} height={30} width={120} alt="logo" />
      </Link>
      <div className="flex gap-4 items-center justify-center">
        <Link
          className="border-2 py-2 px-4 rounded-3xl hover:cursor-pointer hover:shadow-2xl"
          href={"/flashcards"}
        >
          Flashcards
        </Link>
        <Auth />
      </div>
    </div>
  );
};

export default Navbar;
