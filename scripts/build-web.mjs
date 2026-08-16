import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const source = resolve('index.html');
const outputDir = resolve('mobile-web');
const destination = resolve(outputDir, 'index.html');

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(source, destination);

console.log('Prepared mobile-web/index.html for Capacitor.');
