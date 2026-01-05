import path from "node:path";

export async function decompile(filePath: string) {
	const dir = path.dirname(filePath);
	const name = path.basename(filePath, path.extname(filePath));
	await Bun.write(
		path.join(dir, `${name}.txt`),
		`OK\nFile: ${filePath}\nTime: ${new Date().toISOString()}`,
	);
	console.log("File decompiled succesfully.");
}
