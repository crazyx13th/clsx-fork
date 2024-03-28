declare namespace clsx {
	type ClassValue = string | number | null | boolean | undefined;
	function clsx(...inputs: ClassValue[]): string;
}

declare function clsx(...inputs: clsx.ClassValue[]): string;

export = clsx;
