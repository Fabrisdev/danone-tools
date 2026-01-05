import { $ } from "bun";

export async function decompile(filePath: string) {
	await $`lin_compiler.exe -d ${filePath}`;
	console.log("File decompiled succesfully.");
}
