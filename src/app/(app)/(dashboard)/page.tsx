"use client";
import { getUserInfo } from "@/api/get-user-info";
import { Header } from "@/components/header";
import { ProgressSummaryBox } from "@/components/progress-summary-box";
import { SimulatedTable } from "@/components/simulated/simulated-table";
import { useQuery } from "@tanstack/react-query";

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

				<ProgressSummaryBox />

				<SimulatedTable />
			</section>
		</main>
	);
}
