const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'logo.png');
const dest = path.join(__dirname, 'src', 'assets', 'logo.png');

try {
  // Ensure assets directory exists
  const assetsDir = path.join(__dirname, 'src', 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  // Copy the file
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log('SUCCESS: logo.png copied to src/assets/logo.png');
    console.log('File size:', fs.statSync(dest).size, 'bytes');
  } else {
    console.error('ERROR: logo.png not found in root directory');
    process.exit(1);
  }
} catch (error) {
  console.error('ERROR:', error.message);
  process.exit(1);
}

