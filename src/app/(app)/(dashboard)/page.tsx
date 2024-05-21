import { MyProgress } from "@/components/my-progress";
import { SimulatedTable } from "@/components/simulated-table";
import { Button } from "@/components/ui/button";
import { UsarAvatar } from "@/components/usar-avatar";
import { ChevronDown, Crown } from "lucide-react";

export default function Dashboard() {
	return (
		<main className="w-full min-h-screen">
			<header className="bg-[#5A45FC] w-full h-[250px] flex" />

			<div
				className="w-full max-w-[1200px] mt-[-150px] mx-auto justify-end flex gap-4
			items-center text-white p-4"
			>
				<UsarAvatar />
				Izaías Lima
				<ChevronDown />
			</div>

			<MyProgress />

			<div
				className="bg-white text-black w-full mt-[50px] max-w-[1200px]
				mx-auto shadow-sm rounded-lg p-6 gap-4 flex flex-col"
			>
				<div className="w-full flex justify-between items-center">
					<h1 className="text-xl font-medium">Simulados</h1>

					<Button className="bg-[#D2F801] hover:bg-[#D2F801]/80 text-black">
						Adicionar Simulado
					</Button>
				</div>

				<SimulatedTable />
			</div>
		</main>
	);
}
