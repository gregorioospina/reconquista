"use client";
import Image from "next/image";
import { useState } from "react";
import Menu from "./components/menu";

export default function Home() {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	return (
		<div id="scrolling-container" className="items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
			<main className="flex h-[100svh] w-full flex-col gap-8 row-start-2 overflow-y-hidden items-center sm:items-between">
				<p className="mx-5 relative font-title sm:text-4xl text-3xl md:text-5xl mt-5 z-10 whitespace-break-spaces text-foreground">
					Álvaro &{"\n"}María Camila
				</p>
				<div className="h-[70svh] absolute right-0 bottom-0 max-w-[700px] mb-[-50px] w-[90svw] md:w-[80svw]">
					<Image className="object-contain object-right-bottom z-[9]" src={"/assets/images/wed.png"} fill alt="cover"></Image>
				</div>
				{/* <div className="flex justify-center w-full h-20">
					<button onClick={() => setOpenMenu(true)} className="text-sm underline">
						ver menú
					</button>
				</div> */}
			</main>
			<Menu open={openMenu} close={() => setOpenMenu(false)} />
		</div>
	);
}
