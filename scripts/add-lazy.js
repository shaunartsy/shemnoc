const fs = require('fs');
const path = require('path');

function addLazy(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fp = path.join(dir, file);
    if (fs.statSync(fp).isDirectory()) {
      addLazy(fp);
    } else if (fp.endsWith('.js') && !fp.includes('Banner.js')) {
      let content = fs.readFileSync(fp, 'utf8');
      const newContent = content.replace(/<img(.*?)>/g, (match, p1) => {
        if (p1.includes('loading=')) return match;
        return `<img${p1} loading="lazy">`;
      });
      if (content !== newContent) {
        fs.writeFileSync(fp, newContent);
        console.log('Added lazy to: ' + file);
      }
    }
  }
}

addLazy('components/sections');
