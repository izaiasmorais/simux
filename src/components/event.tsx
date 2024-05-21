import { Clock, ChevronUp, ChevronDown } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Event() {
	return (
		<Card
			className="flex items-center justify-between py-4 px-6 rounded-lg shadow-none
				hover:cursor-pointer hover:bg-muted/40 transition-colors duration-200"
		>
			<div className="flex items-center gap-4">
				<div className="flex flex-col py-2 px-6 border-r items-center">
					<span className="text-xl font-semibold">Sáb</span>
					<strong className="text-5xl font-medium">18</strong>
				</div>

				<div className="flex items-center gap-2">
					<Clock size={16} />
					10:00 - 12:00
				</div>

				<div className="ml-6 font-medium">Prova de Programação</div>
			</div>

			<Button variant="outline" size="lg" className="py-6 px-4 flex items-center gap-2">
				Editar
				<ChevronDown size={16} />
			</Button>
		</Card>
	);
}
