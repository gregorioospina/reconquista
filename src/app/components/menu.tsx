import Link from "next/link";

interface IMenu {
	open: boolean;
	close: () => void;
}

const Menu = ({ open, close }: IMenu) => {
	const handleClose = () => {
		close();
	};

	return (
		<div
			className={[
				open ? "top-0" : "top-[100%]",
				"fixed z-40 flex left-0 justify-center items-center overflow-hidden transition-all right-0 bottom-0 backdrop-blur-lg bg-background",
			].join(" ")}>
			<button className="fixed top-10 right-10" onClick={handleClose}>
				x
			</button>
			<div className="w-1/2 max-w-40 flex flex-col items-center">
				<p className="text-2xl md:text-3xl font-semibold">Menu</p>
				<ul className="flex items-center flex-col gap-y-2 mt-5 text-lg">
					<li>
						<Link href={"/"}>Inicio</Link>
					</li>
					<li>
						<Link href={"/detalles"}>Detalles</Link>
					</li>
					<li>
						<Link href={"/"}>RSVP</Link>
					</li>
					<li>
						<Link href={"/"}>Viaja por Colombia</Link>
					</li>
					<li>
						<Link href={"/bogota"}>Estadia en Bogota</Link>
					</li>
					<li>
						<Link href={"/regalos"}>Lista de Regalos</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Menu;
