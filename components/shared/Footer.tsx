import { aboutUsLinks, resourcesLinks, supportLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<div className="mx-auto max-w-6xl p-20">
			<div className="flex justify-center items-cente  md:justify-between space-x-5 gap-5">
				<div className="">
					<p className="mb-3 font-semibold ">About Us</p>
					<ul className="space-y-4">
						{aboutUsLinks.map((item) => (
							<li
								key={item.title}
								className="text-green-60 md:text-whit transition-colors hover:text-green-20 hover:cursor-pointer"
							>
								{" "}
								<Link href="#">{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="">
					<p className="mb-3 font-semibold ">Support</p>
					<ul className="space-y-4">
						{supportLinks.map((item) => (
							<li
								key={item.title}
								className="text-green-60 md:text-whit transition-colors hover:text-green-20 hover:cursor-pointer"
							>
								{" "}
								{item.title}
							</li>
						))}
					</ul>
				</div>
				<div className="">
					<p className="mb-3 font-semibold ">Our Apps</p>
					<ul className="space-y-4">
						<li className="text-green-60 md:text-whit transition-colors hover:text-green-20 hover:cursor-pointer">
							<Link href="#">
								<Image
									src="/assets/images/apps-store-logo.png"
									alt="Apps Store Logo"
									width={100}
									height={100}
								/>
							</Link>
						</li>
						<li className="text-green-60 md:text-whit transition-colors hover:text-green-20 hover:cursor-pointer">
							<Link href="#">
								<Image
									src="/assets/images/google-play-logo.png"
									alt="google Play Logo"
									width={100}
									height={100}
								/>
							</Link>
						</li>
					</ul>
				</div>
				<div className="">
					<p className="mb-3 font-semibold ">Our Resources</p>
					<ul className="space-y-4">
						{resourcesLinks.map((item) => (
							<li
								key={item.title}
								className="text-green-60 md:text-whit transition-colors hover:text-green-20 hover:cursor-pointer"
							>
								{" "}
								<Link href="#">{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
