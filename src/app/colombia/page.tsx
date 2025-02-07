"use client";
import Image from "next/image";
import Header from "../components/header";
import Title from "../components/title";

export default function Colombia() {
	return (
		<div
			id="scrolling-container"
			className="grid grid-rows-[20px_1fr_20px] items-center pt-14 justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-4 md:gap-8 row-start-2 justify-start md:px-[25svw]">
				<Header menu color="yellow" />
				<div className="px-5 md:px-0 flex flex-col justify-start">
					<Title lineSrc="./assets/images/line-y.svg" yOffset={-10} title={`Viaja por\nColombia`} />
				</div>
				<div className="px-5 md:px-0 flex flex-col">
					<p className="font-body my-4 xs:mt-1 md:text-base leading-4 md:leading-5 text-sm  text-justify">
						Hemos curado, junto con Vaova Travel, 4 paquetes de viaje para que nuestros amigos que nos visiten desde otros paises puedan aprovechar para conocer
						más de nuestro hermoso país. Los invitamos a ir en unos de estos viajes para que entiendan un poco mejor el amor que sentimos por nuestra Colombia.
					</p>
				</div>
				<div className="bg-foreground text-background px-5 py-10 md:px-10 md:py-16 md:rounded-3xl">
					<div className="grid grid-cols-2 gap-x-3 md:gap-x-1 h-[200px] md:h-[250px]">
						<div className="flex flex-col justify-between">
							<p className="uppercase font-body font-light text-sm md:text-base whitespace-nowrap">4 al 6 de agosto</p>
							<p className="font-title text-3xl md:text-5xl text-right">Eje Cafetero</p>
						</div>
						<div className="relative w-full flex justify-end">
							<Image src={"/assets/images/eje.png"} className="object-contain object-bottom md:object-right" alt="eje cafetero" fill />
						</div>
					</div>
					<p className="font-body text-justify md:text-base text-sm my-6 leading-4 md:leading-5 font-light">
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
						2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
						consectetur, from a Lorem Ipsum passage
					</p>
					<div className="flex flex-col justify-start items-start">
						<button className="underline font-highlights text-sm mb-3 text-background font-light">quiero más información</button>
						<button className="underline font-highlights text-sm text-background font-light">inscripciones y pago</button>
					</div>
				</div>
				<div className="bg-background text-foreground md:border px-5 py-10 md:px-10 md:py-16 md:rounded-3xl">
					<div className="grid grid-cols-2 gap-x-3 md:gap-x-1 h-[200px] md:h-[250px]">
						<div className="relative w-full flex justify-end">
							<Image src={"/assets/images/cartagena.png"} className="object-contain object-bottom md:object-left" alt="eje cafetero" fill />
						</div>
						<div className="flex flex-col justify-between">
							<p className="uppercase font-body font-light text-right text-sm md:text-base">6 al 9 de agosto</p>
							<p className="font-title text-3xl md:text-5xl">Cartagena de Indias</p>
						</div>
					</div>
					<p className="font-body text-justify my-6 md:text-base text-sm leading-4 md:leading-5 font-light">
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
						2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
						consectetur, from a Lorem Ipsum passage
					</p>
					<div className="flex flex-col justify-start items-start">
						<button className="underline font-highlights text-sm mb-3 font-light">quiero más información</button>
						<button className="underline font-highlights text-sm font-light">inscripciones y pago</button>
					</div>
				</div>
				<div className="bg-foreground text-background px-5 py-10 md:px-10 md:py-16 md:rounded-3xl">
					<div className="grid grid-cols-2 gap-x-3 md:gap-x-1 h-[200px] md:h-[250px]">
						<div className="flex flex-col justify-between">
							<p className="uppercase font-body font-light text-sm md:text-base whitespace-nowrap">4 al 6 de agosto</p>
							<p className="font-title text-3xl md:text-5xl text-right">Medellín</p>
						</div>
						<div className="relative w-full flex justify-end">
							<Image src={"/assets/images/medallo.png"} className="object-contain object-bottom md:object-right" alt="eje cafetero" fill />
						</div>
					</div>
					<p className="font-body text-justify md:text-base text-sm my-6 leading-4 md:leading-5 font-light">
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
						2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
						consectetur, from a Lorem Ipsum passage
					</p>
					<div className="flex flex-col justify-start items-start">
						<button className="underline font-highlights text-sm mb-3 text-background font-light">quiero más información</button>
						<button className="underline font-highlights text-sm text-background font-light">inscripciones y pago</button>
					</div>
				</div>
			</main>
		</div>
	);
}
