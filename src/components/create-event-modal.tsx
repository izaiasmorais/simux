"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { DatePicker } from "./date-picker";
import { DialogClose } from "@radix-ui/react-dialog";

export function CreateEventModal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="py-6 px-4 flex items-center gap-2">
					Criar Evento
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-2xl">Criar Evento</DialogTitle>
					<DialogDescription className="text-base">
						Digite as informações necessárias para criar um evento.
					</DialogDescription>

					<form className="flex flex-col gap-4 pt-2">
						<div className="flex flex-col gap-2">
							<Label htmlFor="name">Nome</Label>
							<Input
								type="text"
								id="name"
								placeholder="Nome do evento"
								required
							/>
						</div>

						<div className="flex flex-col gap-2">
							<Label htmlFor="description">Descrição</Label>
							<Input
								type="text"
								id="description"
								placeholder="Descrição do evento"
								required
							/>
						</div>

						<div className="flex flex-col gap-2">
							<Label htmlFor="name">Data</Label>
							<DatePicker />
						</div>

						<div className="flex flex-col gap-2">
							<Label htmlFor="name">Horário</Label>
							<div className="flex items-center gap-2">
								<Input type="time" id="time" required />
								<Input type="time" id="time" required />
							</div>
						</div>

						<div className="flex items-center gap-2 justify-end">
							<DialogClose asChild>
								<Button
									type="button"
									variant="outline"
									className="py-6 px-4 flex items-center gap-2"
								>
									Cancelar
								</Button>
							</DialogClose>

							<Button className="py-6 px-4 flex items-center gap-2">
								Confirmar
							</Button>
						</div>
					</form>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
