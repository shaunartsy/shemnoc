const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const components = [
'BackToTop',
'DataBg',
'PortfolioFilter1',
'Preloader',
'Breadcrumb',
'Layout',
'Menu',
'SearchPopup',
'Sidebar',
'TestimonialSlider1',
'Footer1',
'Footer2',
'Header1',
'Header2',
'About',
'Appoinment',
'Banner',
'Faq',
'Service',
'Team',
'Testimonial',
'Working'
];

const unused = [];

components.forEach(comp => {
  try {
    const res = execSync(`powershell -Command "Select-String -Pattern '\\b${comp}\\b' -Path c:\\Users\\user\\Documents\\shemnoc\\app\\*.js, c:\\Users\\user\\Documents\\shemnoc\\app\\*\\*.js, c:\\Users\\user\\Documents\\shemnoc\\components\\*\\*.js, c:\\Users\\user\\Documents\\shemnoc\\components\\*\\*\\*.js"`, { encoding: 'utf8' });
    
    // We expect it to appear more than just its definition.
    // If it only appears in its own file definition, it's unused.
    const lines = res.split('\n').filter(line => line.trim() !== '');
    // Check if it appears in files other than the one where it's defined
    const otherUsages = lines.filter(line => !line.includes(`function ${comp}`) && !line.includes(`class ${comp}`) && !line.includes(`export default ${comp}`));
    
    if (otherUsages.length === 0) {
      unused.push(comp);
    }
  } catch (e) {
    // Select-String fails (returns exit code 1) if no matches found
    unused.push(comp);
  }
});

console.log("Unused components:");
console.log(unused);
