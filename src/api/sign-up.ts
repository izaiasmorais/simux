import { api } from "@/lib/axios";

interface SignUpBody {
	username: string;
	senha: string;
}

export async function signUp({ username, senha }: SignUpBody) {
	const response = await api.post("/auth/signup", {
		username,
		senha,
	});

	return response.data;
}
