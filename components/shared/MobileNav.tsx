import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
// import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { cn } from "@/lib/utils";

const MobileNav = () => {
	return (
		<nav className="md:hidden flex flex-col">
			<Sheet>
				<SheetTrigger className="align-middle">
					<Image
						src="/assets/icons/menu.svg"
						width={24}
						height={24}
						alt="menu"
						className=" cursor-pointer"
					/>
				</SheetTrigger>

				<SheetContent className="flex flex-col gap-6  bg-white md:hidden">
					<Image
						src="/assets/images/logo.svg"
						alt="logo"
						width={128}
						height={24}
					/>
					{/* <Separator className="border border-gray-50" /> */}
					<div className=" ml-0">
						<NavItems />
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default MobileNav;
