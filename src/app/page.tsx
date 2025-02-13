"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Menu from "./components/menu";
import { useBreakpoint } from "./hooks/useGPTBreakpoint";

export default function Home() {
	const { isMd } = useBreakpoint();
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	return (
		<div id="scrolling-container" className="items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex h-[100svh] w-full flex-col gap-8 row-start-2 overflow-y-hidden items-center sm:items-between">
				<div className="flex flex-col w-full justify-start items-start">
					<p className="mx-5 relative font-title sm:text-4xl text-3xl md:text-5xl mt-5 z-10 whitespace-break-spaces text-foreground">
						Álvaro &{"\n"}María Camila
					</p>
					<p className="mx-5 relative font-title sm:text-4xl text-lg md:text-xl z-10 whitespace-break-spaces text-foreground">2 de agosto, 2025</p>
					<div className="flex flex-col gap-y-2 pl-5 mt-5">
						<Link className="text-sm md:text-base underline cursor-pointer font-highlights font-light" href={"/"}>
							Inicio
						</Link>
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
						<Link className="text-sm md:text-base underline cursor-pointer font-highlights font-light" href={"/regalos"}>
							Lista de Regalos
						</Link>
					</div>
				</div>
				<div className="md:h-[90svh] h-[60svh] w-full absolute right-0 bottom-0 md:w-4/5">
					<Image
						className="object-cover  md:object-contain object-right-bottom z-[9]"
						src={isMd ? "/assets/images/wed-extended.png" : "/assets/images/wed-extended-mobile.png"}
						fill
						alt="cover"></Image>
				</div>
			</main>
			<Menu open={openMenu} close={() => setOpenMenu(false)} />
		</div>
	);
}
