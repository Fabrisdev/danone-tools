import args from 'args'
import { $ } from 'bun'

args.option('register', 'Register the app on your context menu')
args.option('unregister', "Removes the app from your context menu")
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

	await $`reg add HKCR\\.lin /ve /d DanoneTools.lin /f`;
	await $`reg add HKCR\\DanoneTools.lin\\shell\\DanoneTools /ve /d DanoneTools /f`;
	await $`reg add HKCR\\DanoneTools.lin\\shell\\DanoneTools /v SubCommands /d "" /f`;
	await $`reg add HKCR\\DanoneTools.lin\\shell\\DanoneTools\\shell\\Decompile /ve /d Decompile /f`;
	await $`reg add HKCR\\DanoneTools.lin\\shell\\DanoneTools\\shell\\Decompile\\command /ve /d "\\"${exe}\\" --decompile \\"%1\\"" /f`;

	console.log("DanoneTools registered succesfully.");
}

async function unregister() {
  await $`reg delete HKCR\\DanoneTools.lin /f`;
	await $`reg delete HKCR\\.lin /f`;
	console.log("DanoneTools unregistered succesfully.");
}
