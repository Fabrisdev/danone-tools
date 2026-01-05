import { $ } from "bun";

const base = "HKCU\\Software\\Classes";

export async function register() {
	const exe = process.execPath;
	await registerLinFiles(exe);
	await registerTxtFiles(exe);
	console.log("DanoneTools registered succesfully.");
}

async function registerLinFiles(exe: string) {
	const menu = `${base}\\DanoneTools.lin\\shell\\DanoneTools`;

	await $`reg add ${menu} /ve`;
	await $`reg add ${menu} /v SubCommands`;
	await $`reg add ${menu}\\shell\\Decompile /ve`;
	await $`reg add ${menu}\\shell\\Decompile\\command /ve /d "\"${exe}\" --decompile \"%1\""`;
}

async function registerTxtFiles(exe: string) {
	const menu = `${base}\\DanoneTools.txt\\shell\\DanoneTools`;

	await $`reg add ${menu} /ve`;
	await $`reg add ${menu} /v SubCommands`;
	await $`reg add ${menu}\\shell\\Compile /ve`;
	await $`reg add ${menu}\\shell\\Compile\\command /ve /d "\"${exe}\" --compile \"%1\""`;
}

export async function unregister() {
	const base = "HKCU\\Software\\Classes";
	await $`reg delete ${base}\\DanoneTools.lin /f`;
	await $`reg delete ${base}\\DanoneTools.txt /f`;
	console.log("DanoneTools unregistered succesfully.");
}
