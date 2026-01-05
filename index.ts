import args from "args";
import { register, unregister } from "./regedit";
import { decompile } from "./tools";

args.option("register", "Register the app on your context menu");
args.option("unregister", "Removes the app from your context menu");
args.option("decompile", "Decompiles a .LIN file");
const flags = args.parse(process.argv);

if (flags.register) {
	await register();
	process.exit(0);
}

if (flags.unregister) {
	await unregister();
	process.exit(0);
}

if (flags.decompile) {
	await decompile();
	process.exit(0);
}

console.error(
	"No options were supplied. Please check --help to see available commands.",
);
process.exit(1);
