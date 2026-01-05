import args from "args";
import { register, unregister } from "./regedit";
import { compile, decompile } from "./tools";

args.option("register", "Register the app on your context menu");
args.option("unregister", "Removes the app from your context menu");
args.option("decompile", "Decompiles a .LIN file", "");
args.option("compile", "Compiles a .LIN file", "");
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
	const filePath = flags.decompile;
	if (typeof filePath !== "string") {
		console.error("You must provide a file path: --decompile <file>");
		process.exit(1);
	}
	await decompile(filePath);
	process.exit(0);
}

if (flags.compile) {
	const filePath = flags.compile;
	if (typeof filePath !== "string") {
		console.error("You must provide a file path: --compile <file>");
		process.exit(1);
	}
	await compile(filePath);
	process.exit(0);
}

console.error(
	"No options were supplied. Please check --help to see available commands.",
);
process.exit(1);
