const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '../public/assets/images');
const componentsDir = path.join(__dirname, '../components');
const appDir = path.join(__dirname, '../app');
const cssDir = path.join(__dirname, '../public/assets/css');

const toReplace = []; // Store original filenames to replace in code

async function processImages(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    // Skip favicons
    if (stat.isDirectory()) {
      if (file !== 'favicons') {
        await processImages(filePath);
      }
    } else if (/\.(png|jpe?g)$/i.test(file)) {
      const ext = path.extname(file);
      const webpPath = filePath.slice(0, -ext.length) + '.webp';
      
      try {
        await sharp(filePath).webp({ quality: 80 }).toFile(webpPath);
        console.log(`Converted: ${file} -> ${path.basename(webpPath)}`);
        
        // Store for string replacement
        toReplace.push({
          old: file,
          new: path.basename(webpPath)
        });
        
        // Delete original
        fs.unlinkSync(filePath);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

function replaceInFiles(directory, extensions) {
  if (!fs.existsSync(directory)) return;
  
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      replaceInFiles(filePath, extensions);
    } else if (extensions.includes(path.extname(filePath))) {
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      
      for (const item of toReplace) {
        // Simple string replace for the exact filename
        const regex = new RegExp(item.old.replace(/\./g, '\\.'), 'g');
        if (regex.test(content)) {
          content = content.replace(regex, item.new);
          changed = true;
        }
      }
      
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated references in: ${filePath}`);
      }
    }
  }
}

async function run() {
  console.log('Starting WebP conversion...');
  await processImages(imagesDir);
  
  console.log('Updating references in JS and CSS files...');
  replaceInFiles(componentsDir, ['.js', '.jsx']);
  replaceInFiles(appDir, ['.js', '.jsx']);
  replaceInFiles(cssDir, ['.css']);
  
  console.log('Phase 2 optimization complete!');
}

run();
