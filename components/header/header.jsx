import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
    <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <Image
        src="/logo.png"
        width={40}
        height={40}
        className="mx-auto"
        alt={"logo"}
      />
      <Link href="/">
        <h1 className="text-2xl text-white font-bold mt-4">FIRST PR</h1>
      </Link>
      <p className="text-slate-300">🤟 Welcome to your Readme section 💻</p>
    </div>
  </header>
);
  
}

export default Header