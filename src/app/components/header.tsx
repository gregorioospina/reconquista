import { useMemo } from "react";

interface IHeader {
	menu?: boolean;
	color: "green" | "red" | "yellow" | "blue";
}

const Header = (props: IHeader) => {
	const andColor = useMemo(() => {
		switch (props.color) {
			case "blue":
				return "text-rc-blue";
			case "green":
				return "text-rc-green";
			case "red":
				return "text-rc-red";
			default:
			case "yellow":
				return "text-rc-yellow";
		}
	}, [props]);

	return (
		<div className="fixed top-0 left-0 right-0 border-b p-3 md:p-3 pl-5 md:pl-10 border-gray-100 z-50 bg-background md:bg-transparent md:border-none flex justify-between">
			<p className="font-title text-lg md:text-2xl">
				MC<span className={[andColor, "mx-2 font-bold"].join(" ")}>&</span>A
			</p>
			{props.menu && <button>=</button>}
		</div>
	);
};
export default Header;
