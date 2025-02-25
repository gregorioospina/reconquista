import Image from "next/image";

const CTA = () => {
	return (
		<div className="fixed z-50 bottom-5 right-5 flex items-center">
			<div className="rounded-full z-10 mr-[-10px] overflow-visible bg-rc-blue">
				<Image src={"/assets/images/faq.svg"} height={35} width={35} alt="faq" />
			</div>
			<p className=" bg-rc-blue text-background px-3 font-highlights rounded-md">¿Tienes dudas?</p>
		</div>
	);
};
export default CTA;
