import { Crown } from "lucide-react";

export function ProgressSummaryBox() {
	return (
		<div className="flex flex-col w-full bg-white text-black md:mx-auto shadow-sm rounded-lg p-6 gap-4">
			<div className="w-full flex items-center gap-4">
				<div className="bg-[#D2F801] rounded-md p-2">
					<Crown className="text-black" />
				</div>
				<span className="text-lg font-medium">Meu progresso</span>
			</div>

			<div className="w-full gap-2 flex md:flex-nowrap flex-wrap">
				<div className="flex flex-col items-start p-2 justify-start gap-2 w-full">
					<strong className="text-5xl font-bold">5</strong>
					<span className="text-lg font-normal text-muted-foreground">
						Simulados Concluídos
					</span>
				</div>

				<div className="flex flex-col items-start p-2 justify-start gap-2 w-full">
					<strong className="text-5xl font-bold">600</strong>
					<span className="text-lg font-normal text-muted-foreground">
						Questões resolvidas
					</span>
				</div>

				<div className="flex flex-col items-start p-2 justify-start gap-2 w-full">
					<strong className="text-5xl font-bold">86%</strong>
					<span className="text-lg font-normal text-muted-foreground">
						Questões corretas
					</span>
				</div>
			</div>
		</div>
	);
}
