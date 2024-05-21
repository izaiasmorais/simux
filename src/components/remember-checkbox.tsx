"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function RememberCheckbox() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id="remember" />
			<label
				htmlFor="remember"
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Lembrar-me
			</label>
		</div>
	);
}
