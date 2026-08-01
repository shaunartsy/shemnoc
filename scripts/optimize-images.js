const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '../public/assets/images');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (/\.(png|jpe?g)$/i.test(file)) {
      const tempPath = filePath + '.tmp';
      
      try {
        const image = sharp(filePath);
        const metadata = await image.metadata();
        
        let transform = image;
        
        // Resize massive images (e.g., >1920 width)
        if (metadata.width > 1920) {
          transform = transform.resize({ width: 1920, withoutEnlargement: true });
        }
        
        if (/\.png$/i.test(file)) {
          // Compress PNG
          await transform.png({ quality: 80, compressionLevel: 9 }).toFile(tempPath);
        } else {
          // Compress JPEG
          await transform.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
        }
        
        const originalSize = stat.size;
        const newSize = fs.statSync(tempPath).size;
        
        if (newSize < originalSize) {
          fs.renameSync(tempPath, filePath);
          console.log(`Optimized: ${file} (${(originalSize/1024).toFixed(1)}kb -> ${(newSize/1024).toFixed(1)}kb)`);
        } else {
          fs.unlinkSync(tempPath);
          console.log(`Skipped (already optimized): ${file}`);
        }
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
    }
  }
}

processDirectory(dir).then(() => console.log('Image optimization complete.'));
