import { api } from "@/lib/axios";

interface SignInBody {
	username: string;
	senha: string;
}

interface SignInResponse {
	username: string;
	acess_token: string;
}

export async function signIn({
	username,
	senha,
}: SignInBody): Promise<SignInResponse> {
	const response = await api.post<SignInResponse>("/auth/signin", {
		username,
		senha,
	});

	return response.data;
}
