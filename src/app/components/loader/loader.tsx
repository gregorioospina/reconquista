import { useMemo } from "react";
import Spinner from "../spinner";

interface ILoader {
	opaque?: boolean;
	fullscreen?: boolean;
	fitContainer?: boolean;
}

const Loader = ({ opaque, fitContainer }: ILoader) => {
	const position = useMemo(() => (fitContainer ? "absolute" : "fixed"), [fitContainer]);
	const bgColor = useMemo(() => (opaque ? "bg-white/30" : "bg-white"), [opaque]);

	return (
		<div
			className={[
				"h-full flex justify-center rounded-[inherit] items-center z-50 fixed top-0 right-0 left-0 transition-[width,left] duration-300 ease-linear",
				position,
				bgColor,
			].join(" ")}>
			<Spinner dark size="lg" />
		</div>
	);
};
export default Loader;
