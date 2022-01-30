import React from "react";
import Link from 'next/link'
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
        <h1 className="logo"><Image width={128} height={77} src="/logo.png"/></h1>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/ninjas'>Ninjs Listing</Link>
    </nav>
  );
}
