const sharp = require('sharp');

async function checkLogo() {
  const file = 'public/stylehvn-logo.png';
  const { data, info } = await sharp(file).raw().toBuffer({ resolveWithObject: true });
  
  console.log('Image info:', info);
  console.log('Format:', info.format, 'Has Alpha:', info.hasAlpha);
  
  // Sample top-left corner colors
  const colors = {};
  for (let y = 0; y < 50; y++) {
    for (let x = 0; x < 50; x++) {
      const idx = (y * info.width + x) * info.channels;
      const key = `${data[idx]},${data[idx+1]},${data[idx+2]},${data[idx+3]}`;
      colors[key] = (colors[key] || 0) + 1;
    }
  }
  
  const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]).slice(0, 10);
  console.log('Top colors in corner:', sorted);
}

checkLogo().catch(console.error);
