"use client";
import Link from "next/link";
import Header from "../components/header";
import Title from "../components/title";

export default function RSVP() {
	return (
		<div id="scrolling-container" className="grid grid-rows-[20px_1fr_20px] items-start min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 justify-start px-5 md:px-[25svw] w-full">
				<Header menu color="blue" />
				<div className="flex flex-col justify-start gap-y-5">
					<Title lineSrc="./assets/images/line-black.svg" yOffset={-10} title={`RSVP`} />
					<div className="flex flex-col">
						<p className="font-highlights font-light">Nombre completo</p>
						<input className="w-full  px-3 h-10 border rounded-md bg-background " />
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">Voy a &apos;Drinks y picoteo&apos;</p>
						<select className="w-full px-3 h-10 border rounded-md bg-background ">
							<option>Si</option>
							<option>No</option>
						</select>
						<Link className="font-body text-xs underline" href={"/detalles"}>
							¿Qué es Drinks y picoteo?
						</Link>
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">Voy al matrimonio</p>
						<select className="w-full px-3 h-10 border rounded-md bg-background ">
							<option>Si</option>
							<option>No</option>
						</select>
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">Soy extranjero y necesito transporte para el matrimonio</p>
						<select className="w-full px-3 h-10 border rounded-md bg-background ">
							<option>No necesito transporte</option>
							<option>Si necesito transporte</option>
						</select>
						<p className="font-body text-xs">Recuerda que es en las afueras de Bogotá</p>
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">Restricciones alimenticias</p>
						<select className="w-full px-3 h-10 border rounded-md bg-background ">
							<option>Ninguna</option>
							<option>Vegetariana</option>
							<option>Vegana</option>
							<option>Pesquetariana</option>
							<option>Alérgico a no tener un trago en mi mano</option>
						</select>
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">
							Cancion que <span className="font-bold">necesitas</span> escuchar
						</p>
						<input className="w-full px-3  h-10 border rounded-md bg-background " />
					</div>
					<button className="bg-foreground px-4 py-4 w-fit rounded-md text-background font-highlights">Confirmar asistencia</button>
				</div>
			</main>
		</div>
	);
}
