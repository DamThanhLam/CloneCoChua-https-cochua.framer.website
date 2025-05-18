"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderNav from "./components/HeaderNav";

export default function Home() {
  const pathname = usePathname();
  return (
    <div>
      <HeaderNav></HeaderNav>
      <div className="relative w-full h-full pt-24">
        <img
          src="/images/P4sopk090WXoIFymswenju5UIUI.avif"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <img src="/images/n69AB68uMbldTJJ8i1dkbJf4D0.png" alt="Rạch Đời Sớt Hả" className="w-[480px] max-w-full" />
        </div>

       
      </div>

    </div>
  );
}
