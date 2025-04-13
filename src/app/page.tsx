"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AltitudeWarning from "./components/altitude-warning";
import CTA from "./components/cta";
import Menu from "./components/menu";
import { useBreakpoint } from "./hooks/useGPTBreakpoint";

export default function Home() {
	const { isMd } = useBreakpoint();

	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [openAltitudeWarning, setOpenAltitudeWarning] = useState<boolean>(false);

	useEffect(() => {
		const d = localStorage.getItem("ALTITUDE_WARNING");
		if (!d) {
			setOpenAltitudeWarning(true);
		}
	}, []);

	const handleCloseAltitude = () => {
		localStorage.setItem("ALTITUDE_WARNING", "true");
		setOpenAltitudeWarning(false);
	};

	return (
		<div id="scrolling-container" className="items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex h-[100svh] w-full flex-col gap-8 row-start-2 overflow-y-hidden items-center sm:items-between">
				<div className="flex flex-col w-full justify-start items-start md:pl-10 md:pt-10">
					<p className="mx-5 relative font-title sm:text-4xl text-3xl md:text-6xl mt-5 z-10 whitespace-break-spaces text-foreground">
						Álvaro &{"\n"}María Camila
					</p>
					<p className="mx-5 relative font-title sm:text-4xl text-lg md:text-xl z-10 whitespace-break-spaces text-foreground">2 de agosto, 2025</p>
					<div className="z-20 flex flex-col gap-y-2 md:gap-y-3 pl-5 mt-5">
						<Link className="text-sm md:text-base underline cursor-pointer font-highlights font-light" href={"/detalles"}>
							Detalles
						</Link>
						<Link className="text-sm md:text-base underline cursor-pointer font-highlights font-light" href={"/rsvp"}>
							RSVP
						</Link>
						<Link className="text-sm md:text-base underline cursor-pointer font-highlights font-light" href={"/colombia"}>
							Viaja por Colombia
						</Link>
						<Link className="text-sm md:text-base underline cursor-pointer font-highlights font-light" href={"/bogota"}>
							Estadía en Bogota
						</Link>
						<Link className="text-sm md:text-base underline cursor-pointer font-highlights font-light" href={"/experiencias"}>
							Lista de Experiencias
						</Link>
					</div>
				</div>
				<div className="z-10 md:h-[80svh] h-[60svh] w-full absolute right-0 bottom-0 md:w-4/5">
					<Image
						className="object-cover  md:object-contain object-right-bottom z-[9]"
						src={isMd ? "/assets/images/wed-extended.png" : "/assets/images/wed-extended-mobile.png"}
						fill
						alt="cover"></Image>
				</div>
			</main>
			<AltitudeWarning open={openAltitudeWarning} onClose={handleCloseAltitude} />
			<Menu open={openMenu} close={() => setOpenMenu(false)} />
			<CTA />
		</div>
	);
}
