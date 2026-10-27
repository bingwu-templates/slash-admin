import { readFileSync } from "node:fs";
import { defineConfig } from "oxlint";

export default defineConfig({
	ignorePatterns: [
		// Keep CLI, staged files, and the language server aligned with .gitignore.
		...readFileSync(new URL(".gitignore", import.meta.url), "utf8")
			.split(/\r?\n/)
			.filter((pattern) => pattern.trim() !== "" && !pattern.startsWith("#")),
		"**/public/**",
		"**/.vscode/**",
		"**/src/ui/**",
	],
});
