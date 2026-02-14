const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'logo.png');
const publicDir = path.join(__dirname, 'public');
const dest = path.join(publicDir, 'logo.png');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('Created public directory');
}

// Copy logo.png to public folder
if (fs.existsSync(source)) {
  fs.copyFileSync(source, dest);
  console.log('SUCCESS: logo.png copied to public/logo.png');
  console.log('Source:', source);
  console.log('Destination:', dest);
  console.log('File exists:', fs.existsSync(dest));
  console.log('File size:', fs.statSync(dest).size, 'bytes');
} else {
  console.error('ERROR: logo.png not found in root directory');
  console.log('Current directory:', __dirname);
  console.log('Looking for:', source);
  process.exit(1);
}

