import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex justify-between z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
     <Link href={"/"} className="flex items-center gap-1">
       <Image
          src="/icons/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="max-sm:size-10"
       />
       <p className="text-[20px] text-white font-extrabold max-sm:hidden">
        Yoom
       </p>
     </Link>
     <div className="flex-between gap-5">
          <SignedIn>
            <UserButton />
          </SignedIn>
          
       <MobileNav/>
     </div>
    </nav>
  )
}
