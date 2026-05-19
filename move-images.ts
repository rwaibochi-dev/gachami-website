import fs from 'fs';
import path from 'path';

const files = fs.readdirSync(process.cwd());
const imageFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'));

if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

for (const file of imageFiles) {
  try {
    fs.renameSync(file, path.join('public', file));
    console.log(`Moved ${file} to public/`);
  } catch (e) {
    console.error(`Failed to move ${file}: ${e}`);
  }
}
