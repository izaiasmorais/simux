import { EllipsisVertical } from "lucide-react";
import { TableRow, TableCell } from "../ui/table";

export function SimulatedItem() {
	return (
		<TableRow>
			<TableCell>Poliedro</TableCell>
			<TableCell>120</TableCell>
			<TableCell>20/05/2024</TableCell>
			<TableCell>
				<EllipsisVertical />
			</TableCell>
		</TableRow>
	);
}
