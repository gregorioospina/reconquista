import Image from "next/image";

const CTA = () => {
	return (
		<a
			href="https://wa.me/+573332739911?text=%C2%A1Hola%21%20Tengo%20dudas%20sobre%20el%20matrimonio%20de%20%C3%81lvaro%20Rocafort%20y%20Maria%20Camila%20Vernaza."
			className="fixed z-50 bottom-5 right-5 flex items-center">
			<div className="rounded-full z-10 mr-[-10px] overflow-visible bg-rc-blue">
				<Image src={"/assets/images/faq.svg"} height={35} width={35} alt="faq" />
			</div>
			<p className=" bg-rc-blue text-background px-3 font-highlights rounded-md">¿Tienes dudas?</p>
		</a>
	);
};
export default CTA;
