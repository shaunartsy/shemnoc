const fs = require('fs');
const path = require('path');

function fixLazy(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fp = path.join(dir, file);
    if (fs.statSync(fp).isDirectory()) {
      fixLazy(fp);
    } else if (fp.endsWith('.js')) {
      let content = fs.readFileSync(fp, 'utf8');
      const newContent = content.replace(/\/\s*loading="lazy"/g, ' loading="lazy" /');
      if (content !== newContent) {
        fs.writeFileSync(fp, newContent);
        console.log('Fixed lazy in: ' + file);
      }
    }
  }
}

fixLazy('components/sections');
