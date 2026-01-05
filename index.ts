import args from 'args'
import { $ } from 'bun'
import { promisified as regedit } from 'regedit'

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
  const base = 'HKCU\\Software\\Classes'
  const appName = 'DanoneTools'

	await regedit.createKey([
    `${base}\\.lin`,
    `${base}\\${appName}.lin\\shell\\${appName}`,
    `${base}\\${appName}.lin\\shell\\${appName}\\shell\\Decompile`,
    `${base}\\${appName}.lin\\shell\\${appName}\\shell\\Decompile\\command`
  ])

  await regedit.putValue({
    [`${base}\\.lin`]: {
			'': { value: `${appName}.lin`, type: 'REG_SZ' }
		},

		[`${base}\\${appName}.lin\\shell\\${appName}`]: {
			'': { value: appName, type: 'REG_SZ' },
			SubCommands: { value: '', type: 'REG_SZ' }
		},

		[`${base}\\${appName}.lin\\shell\\${appName}\\shell\\Decompile`]: {
			'': { value: 'Decompile', type: 'REG_SZ' }
		},

		[`${base}\\${appName}.lin\\shell\\${appName}\\shell\\Decompile\\command`]: {
			'': {
				value: `"${exe}" --decompile "%1"`,
				type: 'REG_SZ'
			}
		}
  })

	console.log("DanoneTools registered succesfully.");
}

async function unregister() {
  await $`reg delete HKCR\\DanoneTools.lin /f`;
	await $`reg delete HKCR\\.lin /f`;
	console.log("DanoneTools unregistered succesfully.");
}
