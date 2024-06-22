import type { UserInfoResponse } from "@/api/get-user-info";
import { Skeleton } from "./ui/skeleton";
import { ChevronDown } from "lucide-react";

interface HeaderProps {
	data: UserInfoResponse | undefined;
	isLoading: boolean;
}

export function Header({ data, isLoading }: HeaderProps) {
	return (
		<div className="justify-end flex gap-4 items-center text-white p-4">
			{isLoading && <Skeleton className="h-5 w-52" />}

			{!isLoading && data && data.username}

			<ChevronDown />
		</div>
	);
}
