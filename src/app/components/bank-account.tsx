import { Dialog } from "./dialog";

interface IBankAccount {
	open: boolean;
	onClose: () => void;
}

const BankAccount = ({ open, onClose }: IBankAccount) => {
	return (
		<Dialog open={open} onClose={onClose} containerClassName="bg-transparent p-0">
			<div className="flex items-center justify-center min-h-screen  p-4">
				<div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
					<h2 className="text-2xl font-bold text-gray-800 text-left">Cuenta bancaria</h2>
					<p className="text-xs mb-4">
						Te dejamos nuestra cuenta bancaria por si tienes problemas haciendo algún pago por el portal de la Lista de experiencias.
					</p>
					<table className="table-auto w-full border-collapse border">
						<tbody>
							<tr className="border-b">
								<td className="border-l pl-2 py-2 flex flex-col">
									<p className="text-[11px] sm:text-sm font-semibold text-gray-900">Account Holder Name:</p>
									<p className="text-sm sm:text-base text-gray-600">Maria Camila Vernaza Civetta</p>
								</td>
							</tr>
							<tr className="border-b">
								<td className="border-l pl-2 py-2 flex flex-col">
									<p className="text-[11px] sm:text-sm font-semibold text-gray-900">IBAN:</p>
									<p className="text-sm sm:text-base text-gray-600">GB19TCCL00997986262959</p>
								</td>
							</tr>
							<tr className="border-b">
								<td className="border-l pl-2 py-2 flex flex-col">
									<p className="text-[11px] sm:text-sm font-semibold text-gray-900">Bank Name:</p>
									<p className="text-sm sm:text-base text-gray-600">The Currency Cloud Limited</p>
								</td>
							</tr>
							<tr>
								<td className="border-l pl-2 py-2 flex flex-col">
									<p className="text-[11px] sm:text-sm font-semibold text-gray-900">Bank Address:</p>
									<p className="text-sm sm:text-base text-gray-600">12 Steward Street, The Steward Building, London, E1 6FQ, GB</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</Dialog>
	);
};
export default BankAccount;
