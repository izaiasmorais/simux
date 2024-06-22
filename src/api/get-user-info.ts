import { api } from "@/lib/axios";

export interface UserInfoResponse {
	id: string;
	username: string;
	simulados: any[];
}

export async function getUserInfo(): Promise<UserInfoResponse> {
	const response = await api.get<UserInfoResponse>("/auth/me");

	return response.data;
}
