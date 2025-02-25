"use client";
import Image from "next/image";
import Link from "next/link";
import CTA from "../components/cta";
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
				<div className="h-[40svh] md:h-[50svh] relative w-full mt-[-20px] mb-[-50px]">
					<Image src={"/assets/images/picoteo-1.png"} alt="detalles" fill className="object-contain" />
				</div>

				<div className="flex flex-col">
					<p className="uppercase font-body font-light text-xs md:text-sm">Jueves 31 de julio, 7:00 pm</p>
					<p className="font-title text-3xl md:text-4xl">Drinks y Picoteo</p>
					<p className="font-body font-semibold text-sm md:text-base mt-2">URBAN PLAZA. Calle 90 #11-13 Bogotá.</p>
					<p className="font-body md:text-base md:leading-5 leading-4 text-sm  text-justify">
						Quizimos hacer este coctel para que tengan la oportunidad de conocerse con toda la gente que irá al matrimonio, y para que puedan reencontrarse con
						personas increibles que no ven hace años. Será un momento de disfrutar de algo rico para comer, y brindar juntos, llenos de ilusión, por el gran día
						que se acerca. ¡Nos encantaría que nos acompañen! Por favor, confirmen su asistencia.
					</p>
					<p className="font-body font-semibold text-sm md:text-base mt-1">Be smart, be casual</p>
				</div>
				<div className="mt-1 z-10 flex flex-col gap-y-3 items-start">
					<Link href={"/rsvp"} className="underline font-highlights text-sm md:text-base font-light">
						Confirmar
					</Link>
					<Link target="__blank" href={"https://maps.app.goo.gl/2rrZMNUZ7HhrAUrAA"} className="underline font-highlights text-sm md:text-base font-light">
						¿Cómo llegar?
					</Link>
				</div>
				<div className="w-full h-8 relative my-4">
					<Image src={"/assets/images/divider-3.svg"} fill alt="divider 1 " />
				</div>

				<div className="flex flex-col z-10">
					<p className="uppercase font-body font-light text-xs md:text-sm">Sábado 2 de agosto, 3 pm</p>
					<p className="font-title text-3xl md:text-4xl">Ceremonia y Celebración</p>
					<p className="font-body font-semibold text-sm md:text-base mt-2">Finca Haras Primavera Sopó</p>
					<p className="font-body md:text-base md:leading-5 leading-4 text-sm  text-justify">
						Los invitamos a celebrar nuestro matrimonio a las afueras de Bogotá, en la espectacular Finca Haras Primavera. La ceremonia arranca a las 3pm. Les
						recordamos que el lugar está ubicado fuera de Bogotá, aproximadamente a hora y media de distancia, así que por favor planeen su viaje con
						anticipación. ¡Estamos emocionados de compartir este día especial con ustedes! Por favor confirmen su asistencia.
					</p>
					<p className="font-body font-semibold text-sm md:text-base mt-1">Vestido Largo y Traje</p>
				</div>

				<div className="mt-1 z-10 flex flex-col gap-y-3 items-start">
					<Link href={"/rsvp"} className="underline font-highlights text-sm md:text-base font-light">
						Confirmar
					</Link>
					<Link target="__blank" href={"https://maps.app.goo.gl/zY5o6rhzao82kfDG6"} className="underline font-highlights text-sm md:text-base font-light">
						¿Cómo llegar?
					</Link>
				</div>

				<div className="h-[70svh] z-0 mt-[-120px] relative w-full ">
					<Image src={"/assets/images/carrito.png"} alt="detalles" fill className="object-contain" />
				</div>
			</main>
			<CTA />
		</div>
	);
}
