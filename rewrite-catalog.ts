import fs from 'fs';

const filenames = `
1000321739 - Copy - Copy.jpg
1000321740.jpg
1000321741 - Copy.jpg
1000321742.jpg
1000321743.jpg
1000321744 - Copy.jpg
1000321745.jpg
1000321746 - Copy.jpg
1000321747.jpg
1000321748.jpg
1000321749 - Copy.jpg
1000321750.jpg
1000321751.jpg
1000321752.jpg
1000321753.jpg
1000321754.jpg
1000321755.jpg
1000321756.jpg
1000321757.jpg
1000321758.jpg
1000321759.jpg
1000321760.jpg
1000321761.jpg
1000321762.jpg
1000321763.jpg
1000321764.jpg
1000321765.jpg
1000321766.jpg
1000321767.jpg
1000321768.jpg
1000321769.jpg
1000321770.jpg
1000321771.jpg
1000321772.jpg
1000321773.jpg
1000321774.jpg
1000321775.jpg
1000321776.jpg
1000321777.jpg
1000321778.jpg
1000321779.jpg
1000321780.jpg
1000321781.jpg
1000321782.jpg
1000321783.jpg
1000321784.jpg
1000321785.jpg
1000321786.jpg
1000321788.jpg
1000321789.jpg
1000321790.jpg
1000321791.jpg
1000321792.jpg
1000321793.jpg
1000321794.jpg
1000321795.jpg
1000321796.jpg
1000321797.jpg
1000321798.jpg
1000321799.jpg
1000321800.png
1000321801.jpg
1000321802.jpg
1000321803.webp
1000321804.jpg
f3ffc61c-d5e7-4a06-9063-bba5f6e1412c-1_all_22410.jpg
`.trim().split('\n');

const itemNames = [
  "Wire Roll (Red/Black)",
  "Water Tank (Black)",
  "Toilet",
  "Clear Handle Tap",
  "Kitchen Mixer Faucet",
  "Brass Tap",
  "Brass Fittings",
  "Pliers Set",
  "Heavy Duty Mallet",
  "Spirit Level",
  "Brass Padlocks (Set of 4)",
  "Screwdriver Set",
  "Watering Can",
  "Gardening Gloves",
  "Hose Clamps",
  "Brass Valve",
  "PVC Y Fitting",
  "PVC Ball Valve",
  "PPR Fittings",
  "PVC Pipes (Orange)",
  "PVC Pipes (Grey)",
  "Metal Valve",
  "Braided Water Hose",
  "Floor Drain",
  "Bidet Spray",
  "Shower Head (Chrome)",
  "Shower Head (Multi-setting)",
  "Sanitary Ware Set",
  "Kitchen Sink",
  "Binding Wire",
  "Brass Compression Fittings",
  "Teflon Tape",
  "Crowbar",
  "Garden Rake",
  "Machete",
  "Hacksaw",
  "Pincer Pliers",
  "Steel Rake",
  "Plastic Water Drums (Blue)",
  "Pedestal Sink",
  "Toilet Brush",
  "Squat Toilet",
  "Toilet Paper Holder",
  "Plunger",
  "Steel Padlocks",
  "Metal Files Set",
  "L-Square Ruler",
  "Hacksaw (Bi-Metal)",
  "C-Clamp (Black)",
  "Linesman Pliers",
  "Soldering Iron",
  "Claw Hammer",
  "PVC Pipe Glue",
  "Electric Shower Head (Blue)",
  "Electric Shower Head (Beige)",
  "Electric Shower Head (Yellow)",
  "Electric Shower Head (White)",
  "Water Pump",
  "Manual Water Pump",
  "Sink Drain Pipe",
  "Sink P-Trap",
  "Pipe Welding Machine",
  "Lawn Sprinkler",
  "Toilet Flush Mechanism",
  "Shutoff Valve",
  "C-Clamp (Red)"
];

const map = {};
for (let i = 0; i < 66; i++) {
  map[itemNames[i]] = `/${filenames[i]}`;
}

const lines = fs.readFileSync('src/lib/catalogData.ts', 'utf-8').split('\n');
const outLines = [];

let inMap = false;
let inFunc = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const keywordImages')) {
    outLines.push(`const exactImageMapping: Record<string, string> = ${JSON.stringify(map, null, 2)};\n`);
    inMap = true;
  }
  
  if (inMap && lines[i] === '};') {
    inMap = false;
    continue;
  }
  
  if (inMap) continue;

  if (lines[i].includes('const categoryFallbackImages')) {
    inMap = true;
    continue;
  }

  if (lines[i].includes('function getImageUrlForName')) {
    inFunc = true;
    outLines.push('function getImageUrlForName(name: string, category: string, index: number): string {');
    outLines.push('  return exactImageMapping[name] || `https://images.unsplash.com/photo-1541548003668-cb0a4c5cf212?auto=format&fit=crop&q=80&w=500`;');
    outLines.push('}');
    continue;
  }

  if (inFunc && lines[i] === '}') {
    inFunc = false;
    continue;
  }

  if (inFunc) continue;

  outLines.push(lines[i]);
}

fs.writeFileSync('src/lib/catalogData.ts', outLines.join('\n'));
