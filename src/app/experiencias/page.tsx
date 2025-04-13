"use client";
import Image from "next/image";
import { useState } from "react";
import BankAccount from "../components/bank-account";
import CTA from "../components/cta";
import Header from "../components/header";
import Title from "../components/title";

export default function GiftList() {
	const [openBankAccount, setOpenBankAccount] = useState<boolean>(false);

	return (
		<div
			id="scrolling-container"
			className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col row-start-2 justify-start px-5 md:px-[25svw]">
				<Header menu color="blue" />
				<div className="flex flex-col justify-start">
					<Title lineSrc="./assets/images/line-b.svg" yOffset={-10} title={`Lista de\nExperiencias`} />
				</div>
				<div className="flex flex-col">
					{/* <p className="font-body uppercase font-semibold text-sm md:text-base mt-2">decidimos hacer algo más simple...</p> */}
					<p className="font-body my-4 mt-3 md:text-base md:leading-5 leading-4 text-sm  text-justify">
						Queremos compartir con ustedes un día lleno de amor y felicidad, y su presencia será el mejor regalo que podamos recibir. Si además quieren hacer
						nuestra luna de miel aún más increíble, hemos creado una lista con experiencias que nos gustaría tener en el viaje para darles una idea de regalos
						que nos harán pensar en ustedes durante los momentos más especiales. {"\n"}¡Gracias por ser parte de este momento tan importante para nosotros!
					</p>
				</div>

				<div className="z-30 mt-1 flex flex-col gap-y-1 items-start">
					<a
						href="https://macayalvaro.clynk.me/OeekfZdu/menu"
						target="__blank"
						className="bg-rc-blue p-3 py-2 rounded-md hover:underline text-background font-highlights font-light">
						Listas de experiencias
					</a>
					<p className="text-xs font-light">¡Mira las experiencias que puedes regalar!</p>
				</div>
				<div className="z-30 mt-4 flex flex-col gap-y-1 items-start">
					<button onClick={() => setOpenBankAccount(true)} className="bg-rc-red p-3 py-2 rounded-md hover:underline text-background font-highlights font-light">
						Información de cuenta bancaria
					</button>
					<p className="text-xs font-light">¡Mira las experiencias que puedes regalar!</p>
				</div>

				<div className="z-10 h-[60svh] relative w-full mt-[-30px]">
					<Image src={"/assets/images/thai.png"} alt="detalles" fill className="object-contain" />
				</div>
			</main>
			<CTA />
			<BankAccount open={openBankAccount} onClose={() => setOpenBankAccount(false)} />
		</div>
	);
}
