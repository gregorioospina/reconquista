"use client";
import Image from "next/image";
import Header from "../components/header";
import Title from "../components/title";
import activities from "./activities.json";

export default function Bogota() {
	return (
		<div
			id="scrolling-container"
			className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8  max-w-[100svw] w-full row-start-2 justify-start px-5 md:px-[25svw]">
				<Header menu color="red" />
				<div className="flex flex-col justify-start">
					<Title lineSrc="./assets/images/line-r.svg" yOffset={-10} title={`Estadía en\nBogotá`} />
				</div>
				<div className="flex flex-col">
					<p className="font-body my-4 md:text-base md:leading-5 leading-3 text-sm  text-justify">
						Si todavía no tienes claro dónde te vas a quedar en Bogotá, te recomendamos los siguientes hoteles como excelentes opciones para poder disfrutar el
						tiempo que vas a pasar en Bogotá
					</p>

					<div className="mt-1 flex flex-col gap-y-3 items-start">
						<button className="underline font-highlights font-light">Lista de hoteles recomendados</button>
					</div>
				</div>

				<div className="w-full h-8 relative my-4">
					<Image src={"/assets/images/divider-4.svg"} fill alt="divider 1 " />
				</div>

				<div className="">
					<p className="font-title text-3xl md:text-4xl mb-2">Actividades en Bogotá</p>

					<div className="flex md:gap-y-4 lg:grid lg:grid-cols-2 mt-4 gap-x-6 mx-[-20px] px-5 overflow-x-auto lg:gap-x-4">
						{activities.activities.map((a) => (
							<div
								key={a.name}
								className="border  bg-background z-10 min-w-[80svw] md:min-w-fit rounded-2xl h-[220px] max-w-[500px] p-7 flex flex-col justify-between">
								<div className="flex flex-col">
									<p className="uppercase font-body font-light text-xs md:text-sm">{a.date}</p>
									<p className="font-title text-xl md:text-2xl">{a.name}</p>
									<p className="font-body md:text-sm md:leading-4 leading-3 text-sm text-justify">{a.description}</p>
								</div>
								<div className="flex justify-start">
									<button className="underline font-highlights text-sm font-light">quiero reservar</button>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="h-[60svh] relative w-full mt-[-170px] md:mt-[-20px]">
					<Image src={"/assets/images/cart.png"} alt="cart" fill className="object-contain" />
				</div>
			</main>
		</div>
	);
}
