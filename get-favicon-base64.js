import { readFileSync } from 'fs';

const buffer = readFileSync('public/favicon-cropped.png');
const base64 = buffer.toString('base64');
console.log(base64);
