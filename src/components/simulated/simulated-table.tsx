import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { SimulatedItem } from "./simulated-item";
import { CreateSimulatedModal } from "./create-simulated-modal";

export function SimulatedTable() {
	return (
		<div className="flex flex-col bg-white text-black shadow-sm rounded-lg p-6 gap-4">
			<div className="w-full flex justify-between items-center">
				<strong className="text-xl font-medium">Simulados</strong>

				<CreateSimulatedModal />
			</div>

			<Table className="mt-4">
				<TableHeader>
					<TableRow>
						<TableHead>Tipo</TableHead>
						<TableHead>Questões</TableHead>
						<TableHead>Data</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					<SimulatedItem />
					<SimulatedItem />
					<SimulatedItem />
					<SimulatedItem />
				</TableBody>
			</Table>
		</div>
	);
}
