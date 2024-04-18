import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import {
	Sheet,
	SheetContent,
	// SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import MobileNav from "./MobileNav";
import NavItems from "./NavItems";

const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex items-center justify-between">
				<Link href="/" className=" w-36 ">
					<Image
						src="/assets/images/logo.svg"
						alt="logo"
						width={128}
						height={42}
					/>
				</Link>

				<div className=" flex">
					{/* <div className="p-x-2 flex w-32 justify-end items-center space-x-3"> */}
					<div className="p-x-2 flex w-32 justify-end items-center space-x-3">
						<SignedIn>
							<div className=" flex gap-x-8">
								<div className="md:flex hidden">
									<NavItems />
								</div>
								<UserButton afterSignOutUrl="/" />
							</div>
						</SignedIn>
						<div className=" flex justify-center items-center space-x-3">
							{/* <div className="md:flex hidden justify-start items-start">
								<NavItems />
							</div>

							<UserButton afterSignOutUrl="/" /> */}
							<SignedOut>
								<Button
									className="rounded-full"
									asChild
									// size="icon"
								>
									<Link href="/sign-in">Login</Link>
								</Button>
							</SignedOut>
							<Button>
								<Link href="/sell">Sell</Link>
							</Button>

							{/* <div className="flex flex-col gap-6 bg-white md:hidden"> */}
							<div className=" md:hidden">
								<MobileNav />
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
