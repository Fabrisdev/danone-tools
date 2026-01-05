import { $ } from "bun";

const base = "HKCU\\Software\\Classes";

export async function register() {
	const exe = process.execPath;

	const menu = `${base}\\DanoneTools.lin\\shell\\DanoneTools`;

	await $`reg add ${menu} /ve`;
	await $`reg add ${menu} /v SubCommands`;
	await $`reg add ${menu}\\shell\\Decompile /ve`;
	await $`reg add ${menu}\\shell\\Decompile\\command /ve /d "\"${exe}\" --decompile \"%1\""`;
	console.log("DanoneTools registered succesfully.");
}

export async function unregister() {
	const base = "HKCU\\Software\\Classes";
	await $`reg delete ${base}\\DanoneTools.lin /f`;
	console.log("DanoneTools unregistered succesfully.");
}
