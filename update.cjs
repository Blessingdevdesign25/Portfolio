const fs = require('fs');

const file = 'src/imports/Portfolio2.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add Context imports
content = content.replace(
  /import imgImage1 from "figma:asset\/1aa0ad57739dff34e69790bf305718039bcc09dd\.png";/,
  `import imgImage1 from "figma:asset/1aa0ad57739dff34e69790bf305718039bcc09dd.png";\nimport Navbar from "../app/components/ui/Navbar";\nimport { motion } from "framer-motion";\nimport heroBgImage from "../assets/hero_tech_bg.png";`
);

// 2. Add hero background and center items in HeroSection
content = content.replace(
  /function HeroSection\(\) {\s*return \(\s*<div className="h-\[733px\] relative shrink-0 w-full" data-name="hero section">/,
  `function HeroSection() {\n  return (\n    <div className="h-[733px] relative shrink-0 w-full bg-cover bg-center" style={{ backgroundImage: \`url(\${heroBgImage})\`, backgroundAttachment: 'fixed' }} data-name="hero section">\n      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>`
);
content = content.replace(
  /<div className="flex flex-row items-center justify-center size-full">/,
  `<div className="flex flex-row items-center justify-center size-full relative z-10">`
);

// 3. Transform Carouse and Carouse1 to use framer motion for infinite scroll
content = content.replace(
  /function Carouse\(\) {[\s\S]*?return \([\s\S]*?<div className="bg-\[#101e32\] relative shrink-0 w-full" data-name="Carouse">[\s\S]*?<div className="flex flex-row items-center justify-center size-full">[\s\S]*?<div className="content-stretch flex gap-\[28px\] items-center justify-center p-\[16px\] relative w-full">([\s\S]*?)<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?\);[\s\S]*?}/,
  `function Carouse() {
  return (
    <div className="bg-[#101e32] relative shrink-0 w-full overflow-hidden" data-name="Carouse">
      <motion.div 
        className="flex flex-row items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        <div className="content-stretch flex gap-[28px] items-center p-[16px] relative w-max shrink-0">
          $1
          $1
        </div>
      </motion.div>
    </div>
  );
}`
);

content = content.replace(
  /function Carouse1\(\) {[\s\S]*?return \([\s\S]*?<div className="bg-\[#101e32\] relative shrink-0 w-full" data-name="Carouse">[\s\S]*?<div className="flex flex-row items-center justify-center size-full">[\s\S]*?<div className="content-stretch flex gap-\[28px\] items-center justify-center p-\[16px\] relative w-full">([\s\S]*?)<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?\);[\s\S]*?}/,
  `function Carouse1() {
  return (
    <div className="bg-[#101e32] relative shrink-0 w-full overflow-hidden" data-name="Carouse">
      <motion.div 
        className="flex flex-row items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        <div className="content-stretch flex gap-[28px] items-center p-[16px] relative w-max shrink-0">
          $1
          $1
        </div>
      </motion.div>
    </div>
  );
}`
);


// 4. Update ID for Case Study and Projects, and ensure items are centered
content = content.replace(
  /<div className="bg-white content-stretch flex flex-col items-center overflow-clip p-\[80px\] relative shrink-0 w-\[1280px\]" data-name="Live Project">/,
  `<div id="projects" className="bg-white content-stretch flex flex-col items-center overflow-clip p-[80px] relative shrink-0 w-full" data-name="Live Project">`
);

content = content.replace(
  /<div className="bg-white content-stretch flex flex-col items-center overflow-clip p-\[80px\] relative shrink-0 w-\[1280px\]" data-name="Featured Projects">/,
  `<div id="case-study" className="bg-white content-stretch flex flex-col items-center overflow-clip p-[80px] relative shrink-0 w-full" data-name="Featured Projects">`
);

// Center the project texts globally in titles
content = content.split('className="content-stretch flex items-center relative shrink-0 w-full" data-name="Project Title"').join('className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project Title"');
content = content.split('className="content-stretch flex items-center relative shrink-0 w-full" data-name="Project summary"').join('className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project summary"');
content = content.split('className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Link"').join('className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="Link"');

// 5. Update Footer social links properly
content = content.replace(/href="https:\/\/www\.linkedin\.com\/in\/blessingkadiri"/g, 'href="https://www.linkedin.com/in/blessing-o-kadiri"');
content = content.replace(/href="https:\/\/wa\.me\/2348012345678"/g, 'href="https://wa.me/2348108783006"');
content = content.replace(/href="https:\/\/github\.com\/blessingkadiri"/g, 'href="https://github.com/Blessingdevdesign25/"');
content = content.replace(/href="https:\/\/www\.behance\.net\/blessingkadiri"/g, 'href="https://www.behance.net/blessingokadiri"');


// 6. Fix SocialLinks in the Hero to also point to the right hrefs, but they are wrapped as icons.
// Wait, the SocialLinks in Hero are just visual SVGs! Let's wrap them in <a>
content = content.replace(
  /<div className="content-stretch flex gap-\[6px\] items-center justify-center p-\[16px\] relative rounded-\[99999px\] shrink-0" data-name="Button">\s*<div className="overflow-clip relative shrink-0 size-\[20px\]" data-name="Platform=LinkedIn, Color=Negative">([\s\S]*?)<\/div>\s*<\/div>/,
  `<a href="https://www.linkedin.com/in/blessing-o-kadiri" className="content-stretch flex gap-[6px] items-center justify-center p-[16px] relative rounded-[99999px] shrink-0 hover:bg-[#02F8CF]/20 transition-colors" data-name="Button">\n        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Platform=LinkedIn, Color=Negative">$1</div>\n      </a>`
);
content = content.replace(
  /<div className="content-stretch flex gap-\[6px\] items-center justify-center p-\[16px\] relative rounded-\[99999px\] shrink-0" data-name="Button">\s*<div className="overflow-clip relative shrink-0 size-\[20px\]" data-name="Platform=Github, Color=Negative">\s*<div className="absolute inset-\[0_0_1\.67%_0\]" data-name="Vector">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/,
  `<a href="https://github.com/Blessingdevdesign25/" className="content-stretch flex gap-[6px] items-center justify-center p-[16px] relative rounded-[99999px] shrink-0 hover:bg-[#02F8CF]/20 transition-colors" data-name="Button">\n        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Platform=Github, Color=Negative">\n          <div className="absolute inset-[0_0_1.67%_0]" data-name="Vector">$1</div>\n        </div>\n      </a>`
);
content = content.replace(
  /<div className="content-stretch flex gap-\[6px\] items-center justify-center p-\[16px\] relative rounded-\[99999px\] shrink-0" data-name="Button">\s*<div className="relative shrink-0 size-\[20px\]" data-name="Platform=WhatsApp, Color=Negative">\s*<div className="absolute inset-\[0_0\.48%_0_0\]" data-name="Vector">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/,
  `<a href="https://wa.me/2348108783006" className="content-stretch flex gap-[6px] items-center justify-center p-[16px] relative rounded-[99999px] shrink-0 hover:bg-[#02F8CF]/20 transition-colors" data-name="Button">\n        <div className="relative shrink-0 size-[20px]" data-name="Platform=WhatsApp, Color=Negative">\n          <div className="absolute inset-[0_0.48%_0_0]" data-name="Vector">$1</div>\n        </div>\n      </a>`
);


// 7. Inject Navbar correctly 
content = content.replace(
  /export default function Portfolio\(\) {\s*return \(\s*<div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Portfolio2">\s*<div className="bg-\[#101e32\] relative shrink-0 w-full z-\[2\]" data-name="Nav Bar2">\s*<div className="flex flex-col items-center justify-center overflow-clip rounded-\[inherit\] size-full">\s*<div className="content-stretch flex flex-col items-center justify-center px-\[80px\] py-\[10px\] relative w-full">\s*<NavContainer \/>\s*<\/div>\s*<\/div>\s*<\/div>/,
  `export default function Portfolio() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Portfolio2">
      <Navbar />`
);


fs.writeFileSync(file, content, 'utf8');
console.log('Update script completely executed.');
