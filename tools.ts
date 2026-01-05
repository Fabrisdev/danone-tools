import { $ } from "bun";

export async function decompile(filePath: string) {
	await $`lin_compiler.exe -d ${filePath}`;
	console.log("File decompiled succesfully.");
}

export async function compile(filePath: string) {
	await $`lin_compiler.exe ${filePath}`;
	console.log("File compiled succesfully.");
}
