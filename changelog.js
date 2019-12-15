const fs        = require('fs');
const markdown  = require('markdown-tree');

const readFile = src => fs.readFileSync(src, { encoding: 'utf-8' });

const changelog = () => {
	const changelog = readFile('CHANGELOG.md');
	const tree = markdown(changelog);
	const object = tree.children.map(c => ({
		version: c.text,
		changes: c.tokens.map(t => t.text).filter(x => x)
	}));
	const type = `{ version: string; changes: string[]; }[]`;
	const code = `export const CHANGELOG: ${type} = ${JSON.stringify(object, null, 2)};\n`;
	fs.writeFileSync('source/changelog.ts', code);
};

changelog();