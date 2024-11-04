import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-indigo-600 h-14 text-white flex justify-between p-10 items-center">
      <Link href={"/"} className="text-3xl font-bold">
        FUTURE STORE
      </Link>
      <Link className="text-xl" href={"/products"}>
        Our Products
      </Link>
    </div>
  );
};

export default Header;
