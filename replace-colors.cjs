const fs = require("fs");
const files = ["app/page.tsx", "app/vsl/page.tsx", "app/thank-you/page.tsx"];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  
  // Replace colors
  content = content.replace(/bg-red-[67]00/g, "bg-saffron");
  content = content.replace(/hover:bg-red-[67]00/g, "hover:bg-saffron-hover");
  content = content.replace(/text-red-500/g, "text-saffron");
  content = content.replace(/text-red-600/g, "text-saffron");
  content = content.replace(/border-red-[67]00/g, "border-saffron");
  content = content.replace(/from-red-[0-9]+/g, "from-saffron");
  
  content = content.replace(/bg-slate-900/g, "bg-night");
  content = content.replace(/bg-slate-950/g, "bg-night");
  content = content.replace(/text-slate-900/g, "text-night");
  content = content.replace(/text-slate-950/g, "text-night");
  content = content.replace(/border-slate-900/g, "border-night");
  content = content.replace(/border-slate-700/g, "border-night");
  content = content.replace(/from-slate-900\/60/g, "from-night/60");
  
  content = content.replace(/bg-slate-50\b|bg-white/g, "bg-ivory");
  content = content.replace(/text-slate-50\b|text-white/g, "text-ivory");
  
  content = content.replace(/bg-slate-[12]00/g, "bg-cream");
  content = content.replace(/border-slate-200/g, "border-cream");
  content = content.replace(/border-slate-[13]00/g, "border-cream");
  content = content.replace(/from-slate-200/g, "from-cream");
  
  content = content.replace(/text-slate-[3-8]00/g, "text-earth");
  content = content.replace(/bg-slate-[3-7]00/g, "bg-earth");
  content = content.replace(/border-slate-[3-7]00/g, "border-earth");
  content = content.replace(/text-slate-400/g, "text-earth");
  
  content = content.replace(/text-green-[0-9]+/g, "text-indigo");
  content = content.replace(/bg-green-[0-9]+/g, "bg-indigo");
  
  content = content.replace(/border-white/g, "border-ivory");

  fs.writeFileSync(file, content);
}
console.log("Colors replaced successfully!");
