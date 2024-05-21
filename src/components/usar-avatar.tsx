import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UsarAvatar() {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/izaiasmorais.png" />
			<AvatarFallback>IL</AvatarFallback>
		</Avatar>
	);
}
