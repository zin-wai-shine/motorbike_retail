const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, 'src', 'assets', 'fonts');
const sourceDir = '/Users/zinwaishine/Downloads/alphacorsa';

// Create fonts directory
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
  console.log('Created fonts directory');
}

// Copy font files
const fonts = [
  'Alphacorsa Personal Use.ttf',
  'Alphacorsa Personal Use Italic.ttf'
];

fonts.forEach(font => {
  const source = path.join(sourceDir, font);
  const dest = path.join(fontsDir, font);
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log(`Copied: ${font}`);
    console.log(`  Source: ${source}`);
    console.log(`  Destination: ${dest}`);
    console.log(`  Exists: ${fs.existsSync(dest)}`);
    console.log(`  Size: ${fs.statSync(dest).size} bytes`);
  } else {
    console.error(`ERROR: Source file not found: ${source}`);
  }
});

console.log('\nFont files in destination:');
if (fs.existsSync(fontsDir)) {
  const files = fs.readdirSync(fontsDir);
  files.forEach(file => {
    const filePath = path.join(fontsDir, file);
    const stats = fs.statSync(filePath);
    console.log(`  ${file} (${stats.size} bytes)`);
  });
} else {
  console.error('ERROR: Fonts directory does not exist');
}

