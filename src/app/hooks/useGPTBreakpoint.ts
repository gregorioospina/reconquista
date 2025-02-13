"use client";
import { useEffect, useMemo, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

export const useBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState<string | null>(null);
	const [isScreenHeightShort, setIsScreenHeightShort] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			const config = resolveConfig(tailwindConfig);
			const screens = config.theme?.screens ?? {};
			const screenWidth = window.innerWidth;
			const screenHeight = window.innerHeight;
			const breakpointValues = Object.values(screens) as string[];

			setIsScreenHeightShort(screenHeight < 650);

			for (let i = breakpointValues.length - 1; i >= 0; i--) {
				const breakpointValue = parseInt(breakpointValues[i].replace("px", ""));
				if (screenWidth >= breakpointValue) {
					setBreakpoint(Object.keys(screens)[i] as string);
					return;
				}
			}

			setBreakpoint(null);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const isSm = useMemo(() => ["sm", null].includes(breakpoint), [breakpoint]);
	const isMd = useMemo(() => !["sm", null].includes(breakpoint), [breakpoint]);
	const isLg = useMemo(() => !["sm", "md", null].includes(breakpoint), [breakpoint]);

	return { isMd, isLg, isSm, isScreenHeightShort };
};
