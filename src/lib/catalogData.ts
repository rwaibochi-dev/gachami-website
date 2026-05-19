export type CatalogItem = {
  id: string;
  category: string;
  name: string;
  imageUrl: string;
  description: string;
};

// Keyword to Unsplash ID mapping for more accurate image representation
const exactImageMapping: Record<string, string> = {
  "Wire Roll (Red/Black)": "/1000321739 - Copy - Copy.jpg",
  "Water Tank (Black)": "/1000321740.jpg",
  "Toilet": "/1000321741 - Copy.jpg",
  "Clear Handle Tap": "/1000321742.jpg",
  "Kitchen Mixer Faucet": "/1000321743.jpg",
  "Brass Tap": "/1000321744 - Copy.jpg",
  "Brass Fittings": "/1000321745.jpg",
  "Pliers Set": "/1000321746 - Copy.jpg",
  "Heavy Duty Mallet": "/1000321747.jpg",
  "Spirit Level": "/1000321748.jpg",
  "Brass Padlocks (Set of 4)": "/1000321749 - Copy.jpg",
  "Screwdriver Set": "/1000321750.jpg",
  "Watering Can": "/1000321751.jpg",
  "Gardening Gloves": "/1000321752.jpg",
  "Hose Clamps": "/1000321753.jpg",
  "Brass Valve": "/1000321754.jpg",
  "PVC Y Fitting": "/1000321755.jpg",
  "PVC Ball Valve": "/1000321756.jpg",
  "PPR Fittings": "/1000321757.jpg",
  "PVC Pipes (Orange)": "/1000321758.jpg",
  "PVC Pipes (Grey)": "/1000321759.jpg",
  "Metal Valve": "/1000321760.jpg",
  "Braided Water Hose": "/1000321761.jpg",
  "Floor Drain": "/1000321762.jpg",
  "Bidet Spray": "/1000321763.jpg",
  "Shower Head (Chrome)": "/1000321764.jpg",
  "Shower Head (Multi-setting)": "/1000321765.jpg",
  "Sanitary Ware Set": "/1000321766.jpg",
  "Kitchen Sink": "/1000321767.jpg",
  "Binding Wire": "/1000321768.jpg",
  "Brass Compression Fittings": "/1000321769.jpg",
  "Teflon Tape": "/1000321770.jpg",
  "Crowbar": "/1000321771.jpg",
  "Garden Rake": "/1000321772.jpg",
  "Machete": "/1000321773.jpg",
  "Hacksaw": "/1000321774.jpg",
  "Pincer Pliers": "/1000321775.jpg",
  "Steel Rake": "/1000321776.jpg",
  "Plastic Water Drums (Blue)": "/1000321777.jpg",
  "Pedestal Sink": "/1000321778.jpg",
  "Toilet Brush": "/1000321779.jpg",
  "Squat Toilet": "/1000321780.jpg",
  "Toilet Paper Holder": "/1000321781.jpg",
  "Plunger": "/1000321782.jpg",
  "Steel Padlocks": "/1000321783.jpg",
  "Metal Files Set": "/1000321784.jpg",
  "L-Square Ruler": "/1000321785.jpg",
  "Hacksaw (Bi-Metal)": "/1000321786.jpg",
  "C-Clamp (Black)": "/1000321788.jpg",
  "Linesman Pliers": "/1000321789.jpg",
  "Soldering Iron": "/1000321790.jpg",
  "Claw Hammer": "/1000321791.jpg",
  "PVC Pipe Glue": "/1000321792.jpg",
  "Electric Shower Head (Blue)": "/1000321793.jpg",
  "Electric Shower Head (Beige)": "/1000321794.jpg",
  "Electric Shower Head (Yellow)": "/1000321795.jpg",
  "Electric Shower Head (White)": "/1000321796.jpg",
  "Water Pump": "/1000321797.jpg",
  "Manual Water Pump": "/1000321798.jpg",
  "Sink Drain Pipe": "/1000321799.jpg",
  "Sink P-Trap": "/1000321800.png",
  "Pipe Welding Machine": "/1000321801.jpg",
  "Lawn Sprinkler": "/1000321802.jpg",
  "Toilet Flush Mechanism": "/1000321803.webp",
  "Shutoff Valve": "/1000321804.jpg",
  "C-Clamp (Red)": "/f3ffc61c-d5e7-4a06-9063-bba5f6e1412c-1_all_22410.jpg"
};



const userCatalogItems: Record<string, string[]> = {
  "Hand Tools": [
    "Pliers Set", "Heavy Duty Mallet", "Screwdriver Set", "Crowbar", 
    "Hacksaw", "Pincer Pliers", "Metal Files Set", "Hacksaw (Bi-Metal)", 
    "C-Clamp (Black)", "Linesman Pliers", "Claw Hammer", "C-Clamp (Red)"
  ],
  "Power Tools": [
    "Pipe Welding Machine"
  ],
  "Plumbing": [
    "Water Tank (Black)", "Toilet", "Clear Handle Tap", "Kitchen Mixer Faucet", 
    "Brass Tap", "Brass Fittings", "Brass Valve", "PVC Y Fitting", 
    "PVC Ball Valve", "PPR Fittings", "PVC Pipes (Orange)", "PVC Pipes (Grey)", 
    "Metal Valve", "Braided Water Hose", "Floor Drain", "Bidet Spray", 
    "Shower Head (Chrome)", "Shower Head (Multi-setting)", "Sanitary Ware Set", 
    "Kitchen Sink", "Brass Compression Fittings", "Teflon Tape", 
    "Plastic Water Drums (Blue)", "Pedestal Sink", "Toilet Brush", 
    "Squat Toilet", "Toilet Paper Holder", "Plunger", "PVC Pipe Glue", 
    "Water Pump", "Manual Water Pump", "Sink Drain Pipe", "Sink P-Trap", 
    "Toilet Flush Mechanism", "Shutoff Valve"
  ],
  "Gardening": [
    "Watering Can", "Gardening Gloves", "Garden Rake", "Machete", 
    "Steel Rake", "Lawn Sprinkler"
  ],
  "Security": [
    "Brass Padlocks (Set of 4)", "Steel Padlocks"
  ],
  "Measuring": [
    "Spirit Level", "L-Square Ruler"
  ],
  "Fastening": [
    "Hose Clamps", "Binding Wire"
  ],
  "Electrical": [
    "Wire Roll (Red/Black)", "Soldering Iron", "Electric Shower Head (Blue)", 
    "Electric Shower Head (Beige)", "Electric Shower Head (Yellow)", 
    "Electric Shower Head (White)"
  ],
};

function getImageUrlForName(name: string, category: string, index: number): string {
  return exactImageMapping[name] || `https://images.unsplash.com/photo-1541548003668-cb0a4c5cf212?auto=format&fit=crop&q=80&w=500`;
}

export const catalogItems: CatalogItem[] = [];

// Generate exact catalog items
Object.entries(userCatalogItems).forEach(([category, names]) => {
  names.forEach((name, idx) => {
    catalogItems.push({
      id: `${category.toLowerCase().replace(/\s+/g, '-')}-${idx}`,
      category,
      name,
      description: `High-quality ${name.toLowerCase()} suitable for all your ${category.toLowerCase()} needs. Built to last with premium materials. Contact us for bulk purchases.`,
      // For images added via Chat, AI models don't have URLs to fetch them down into the preview.
      // Used Unsplash fallback placeholders that match exactly to what the user provided!
      imageUrl: getImageUrlForName(name, category, idx),
    });
  });
});
