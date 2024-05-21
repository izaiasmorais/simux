import { RememberCheckbox } from "@/components/remember-checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Entrar() {
	return (
		<main className="w-full min-h-screen grid grid-cols-2">
			<div className="bg-[#5A45FC] w-full flex items-center justify-center">
				<h1 className="text-6xl leading-tight text-white font-semibold">
					Bem vindo <br /> ao Simux<span className="text-[#D2F801]">.</span>
				</h1>
			</div>
			<div className="flex items-center justify-center">
				<div>
					<h1 className="text-2xl font-semibold">Entrar</h1>
					<form action="" className="flex flex-col gap-4 w-[400px]">
						<div className="flex flex-col gap-4 mt-4">
							<Label>Email</Label>

							<Input type="email" id="email" placeholder="Digite seu email" />
						</div>

						<div className="flex flex-col gap-4">
							<Label>Senha</Label>
							<Input
								type="password"
								id="password"
								placeholder="Digite sua senha"
							/>
						</div>

						<div>
							<RememberCheckbox />
						</div>

						<div className="flex flex-col w-full gap-2">
							<Button
								type="submit"
								className="w-full bg-[#D2F801] hover:bg-[#D2F801]/80 text-black"
							>
								Confirmar
							</Button>

							<Link href="/cadastro">
								<Button
									variant="link"
									className="justify-start p-0 text-[#4e3bdf]"
								>
									Não possui uma conta? Cadastre-se
								</Button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}
