"use client";
import Image from "next/image";
import { useState } from "react";
import Menu from "./components/menu";

export default function Home() {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	return (
		<div
			id="scrolling-container"
			className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div className="h-[70svh] relative max-w-[500px] w-[80svw]">
					<Image className="object-fill" src={"/assets/images/cover.png"} fill alt="cover"></Image>
				</div>
				<div className="flex justify-center w-full">
					<button onClick={() => setOpenMenu(true)} className="text-sm underline">
						ver menu
					</button>
				</div>
			</main>
			<Menu open={openMenu} close={() => setOpenMenu(false)} />
		</div>
	);
}
