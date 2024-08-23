import React from "react";
import Auth from "./Auth";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 px-5 shadow-md">
      <Image src={"/logo.svg"} height={30} width={120} alt="logo" />
      <Auth />
    </div>
  );
};

export default Navbar;
