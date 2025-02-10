"use client";
import Image from "next/image";
import { useState } from "react";
import Menu from "./components/menu";

export default function Home() {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	return (
		<div
			id="scrolling-container"
			className="items-center justify-items-center min-h-screen gap-16 p-20 md:p-4 md:pt-14 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start px-5 md:px-[25svw]">
				<div className="h-[70svh] relative max-w-[500px] w-[90svw] md:w-[80svw]">
					<p className="mx-5 relative font-title text-8xl md:text-9xl mt-5 z-10 whitespace-break-spaces text-background">
						Álvaro{"\n"}&{"\n"}María Camila
					</p>
					<Image className="object-fill z-[9]" src={"/assets/images/cover.png"} fill alt="cover"></Image>
				</div>
				<div className="flex justify-center w-full h-20">
					<button onClick={() => setOpenMenu(true)} className="text-sm underline">
						ver menú
					</button>
				</div>
			</main>
			<Menu open={openMenu} close={() => setOpenMenu(false)} />
		</div>
	);
}
