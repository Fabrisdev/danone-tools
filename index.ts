import args from 'args'
import { $ } from 'bun'

args.option('register', 'Register the app on your context menu')
args.option('unregister', "Removes the app from your context menu")
args.option('decompile', 'Decompiles a .LIN file')
const flags = args.parse(process.argv)

if(flags.register) {
  await register()
  process.exit(0)
}

if(flags.unregister) {
  await unregister()
  process.exit(0)
}

console.error('No options were supplied. Please check --help to see available commands.')
process.exit(1)


async function register() {
	const exe = process.execPath;
  const base = 'HKCU\\Software\\Classes'

	const menu = `${base}\\DanoneTools.lin\\shell\\DanoneTools`;

	await $`reg add ${menu} /ve`;
	await $`reg add ${menu} /v SubCommands`;
	await $`reg add ${menu}\\shell\\Decompile /ve`;
	await $`reg add ${menu}\\shell\\Decompile\\command /ve /d "\\"${exe}\\" --decompile \\"%1\\""`;
}

async function unregister() {
  await $`reg delete HKCR\\DanoneTools.lin /f`;
	console.log("DanoneTools unregistered succesfully.");
}
