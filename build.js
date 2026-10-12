const fs = require('fs');

const skip = ['dist','node_modules','.git','.github','package.json',
  'package-lock.json','build.js','.htmlvalidate.json','README.md'];
fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist');

for (const f of fs.readdirSync('.')) {
  if (!skip.includes(f)) fs.cpSync(f, 'dist/' + f, { recursive: true });
}