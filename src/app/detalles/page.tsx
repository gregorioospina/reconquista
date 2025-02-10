"use client";
import Image from "next/image";
import Header from "../components/header";
import Title from "../components/title";

export default function Details() {
	return (
		<div
			id="scrolling-container"
			className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 justify-start px-5 md:px-[25svw]">
				<Header menu color="green" />
				<div className="flex flex-col justify-start">
					<Title lineSrc="./assets/images/line-g.svg" yOffset={-17} title="Detalles" />
				</div>
				{/* todo */}
				<div className="h-[60svh] relative w-full mt-[-120px] mb-[-90px] md:mb-[-90px]">
					<Image src={"/assets/images/wed.png"} alt="detalles" fill className="object-contain" />
				</div>
				<div className="flex flex-col">
					<p className="uppercase font-body font-light text-xs md:text-sm">Jueves 31 de agosto</p>
					<p className="font-title text-3xl md:text-4xl">Drinks y Picoteo</p>
					<p className="font-body font-semibold text-sm md:text-base mt-2">URBAN PLAZA. Calle 90 #11-13 Bogotá.</p>
					<p className="font-body md:text-base md:leading-5 leading-4 text-sm  text-justify">
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
						2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
						consectetur, from a Lorem Ipsum passage
					</p>
					<p className="font-body font-semibold text-sm md:text-base mt-1">Be smart, be casual</p>
				</div>

				<div className="mt-1 flex flex-col gap-y-3 items-start">
					<button className="underline text-sm md:text-base font-highlights font-light">confirmar</button>
					<button className="underline text-sm md:text-base font-highlights font-light">¿cómo llegar?</button>
					<button className="underline text-sm md:text-base font-highlights font-light">necesito transporte</button>
				</div>
				<div className="w-full h-8 relative my-4">
					<Image src={"/assets/images/divider-3.svg"} fill alt="divider 1 " />
				</div>
				<div className="flex flex-col">
					<p className="uppercase font-body font-light text-xs md:text-sm">Sábado 2 de agosto</p>
					<p className="font-title text-3xl md:text-4xl">Ceremonia y Celebración</p>
					<p className="font-body font-semibold text-sm md:text-base mt-2">Finca Haras Primavera Sopó</p>
					<p className="font-body md:text-base md:leading-5 leading-4 text-sm  text-justify">
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
						2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
						consectetur, from a Lorem Ipsum passage
					</p>
					<p className="font-body font-semibold text-sm md:text-base mt-1">Vestido Largo y Traje</p>
				</div>

				<div className="mt-1 flex flex-col gap-y-3 items-start">
					<button className="underline font-highlights text-sm md:text-base font-light">confirmar</button>
					<button className="underline font-highlights text-sm md:text-base font-light">¿cómo llegar?</button>
					<button className="underline font-highlights text-sm md:text-base font-light">necesito transporte</button>
				</div>
			</main>
		</div>
	);
}
