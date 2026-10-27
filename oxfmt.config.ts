import { readFileSync } from "node:fs";
import { defineConfig } from "oxfmt";

export default defineConfig({
	useTabs: true,
	tabWidth: 2,
	printWidth: 120,
	singleQuote: false,
	jsxSingleQuote: false,
	semi: true,
	trailingComma: "all",
	endOfLine: "lf",
	sortImports: {
		newlinesBetween: false,
		sortSideEffects: false,
	},
	sortPackageJson: false,
	ignorePatterns: [
		// Explicit file arguments can bypass automatic .gitignore discovery.
		...readFileSync(new URL(".gitignore", import.meta.url), "utf8")
			.split(/\r?\n/)
			.filter((pattern) => pattern.trim() !== "" && !pattern.startsWith("#")),
		"**/public/**",
		"**/.vscode/**",
		"**/src/ui/**",
	],
});
