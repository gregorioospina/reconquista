"use client";
import Image from "next/image";
import CTA from "../components/cta";
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
						Hemos organizado, junto con Vaova Travel, algunos viajes para que quienes nos visiten desde otros países puedan aprovechar y conocer más de nuestro
						país.
					</p>
				</div>

				<div className="bg-background text-foreground md:border px-5 py-10 md:px-10 md:py-16 md:pt-8 md:rounded-3xl">
					<div className="grid grid-cols-2 gap-x-3 md:gap-x-1 h-[200px] md:h-[250px]">
						<div className="relative w-full flex justify-end">
							<Image src={"/assets/images/cartagena.png"} className="object-contain object-bottom md:object-left" alt="eje cafetero" fill />
						</div>
						<div className="flex flex-col justify-between">
							<p className="uppercase font-body font-light text-right text-sm md:text-base">4 al 10 de agosto</p>
							<p className="font-title text-3xl md:text-5xl">Cartagena{"\n"}& Efe Cafetero</p>
						</div>
					</div>
					<p className="font-body text-justify my-6 md:text-base text-sm leading-4 md:leading-5 font-light">
						Embárcate en una aventura única que te llevará a explorar dos de los destinos más fascinantes de Colombia: la mágica Zona Cafetera y la vibrante
						Cartagena. Un viaje diseñado para disfrutar de la diversidad de Colombia, combinando naturaleza, historia y playa en una sola experiencia.
					</p>
					<div className="flex flex-col justify-start items-start">
						<a
							href="https://www.wetravel.com/trips/viaje-amigos-post-boda-maca-alvaro-vaova-sas-80974766"
							target="__blank"
							className="underline font-highlights text-sm mb-3 text-foreground font-light">
							¡Haz clic aquí para recibir más info o inscribirte!
						</a>
					</div>
				</div>
				<div className="bg-foreground text-background px-5 py-10 md:px-10 md:py-16 md:pt-8 md:rounded-3xl">
					<p className="uppercase font-body text-base font-bold md:text-lg whitespace-nowrap mb-8">Este paquete es para tí solo si eres del grupo de Carmina</p>
					<div className="grid grid-cols-2 gap-x-3 md:gap-x-1 h-[200px] md:h-[250px]">
						<div className="flex flex-col justify-between">
							<p className="uppercase font-body font-light text-sm md:text-base whitespace-nowrap">6 - 11 de agosto</p>
							<p className="font-title text-3xl md:text-5xl text-right">Cartagena{"\n"}& Barú</p>
						</div>
						<div className="relative w-full flex justify-end">
							<Image src={"/assets/images/cartagena.png"} className="object-contain object-bottom md:object-right" alt="cartagena" fill />
						</div>
					</div>
					<p className="font-body text-justify md:text-base text-sm my-6 leading-4 md:leading-5 font-light">
						Vive una experiencia exclusiva en Cartagena con 4 noches en el elegante Hotel Bastión, en la ciudad amurallada, y una noche en el espectacular
						Sofitel Calablanca en Barú. Disfruta de un recorrido guiado por la historia y magia de Cartagena, un emocionante paseo en bote privado por las Islas
						del Rosario y una noche inolvidable en Barú. Incluye vuelo desde Bogotá, guía profesional durante todo el viaje y regreso en lancha privada a
						Cartagena.
					</p>
					<div className="flex flex-col justify-start items-start">
						<a
							href="https://www.wetravel.com/trips/viaje-post-boda-maca-alvaro-vaova-sas-65136713"
							target="__blank"
							className="underline font-highlights text-sm mb-3 text-background font-light">
							¡Haz clic aquí para recibir más info o inscribirte!
						</a>
					</div>
				</div>
				{/* <div className="bg-foreground text-background px-5 py-10 md:px-10 md:py-16 md:rounded-3xl">
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
				</div> */}
			</main>
			<CTA />
		</div>
	);
}
