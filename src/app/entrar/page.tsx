"use client";
import { signIn } from "@/api/sign-in";
import { RememberCheckbox } from "@/components/remember-checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Entrar() {
	const [username, setUsername] = useState("");
	const [senha, setSenha] = useState("");
	const router = useRouter();

	const { mutateAsync: signInFn, isPending } = useMutation({
		mutationFn: signIn,
		onSuccess: (data) => {
			localStorage.setItem("token", data.acess_token);
			router.push("/");
		},
	});

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			await signInFn({ username, senha });
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<main className="w-full min-h-screen grid md:grid-cols-2">
			<div className="bg-[#5A45FC] w-full items-center justify-center md:flex hidden">
				<h1 className="text-6xl leading-tight text-white font-semibold">
					Bem vindo <br /> ao Simux<span className="text-[#D2F801]">.</span>
				</h1>
			</div>

			<div className="flex items-center justify-center gap-2 px-4">
				<div className="w-full mx-auto max-w-[400px]">
					<h1 className="text-2xl font-semibold">Entrar</h1>

					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
						<div className="flex flex-col gap-4 mt-4">
							<Label>Email</Label>

							<Input
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								type="email"
								id="email"
								required
								placeholder="Digite seu email"
							/>
						</div>

						<div className="flex flex-col gap-4">
							<Label>Senha</Label>
							<Input
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
								type="password"
								id="password"
								required
								placeholder="Digite sua senha"
							/>
						</div>

						<div>
							<RememberCheckbox />
						</div>

						<div className="flex flex-col w-full gap-2">
							<Button
								type="submit"
								className="w-full bg-[#D2F801] hover:bg-[#D2F801]/80 text-black
								flex items-center"
							>
								{isPending && (
									<Loader2 size={20} className="mr-2 h-4 w-4 animate-spin" />
								)}

								{!isPending && "Confirmar"}
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
