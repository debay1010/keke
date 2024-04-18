import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section className=" bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
				<div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0 ">
					<div className="flex flex-col justify-center gap-8">
						<h1 className="h1-bold">
							Advertise, Collaborate, Connect: Global Bicycle
							Community
						</h1>
						<p className="p-regular-20 md:p-regular-24">
							Connect with our global community to profit,
							interact and showcase your bicycle products and
							services.
						</p>

						<Button
							asChild
							size="lg"
							className="button w-full sm:w-fit"
						>
							<Link href="#adverts">Explore Now</Link>
						</Button>
					</div>
					<Image
						src="/assets/images/hero.png"
						alt="hero"
						width={500}
						height={500}
						className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
					/>
				</div>
			</section>
			<section
				id="adverts"
				className="wrapper flex flex-col gap-8 md:gap-12"
			>
				<h2 className="h2-bold">Trusted by Thousands</h2>

				<p className="flex flex-col md:flex-row gap-5 w-full">
					Search Category
				</p>
			</section>
		</>
	);
}
