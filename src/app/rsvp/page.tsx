"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import CTA from "../components/cta";
import { Dialog } from "../components/dialog";
import Header from "../components/header";
import Loader from "../components/loader";
import Title from "../components/title";
import { validEmail } from "./valid-email";

export type RSVPBody = {
	name: string;
	drinksrsvp: string;
	email: string;
	single: string;
	weddingrsvp: string;
	transport: string;
	foodrestrictions: string;
	songrequest: string;
};

export default function RSVP() {
	const [duplicateEmail, setDuplicateEmail] = useState<boolean>(false);
	const [incompleteEmail, setIncompleteEmail] = useState<boolean>(false);
	const [emptyName, setEmptyName] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const [successfulRSVP, setSuccessfulRSVP] = useState<boolean>(false);

	const hasError = useMemo(() => duplicateEmail || incompleteEmail || emptyName, [duplicateEmail, emptyName, incompleteEmail]);

	const onNameBlur = () => {
		const name = (document.getElementById("name-input") as HTMLInputElement)?.value;
		if (name.length < 5) {
			setEmptyName(true);
		} else setEmptyName(false);
	};

	const onEmailBlur = () => {
		const email = (document.getElementById("email-input") as HTMLInputElement)?.value;
		setLoading(true);
		fetch(`/api/validate-email/${email}`)
			.then((s) => s.json())
			.then((c) => {
				if (c.duplicateEmail) {
					setDuplicateEmail(true);
					setIncompleteEmail(false);
				} else {
					setDuplicateEmail(false);
					if (validEmail(email)) {
						setIncompleteEmail(false);
					} else setIncompleteEmail(true);
				}
			})
			.finally(() => setLoading(false));
	};

	const handleSend = () => {
		const name = (document.getElementById("name-input") as HTMLInputElement)?.value;
		const email = (document.getElementById("email-input") as HTMLInputElement)?.value;
		const single = (document.getElementById("single-rsvp-select") as HTMLSelectElement)?.value;
		const drinksrsvp = (document.getElementById("drinks-rsvp-select") as HTMLSelectElement)?.value;
		const weddingrsvp = (document.getElementById("wedding-rsvp-select") as HTMLSelectElement)?.value;
		const transport = (document.getElementById("transport-select") as HTMLSelectElement)?.value;
		const foodrestrictions = (document.getElementById("food-restrictions-select") as HTMLSelectElement)?.value;
		const songrequest = (document.getElementById("song-request-input") as HTMLInputElement)?.value;

		if (name.length < 5) {
			setEmptyName(true);
			return;
		}
		if (!email || !validEmail(email)) {
			setIncompleteEmail(true);
			return;
		}

		setEmptyName(false);
		setIncompleteEmail(false);

		const body: RSVPBody = {
			name,
			drinksrsvp,
			email,
			weddingrsvp,
			single,
			transport,
			foodrestrictions,
			songrequest,
		};

		fetch("/api/add-rsvp", {
			method: "POST",
			body: JSON.stringify(body),
		})
			.then((s) => s.json())
			.then((c) => {
				if (c.success) {
					setSuccessfulRSVP(true);
				}
			});
	};

	return (
		<div id="scrolling-container" className="grid grid-rows-[20px_1fr_20px] items-start min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 justify-start px-5 md:px-[25svw] w-full">
				<Header menu color="blue" />
				<div className="flex flex-col justify-start gap-y-5">
					<Title lineSrc="./assets/images/line-black.svg" yOffset={-10} title={`RSVP`} />
					<div className="flex flex-col">
						<p className="font-highlights font-light">Nombre completo</p>
						<input
							onBlur={onNameBlur}
							id="name-input"
							className={["w-full px-3 h-10 border rounded-md bg-background", emptyName ? "border-red-700 text-red-600" : ""].join(" ")}
						/>
						{emptyName && <p className="font-body text-xs text-red-600">Debe ser un nombre válido</p>}
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">Correo electrónico</p>
						<input
							onBlur={onEmailBlur}
							id="email-input"
							className={["w-full px-3 h-10 border rounded-md bg-background", incompleteEmail || duplicateEmail ? "border-red-700 text-red-600" : ""].join(" ")}
						/>
						{duplicateEmail && <p className="font-body text-xs text-red-600">Ese correo ya se registró</p>}
						{incompleteEmail && <p className="font-body text-xs text-red-600">Debe ser un correo válido</p>}
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">Voy a &apos;Drinks y picoteo&apos;</p>
						<select id="drinks-rsvp-select" className="w-full px-3 h-10 border rounded-md bg-background ">
							<option>Si</option>
							<option>No</option>
						</select>
						<Link className="font-body text-xs underline" href={"/detalles"}>
							¿Qué es Drinks y picoteo?
						</Link>
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">Voy al matrimonio</p>
						<select id="wedding-rsvp-select" className="w-full px-3 h-10 border rounded-md bg-background ">
							<option>Si</option>
							<option>No</option>
						</select>
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">Soy extranjero y necesito transporte para el matrimonio</p>
						<select id="transport-select" className="w-full px-3 h-10 border rounded-md bg-background ">
							<option>No necesito transporte</option>
							<option>Si necesito transporte</option>
						</select>
						<p className="font-body text-xs">Recuerda que es en las afueras de Bogotá</p>
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">Restricciones alimenticias</p>
						<select id="food-restrictions-select" className="w-full px-3 h-10 border rounded-md bg-background ">
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
						<input id="song-request-input" className="w-full px-3  h-10 border rounded-md bg-background " />
					</div>
					<div className="flex flex-col">
						<p className="font-highlights font-light">¿Estás soltera/soltero?</p>
						<select id="single-rsvp-select" className="w-full px-3 h-10 border rounded-md bg-background ">
							<option>Si</option>
							<option>No</option>
						</select>
					</div>
					<button
						disabled={hasError}
						onClick={handleSend}
						className="bg-foreground disabled:bg-slate-400 px-4 py-4 w-fit rounded-md text-background font-highlights">
						Confirmar asistencia
					</button>
				</div>
			</main>
			<CTA />
			{loading && <Loader fullscreen opaque />}
			<Dialog
				open={successfulRSVP}
				title={"¡Gracias por notificar tu asistencia!"}
				subtitle={"Si tienes dudas o sugerencias puedes escribir al número (+57) 333-273-9911"}
				onClose={() => {
					window.location.reload();
				}}>
				<div className="relative flex h-80 w-full items-center justify-center">
					<p className="text-[180px]">🥳</p>
				</div>
			</Dialog>
		</div>
	);
}
