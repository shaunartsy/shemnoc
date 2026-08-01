const fs = require('fs');
const path = require('path');

const layoutPath = path.join(__dirname, '../app/layout.js');
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

const importRegex = /import ['"](.*\.css)['"]/g;
let match;
let cssToMerge = [];
let layoutLines = layoutContent.split('\n');

while ((match = importRegex.exec(layoutContent)) !== null) {
  const cssPath = match[1];
  // Only merge local assets, excluding fontawesome to prevent breaking webfonts path
  if (cssPath.startsWith('../public/assets/css/') && !cssPath.includes('fontawesome')) {
    cssToMerge.push({
      importLine: match[0],
      filePath: path.join(__dirname, '../app', cssPath)
    });
  }
}

let mergedCssContent = '';
let isFirstReplacement = true;

for (const item of cssToMerge) {
  // Read and append CSS
  mergedCssContent += `\n/* --- Merged from ${path.basename(item.filePath)} --- */\n`;
  mergedCssContent += fs.readFileSync(item.filePath, 'utf8');
  
  // Remove import from layout.js
  layoutLines = layoutLines.map(line => {
    if (line.includes(item.importLine)) {
      if (isFirstReplacement) {
        isFirstReplacement = false;
        return 'import "../public/assets/css/merged-styles.css"';
      }
      return null; // mark for deletion
    }
    return line;
  }).filter(line => line !== null);
}

// Write the merged CSS file
fs.writeFileSync(path.join(__dirname, '../public/assets/css/merged-styles.css'), mergedCssContent);

// Write the updated layout.js
fs.writeFileSync(layoutPath, layoutLines.join('\n'));

console.log(`Merged ${cssToMerge.length} CSS files into merged-styles.css`);
