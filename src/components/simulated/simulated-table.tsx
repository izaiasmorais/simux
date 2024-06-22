import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";
import { SimulatedItem } from "./simulated-item";

export function SimulatedTable() {
	return (
		<Table className="mt-4">
			{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
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
	);
}
