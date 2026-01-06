import path from "node:path";
import { $ } from "bun";

export async function decompile(filePath: string) {
	const name = path.basename(filePath, path.extname(filePath));
	await $`lin_compiler.exe -d ${filePath} ${name}.out`;
	console.log("File decompiled succesfully.");
}

export async function compile(filePath: string) {
	await $`lin_compiler.exe ${filePath}`;
	console.log("File compiled succesfully.");
}
