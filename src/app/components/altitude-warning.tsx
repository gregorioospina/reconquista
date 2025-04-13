import { Dialog } from "./dialog";

interface IAltitudeWarning {
	open: boolean;
	onClose: () => void;
}

const AltitudeWarning = ({ open, onClose }: IAltitudeWarning) => {
	return (
		<Dialog open={open} onClose={onClose} containerClassName="bg-transparent p-0">
			<div className="flex items-center justify-center min-h-screen p-4">
				<div className="max-w-xl bg-white shadow-2xl rounded-2xl p-6">
					<div className=" mb-4">
						<h1 className="text-lg sm:text-2xl font-bold text-rc-red flex items-center justify-start gap-2">¡Importante!</h1>
						<p className="text-base sm:text-xl mt-2 text-gray-700">
							Bogotá está a <span className="font-semibold">2,600 metros</span> sobre el nivel del mar
						</p>
					</div>

					<p className="text-xs sm:text-sm text-gray-800 mb-4">
						Si vienes de una ciudad a menor altitud, es posible que necesites un poco de tiempo para adaptarte. Para que llegues con toda la energía a la
						celebración, te recomendamos llegar al menos
						<span className="font-semibold text-rc-red"> dos días antes</span>. Así tu cuerpo se ajusta y evitas fatiga durante la fiesta.
					</p>

					<h3 className="text-sm sm:text-base text-rc-red font-bold mb-2">Algunos consejos para una mejor adaptación:</h3>
					<ul className="list-disc list-inside space-y-1 text-gray-700 text-xs sm:text-sm">
						<li>Hidratarte bien desde tu llegada.</li>
						<li>Evitar alcohol y comidas muy pesadas el primer día.</li>
						<li>Descansar suficiente y no hacer esfuerzos físicos intensos.</li>
						<li>Tomarlo con calma si sientes mareo o fatiga.</li>
					</ul>

					<p className="mt-6 text-center text-rc-red font-semibold text-sm sm:text-lg flex items-center justify-center gap-2">
						¡Queremos que disfrutes al máximo nuestra boda sin contratiempos! 💛🎉
					</p>
					<div className="flex justify-center">
						<button onClick={onClose} className="mt-2 sm:mt-3 rounded-md bg-rc-blue text-white p-2 font-highlights">
							¡Entiendo!
						</button>
					</div>
				</div>
			</div>
		</Dialog>
	);
};
export default AltitudeWarning;
