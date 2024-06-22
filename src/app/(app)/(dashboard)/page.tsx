"use client";
import { getUserInfo } from "@/api/get-user-info";
import { Header } from "@/components/header";
import { MyProgress } from "@/components/my-progress";
import { SimulatedTable } from "@/components/simulated/simulated-table";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";

export default function Dashboard() {
	const { data, isLoading } = useQuery({
		queryKey: ["simulated"],
		queryFn: getUserInfo,
	});

	return (
		<main className="w-full min-h-screen">
			<header className="bg-[#5A45FC] w-full h-[250px]" />

			<section className="flex flex-col w-full px-4 max-w-[1200px] mt-[-150px] mx-auto gap-4">
				<Header data={data} isLoading={isLoading} />

				<MyProgress />

				<div className="flex flex-col bg-white text-black shadow-sm rounded-lg p-6 gap-4">
					<div className="w-full flex justify-between items-center">
						<strong className="text-xl font-medium">Simulados</strong>

						<Button className="bg-[#D2F801] hover:bg-[#D2F801]/80 text-black">
							Adicionar Simulado
						</Button>
					</div>

					<SimulatedTable />
				</div>
			</section>
		</main>
	);
}
