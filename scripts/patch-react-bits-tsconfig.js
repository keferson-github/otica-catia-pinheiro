import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const pkgTsPath = join(process.cwd(), 'node_modules', 'react-bits', 'tsconfig.json');

if (!existsSync(pkgTsPath)) {
  console.log('react-bits tsconfig not found, skipping.');
  process.exit(0);
}

const raw = readFileSync(pkgTsPath, 'utf8');
let parsed;
try {
  parsed = JSON.parse(raw);
} catch (e) {
  console.error('Failed to parse react-bits tsconfig.json:', e);
  process.exit(1);
}

if (Array.isArray(parsed.include) && parsed.include.length === 1 && parsed.include[0] === './src') {
  parsed.include = ['./typings'];
  writeFileSync(pkgTsPath, JSON.stringify(parsed, null, 2) + '\n', 'utf8');
  console.log('Patched react-bits tsconfig include -> ./typings');
} else {
  console.log('No patch required for react-bits tsconfig.');
}
