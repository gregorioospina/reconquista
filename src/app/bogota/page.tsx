"use client";
import Image from "next/image";
import CTA from "../components/cta";
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
						<div className="flex flex-col">
							<p className="text-lg ">Lista de hoteles recomendados</p>
							<p className="text-sm font-light font-highlights">Para obtener precios especiales, haz clic en los nombres de los hoteles</p>
						</div>
						<ul>
							<li className="">
								<a
									className="font-highlights font-light underline text-blue-700"
									href="https://www.hilton.com/es/book/reservation/rooms/?ctyhocn=BOGNTDT&arrivalDate=2025-07-31&departureDate=2025-08-03&groupCode=CDTMYA&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink"
									target="__blank">
									Double Tree
								</a>
							</li>
							<li className="mt-3">
								<a
									className="font-highlights font-light underline text-blue-700"
									href="https://be.synxis.com/?adult=1&arrive=2025-07-30&chain=10074&child=0&currency=COP&depart=2025-08-04&hotel=25811&level=chain&locale=es-MX&promo=MARIACAMYALVARO&rooms=1"
									target="__blank">
									Mercure BH Bogota
								</a>
							</li>
							<li className="mt-3">
								<a
									className="font-highlights font-light underline text-blue-700"
									href="https://be.synxis.com/?adult=1&arrive=2025-07-30&chain=10074&child=0&currency=COP&depart=2025-08-04&hotel=31541&level=chain&locale=es-MX&promo=MARIACAMYALVARO&rooms=1"
									target="__blank">
									Hotel EK
								</a>
							</li>
						</ul>
					</div>
					<div className="mt-4 flex flex-col gap-y-3 items-start">
						<div className="flex flex-col">
							<p className="text-lg ">Nuestros restaurantes favoritos en Bogotá</p>
							<p className="text-sm font-light font-highlights">Estos son los restaurantes que más nos gustan en la ciudad. ¡Ojala puedan ir a alguno!</p>
						</div>
						<ul>
							<li className="">
								<a className="font-highlights font-light underline text-blue-700" href="https://humonegrobog.com/" target="__blank">
									Humo Negro (colombia Fusion - o lugar nao é muito bonito mas a comida e boa)
								</a>
							</li>
							<li className="mt-3">
								<a className="font-highlights font-light underline text-blue-700" href="https://pajaressalinas.com/" target="__blank">
									Pajares Salinas (español)
								</a>
							</li>
							<li className="mt-3">
								<a className="font-highlights font-light underline text-blue-700" href="https://www.restaurantemesafranca.com/" target="__blank">
									Mesa Franca (Colombia Fusion)
								</a>
							</li>
							<li className="mt-3">
								<a className="font-highlights font-light underline text-blue-700" href="https://osakanikkei.com/es/bogota-es/" target="__blank">
									Osaka (peruano japones)
								</a>
							</li>
							<li className="mt-3">
								<a className="font-highlights font-light underline text-blue-700" href="https://mini-mal.org/" target="__blank">
									Minmal
								</a>
							</li>
						</ul>
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
									<p className="font-body md:text-xs md:leading-3 leading-3 text-sm text-justify">{a.description}</p>
									<p className="semi-bold mt-3 md:leading-3 leading-3 text-base mb-2 text-justify">{a.price}</p>
								</div>
								<div className="flex justify-start">
									<a href={a.link} target="__blank" className="underline font-highlights text-sm font-light">
										Quiero reservar
									</a>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="h-[60svh] relative w-full mt-[-170px] md:mt-[-20px]">
					<Image src={"/assets/images/cart.png"} alt="cart" fill className="object-contain" />
				</div>
			</main>
			<CTA />
		</div>
	);
}
