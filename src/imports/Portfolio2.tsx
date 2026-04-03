import svgPaths from "./svg-2fs2ocah4c";

import Navbar from "../app/components/ui/Navbar";
import { motion } from "framer-motion";
import heroBgImage from "../assets/hero_tech_bg.png";
import imgSectioWrapper from "figma:asset/f2e73ff08e6c314ab52077707d7173dd9d8c1208.png";
import imgNewProfilePic1 from "figma:asset/c27ddfd858848061f80f54175204ed2524610963.png";
import imgImage57 from "figma:asset/ab057add8aace23bb019745422e3a902ac1ce76b.png";
import imgImage58 from "figma:asset/4464493b48b8a705f73b8e4f508080854d53c4ca.png";
import imgImage59 from "figma:asset/1a4eb941801e2a7aaafb1a64c87b0436440c047e.png";
import imgNeighborColors from "figma:asset/7a90af4f466ff8f235e1673c9810742efed5ab92.png";
import imgEstateHub from "figma:asset/82ec13b56c048a66e5f809c082a4436e30e0cb74.png";
import imgImage66 from "figma:asset/93125110bedb218f552cfcf8e9230ca887aa94ea.png";
import imgClipnote from "figma:asset/ea31e914f961036d6f6c80a013a6d013dcf1dca7.png";
import { imgGroup } from "./svg-whkhs";

function SocialLinks() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Social Links">
      <a href="https://www.linkedin.com/in/blessing-o-kadiri" className="content-stretch flex gap-[6px] items-center justify-center p-[16px] relative rounded-[99999px] shrink-0 hover:bg-[#02F8CF]/20 transition-colors" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Platform=LinkedIn, Color=Negative">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3fb91680} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </a>
      <a href="https://github.com/Blessingdevdesign25/" className="content-stretch flex gap-[6px] items-center justify-center p-[16px] relative rounded-[99999px] shrink-0 hover:bg-[#02F8CF]/20 transition-colors" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Platform=Github, Color=Negative">
          <div className="absolute inset-[0_0_1.67%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.6667">
              <path clipRule="evenodd" d={svgPaths.p35525a80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </a>
      <a href="https://wa.me/2348108783006" className="content-stretch flex gap-[6px] items-center justify-center p-[16px] relative rounded-[99999px] shrink-0 hover:bg-[#02F8CF]/20 transition-colors" data-name="Button">
        <div className="relative shrink-0 size-[20px]" data-name="Platform=WhatsApp, Color=Negative">
          <div className="absolute inset-[0_0.48%_0_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.905 20">
              <path d={svgPaths.p3190a280} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

function ButtonWrapper() {
  return (
    <div className="content-stretch flex gap-[10px] items-start py-[24px] relative shrink-0" data-name="Button Wrapper">
      <div className="content-stretch flex gap-[6px] items-center justify-center p-[16px] relative rounded-[99999px] shrink-0 hover:bg-white/10 transition-colors cursor-pointer" data-name="Button">
        <div aria-hidden="true" className="absolute border border-white border-solid inset-0 pointer-events-none rounded-[99999px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="download">
          <div className="absolute inset-[12.5%]" data-name="Icon">
            <div className="absolute inset-[-6.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <path d={svgPaths.p193e1b00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component">
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-white text-[16px] whitespace-nowrap">Download Resume</p>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[600px]" data-name="hero">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component2">
        <div className="flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-white text-[0px] whitespace-pre-wrap">
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] mb-0 text-[24px]">I’m Blessing Kadiri,</p>
          <p className="leading-[1.4] mb-0 text-[48px]">&nbsp;</p>
          <p className="font-['Poppins:Medium',sans-serif] text-[48px]">
            <span className="leading-[1.4]">{`A `}</span>
            <span className="leading-[1.4] text-[#02f8cf]">Product Designer</span>
            <span className="leading-[1.4]">{` & Frontend Engineer`}</span>
          </p>
        </div>
      </div>
      <div className="content-stretch flex h-[66px] items-center relative shrink-0 w-full" data-name="Text Component2">
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-gray-200 text-[16px]">A multidisciplinary Product Minded Builder</p>
      </div>
      <ButtonWrapper />
    </div>
  );
}

function SectionContentContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1120px]" data-name="Section Content Container">
      <div className="absolute left-[-14px] size-[80px] top-[-80px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <path clipRule="evenodd" d={svgPaths.p481bd00} fill="var(--fill-0, #016353)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Hero />
      <div className="h-[503px] relative rounded-[100000000px] shrink-0 w-[400px]" data-name="new profile pic 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100000000px] size-full" src={imgNewProfilePic1} />
      </div>
      <div className="absolute bottom-[12px] right-0 size-[80px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <path clipRule="evenodd" d={svgPaths.p281ec700} fill="var(--fill-0, #014A3E)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="min-h-screen relative shrink-0 w-full bg-cover bg-center" style={{ backgroundImage: `url(${heroBgImage})`, backgroundAttachment: 'fixed' }} data-name="hero section">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
      <div className="flex flex-row items-center justify-center size-full relative z-10">
        <div className="content-stretch flex items-center justify-center p-[80px] relative size-full">
          <SectionContentContainer />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c1e0900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function CarouseIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="carouse icon">
      <ClipPathGroup />
    </div>
  );
}

function CarouseText() {
  return (
    <div className="content-stretch flex gap-[17px] items-end relative shrink-0" data-name="carouse text">
      <CarouseIcon />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Web Developer</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c1e0900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function CarouseIcon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="carouse icon">
      <ClipPathGroup1 />
    </div>
  );
}

function CarouseText1() {
  return (
    <div className="content-stretch flex gap-[17px] items-end relative shrink-0" data-name="carouse text">
      <CarouseIcon1 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Product Design</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c1e0900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function CarouseIcon2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="carouse icon">
      <ClipPathGroup2 />
    </div>
  );
}

function CarouseText2() {
  return (
    <div className="content-stretch flex gap-[17px] items-end relative shrink-0" data-name="carouse text">
      <CarouseIcon2 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Frontend Engineer</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c1e0900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function CarouseIcon3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="carouse icon">
      <ClipPathGroup3 />
    </div>
  );
}

function CarouseText3() {
  return (
    <div className="content-stretch flex gap-[17px] items-end relative shrink-0" data-name="carouse text">
      <CarouseIcon3 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">UI/UX Design</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c1e0900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function CarouseIcon4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="carouse icon">
      <ClipPathGroup4 />
    </div>
  );
}

function CarouseText4() {
  return (
    <div className="content-stretch flex gap-[17px] items-end relative shrink-0" data-name="carouse text">
      <CarouseIcon4 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">UX Research</p>
      </div>
    </div>
  );
}

function Carouse() {
  return (
    <div className="bg-[#101e32] relative shrink-0 w-full overflow-hidden" data-name="Carouse">
      <motion.div 
        className="flex flex-row items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        <div className="content-stretch flex gap-[28px] items-center p-[16px] relative w-max shrink-0">
          
          <CarouseText />
          <CarouseText1 />
          <CarouseText2 />
          <CarouseText3 />
          <CarouseText4 />
        
          
          <CarouseText />
          <CarouseText1 />
          <CarouseText2 />
          <CarouseText3 />
          <CarouseText4 />
        
        </div>
      </motion.div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[2px] items-start ml-[36px] mt-[97px] relative row-1 w-[162px]" data-name="About me">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2b2f3b] text-[33px] whitespace-nowrap">About Me</p>
      </div>
      <div className="h-0 relative shrink-0 w-[80px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 2">
            <line id="Line 1" stroke="var(--stroke-0, #02F8CF)" strokeWidth="2" x2="80" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[140px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 140">
          <path d={svgPaths.p871d080} fill="var(--fill-0, #02F8CF)" fillOpacity="0.2" id="Ellipse 1" />
        </svg>
      </div>
      <AboutMe />
    </div>
  );
}

function ButtonWrapper1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="button wrapper">
      <a href="https://github.com/Blessingdevdesign25/" target="_blank" rel="noreferrer" className="bg-[#02f8cf] content-stretch flex gap-[6px] items-center justify-center p-[16px] relative rounded-[99999px] shrink-0 hover:bg-[#02f8cf]/80 transition-colors" data-name="Button2">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#333] text-[16px] whitespace-nowrap">VIEW WORKS</p>
      </a>
      <div className="content-stretch flex gap-[6px] items-center justify-center p-[16px] relative rounded-[99999px] shrink-0" data-name="Button2">
        <div aria-hidden="true" className="absolute border border-[#121622] border-solid inset-0 pointer-events-none rounded-[99999px]" />
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#121622] text-[16px] whitespace-nowrap">DOWNLOAD CV</p>
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[635px]" data-name="about content">
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component2">
        <div className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#666] text-[16px] whitespace-pre-wrap">
          <p className="leading-[1.4] mb-0">I’m a frontend engineer focused on building scalable, user-centered web applications with React and modern JavaScript.</p>
          <p className="leading-[1.4] mb-0">&nbsp;</p>
          <p className="leading-[1.4] mb-0">I approach development from a product perspective—thinking beyond UI to how systems behave under real conditions. My work involves handling asynchronous data, managing complex UI states, and structuring components for clarity, reuse, and performance.</p>
          <p className="leading-[1.4] mb-0">&nbsp;</p>
          <p className="leading-[1.4] mb-0">Currently, I’m building an AI-powered video summarization platform, where I work with external APIs, dynamic data flows, and resilient interface design. This has strengthened my ability to translate complex functionality into simple, usable experiences.</p>
          <p className="leading-[1.4] mb-0">&nbsp;</p>
          <p className="leading-[1.4] mb-0">Before transitioning fully into engineering, I worked on UI/UX projects, which shaped how I think about usability, feedback, and interaction design. I bring that into my development process—building interfaces that are not only functional but intuitive.</p>
          <p className="leading-[1.4] mb-0">&nbsp;</p>
          <p className="leading-[1.4]">I’m particularly interested in building high-impact systems in fintech and other domains where reliability and user experience are critical.</p>
        </div>
      </div>
      <ButtonWrapper1 />
    </div>
  );
}

function AboutHero() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1120px]" data-name="about hero">
      <Group5 />
      <AboutContent />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[80px] items-center overflow-clip pb-[80px] relative shrink-0 w-full" data-name="about section">
      <Carouse />
      <AboutHero />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project Title">
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#121622] text-[19px]">OBS STUDIO</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project summary">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#808080] text-[16px]">A Redesign of OBS Studio where I applied design thinking on multiple levels.</p>
      </div>
      <a href="https://www.figma.com/proto/C2IPPwvnnYdObif4IAbpiY/May-Cohort?node-id=850-6763&viewport=735%2C445%2C0.19&t=KcNfepAssgxZo2uE-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=505%3A449&page-id=452%3A420" target="_blank" rel="noreferrer" className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full hover:underline decoration-[#14ae5c]" data-name="Link">
        <p className="font-['Poppins:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#14ae5c] text-[16px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Icon">
            <div className="absolute inset-[-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d="M1 11L11 1M11 1H1M11 1V11" id="Icon" stroke="var(--stroke-0, #14AE5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project Title">
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#121622] text-[19px]">Atlas!</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project summary">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#808080] text-[16px]">A travel agency landing page</p>
      </div>
      <a href="https://blessingdevdesign25.github.io/Travel-Agency-Homepage/" target="_blank" rel="noreferrer" className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full hover:underline decoration-[#14ae5c]" data-name="Link">
        <p className="font-['Poppins:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#14ae5c] text-[16px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Icon">
            <div className="absolute inset-[-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d="M1 11L11 1M11 1H1M11 1V11" id="Icon" stroke="var(--stroke-0, #14AE5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project Title">
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#121622] text-[19px]">NeighborColors</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project summary">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#808080] text-[16px]">A Color Generator Palette.</p>
      </div>
      <a href="https://blessingdevdesign25.github.io/Color-Palette/" target="_blank" rel="noreferrer" className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full hover:underline decoration-[#14ae5c]" data-name="Link">
        <p className="font-['Poppins:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#14ae5c] text-[16px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Icon">
            <div className="absolute inset-[-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d="M1 11L11 1M11 1H1M11 1V11" id="Icon" stroke="var(--stroke-0, #14AE5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project Title">
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#121622] text-[19px]">EstateHub</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project summary">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#808080] text-[16px]">A Real Estate Dashboard</p>
      </div>
      <a href="https://blessingdevdesign25.github.io/Real-Estate/" target="_blank" rel="noreferrer" className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full hover:underline decoration-[#14ae5c]" data-name="Link">
        <p className="font-['Poppins:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#14ae5c] text-[16px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Icon">
            <div className="absolute inset-[-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d="M1 11L11 1M11 1H1M11 1V11" id="Icon" stroke="var(--stroke-0, #14AE5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function Projects() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full max-w-[1120px] mx-auto" data-name="Projects">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[548px]" data-name="Case study">
        <div className="aspect-[4096/3072] relative rounded-[24px] shrink-0 w-full" data-name="image 57">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage57} />
        </div>
        <Title />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[548px]" data-name="Case study">
        <div className="aspect-[4096/3072] relative rounded-[24px] shrink-0 w-full" data-name="image 57">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage58} />
        </div>
        <Title1 />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[548px]" data-name="Case study">
        <div className="aspect-[4096/3072] relative rounded-[24px] shrink-0 w-full" data-name="image 57">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgNeighborColors} />
        </div>
        <Title2 />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[548px]" data-name="Case study">
        <div className="aspect-[4096/3072] relative rounded-[24px] shrink-0 w-full" data-name="image 57">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgEstateHub} />
        </div>
        <Title3 />
      </div>
    </div>
  );
}

function LiveProjectTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project Title">
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#121622] text-[19px]">CLIPNOTE</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project summary">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#808080] text-[16px]">This is an AI-powered platform that summarizes long-form videos which was built with React architecture, API integration, State handling and Error handling.</p>
      </div>
      <a href="https://clipnote-app.vercel.app/" target="_blank" rel="noreferrer" className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full hover:underline decoration-[#14ae5c]" data-name="Link">
        <p className="font-['Poppins:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#14ae5c] text-[16px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Icon">
            <div className="absolute inset-[-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d="M1 11L11 1M11 1H1M11 1V11" id="Icon" stroke="var(--stroke-0, #14AE5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function LiveProjectContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Live Project content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2b2f3b] text-[33px] whitespace-nowrap">Live Project</p>
      </div>
      <div className="content-start flex flex-wrap gap-[24px] justify-center relative shrink-0 w-full max-w-[1120px] mx-auto" data-name="Project">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-w-[1120px]" data-name="Live project">
          <div className="relative rounded-[24px] shrink-0 w-full h-[500px] overflow-hidden" data-name="clipnote image">
            <img alt="" className="absolute top-0 left-0 w-full object-cover object-top pointer-events-none rounded-[24px]" src={imgClipnote} />
          </div>
          <LiveProjectTitle />
        </div>
      </div>
    </div>
  );
}

function LiveProject() {
  return (
    <div id="projects" className="bg-white content-stretch flex flex-col items-center overflow-clip p-[80px] relative shrink-0 w-full" data-name="Live Project">
      <LiveProjectContent />
    </div>
  );
}

function CaseStudyContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Case study content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2b2f3b] text-[33px] whitespace-nowrap">Featured Projects</p>
      </div>
      <Projects />
    </div>
  );
}

function FeaturedProjects() {
  return (
    <div id="case-study" className="bg-white content-stretch flex flex-col items-center overflow-clip p-[80px] relative shrink-0 w-full" data-name="Featured Projects">
      <CaseStudyContent />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project Title">
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#121622] text-[19px]">{`Case Study: Trajectra `}</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project summary">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#808080] text-[16px]">A Drone Op Console for generating compliance logs, geofencing, flight planning, etc.</p>
      </div>
      <a href="https://www.behance.net/gallery/237802249/TRAJECTRA" target="_blank" rel="noreferrer" className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full hover:underline decoration-[#14ae5c]" data-name="Link">
        <p className="font-['Poppins:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#14ae5c] text-[16px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Icon">
            <div className="absolute inset-[-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d="M1 11L11 1M11 1H1M11 1V11" id="Icon" stroke="var(--stroke-0, #14AE5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project Title">
        <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#121622] text-[19px]">Case Study: Luna</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full text-center" data-name="Project summary">
        <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#808080] text-[16px]">A Menstrual Wellness Mobile Application.</p>
      </div>
      <a href="https://www.behance.net/gallery/244428089/Luna-A-Menstrual-Wellness-Mobile-Application" target="_blank" rel="noreferrer" className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full hover:underline decoration-[#14ae5c]" data-name="Link">
        <p className="font-['Poppins:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#14ae5c] text-[16px] whitespace-nowrap">Explore</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-up-right">
          <div className="absolute inset-[29.17%]" data-name="Icon">
            <div className="absolute inset-[-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d="M1 11L11 1M11 1H1M11 1V11" id="Icon" stroke="var(--stroke-0, #14AE5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}


function Projects1() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full max-w-[1120px] mx-auto" data-name="Projects">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[548px]" data-name="Case study">
        <div className="aspect-[4096/3072] relative rounded-[24px] shrink-0 w-full" data-name="image 57">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage66} />
        </div>
        <Title5 />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[548px]" data-name="Case study">
        <div className="aspect-[4096/3072] relative rounded-[24px] shrink-0 w-full" data-name="image 57">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage59} />
        </div>
        <Title4 />
      </div>
    </div>
  );
}

function CaseStudyContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Case study content">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2b2f3b] text-[33px] whitespace-nowrap">Case Study</p>
      </div>
      <Projects1 />
    </div>
  );
}

function CaseStudy() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip p-[80px] relative shrink-0 w-full" data-name="Case study">
      <CaseStudyContent1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c1e0900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function CarouseIcon5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="carouse icon">
      <ClipPathGroup5 />
    </div>
  );
}

function CarouseText5() {
  return (
    <div className="content-stretch flex gap-[17px] items-end relative shrink-0" data-name="carouse text">
      <CarouseIcon5 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Web Developer</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c1e0900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function CarouseIcon6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="carouse icon">
      <ClipPathGroup6 />
    </div>
  );
}

function CarouseText6() {
  return (
    <div className="content-stretch flex gap-[17px] items-end relative shrink-0" data-name="carouse text">
      <CarouseIcon6 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Product Design</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c1e0900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group8 />
    </div>
  );
}

function CarouseIcon7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="carouse icon">
      <ClipPathGroup7 />
    </div>
  );
}

function CarouseText7() {
  return (
    <div className="content-stretch flex gap-[17px] items-end relative shrink-0" data-name="carouse text">
      <CarouseIcon7 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">Frontend Engineer</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c1e0900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function CarouseIcon8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="carouse icon">
      <ClipPathGroup8 />
    </div>
  );
}

function CarouseText8() {
  return (
    <div className="content-stretch flex gap-[17px] items-end relative shrink-0" data-name="carouse text">
      <CarouseIcon8 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">UI/UX Design</p>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_40px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c1e0900} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group10 />
    </div>
  );
}

function CarouseIcon9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="carouse icon">
      <ClipPathGroup9 />
    </div>
  );
}

function CarouseText9() {
  return (
    <div className="content-stretch flex gap-[17px] items-end relative shrink-0" data-name="carouse text">
      <CarouseIcon9 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">UX Research</p>
      </div>
    </div>
  );
}

function Carouse1() {
  return (
    <div className="bg-[#101e32] relative shrink-0 w-full overflow-hidden" data-name="Carouse">
      <motion.div 
        className="flex flex-row items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        <div className="content-stretch flex gap-[28px] items-center p-[16px] relative w-max shrink-0">
          
          <CarouseText5 />
          <CarouseText6 />
          <CarouseText7 />
          <CarouseText8 />
          <CarouseText9 />
        
          
          <CarouseText5 />
          <CarouseText6 />
          <CarouseText7 />
          <CarouseText8 />
          <CarouseText9 />
        
        </div>
      </motion.div>
    </div>
  );
}

function Features() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[116px]" data-name="Features">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#02f8cf] text-[16px] whitespace-nowrap">Features</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Text Component2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2b2f3b] text-[24px] whitespace-nowrap">What I do</p>
      </div>
    </div>
  );
}

function Paintbucket() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="paintbucket">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_706)" id="paintbucket">
          <path d={svgPaths.p159d75f0} id="Vector" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p158d9b00} id="Vector_2" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3ee7c900} id="Vector_3" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_4" opacity="0" />
        </g>
        <defs>
          <clipPath id="clip0_1_706">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxLinearPaintbucket() {
  return (
    <div className="absolute contents left-0 top-0" data-name="vuesax/linear/paintbucket">
      <Paintbucket />
    </div>
  );
}

function Paintbucket1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="paintbucket">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_706)" id="paintbucket">
          <path d={svgPaths.p159d75f0} id="Vector" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p158d9b00} id="Vector_2" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3ee7c900} id="Vector_3" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_4" opacity="0" />
        </g>
        <defs>
          <clipPath id="clip0_1_706">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxLinearPaintbucket1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="vuesax/linear/paintbucket">
      <Paintbucket1 />
    </div>
  );
}

function Paintbucket2() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="paintbucket">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_706)" id="paintbucket">
          <path d={svgPaths.p159d75f0} id="Vector" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p158d9b00} id="Vector_2" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3ee7c900} id="Vector_3" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_4" opacity="0" />
        </g>
        <defs>
          <clipPath id="clip0_1_706">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxLinearPaintbucket2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="vuesax/linear/paintbucket">
      <Paintbucket2 />
    </div>
  );
}

function Paintbucket3() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="paintbucket">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_706)" id="paintbucket">
          <path d={svgPaths.p159d75f0} id="Vector" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p158d9b00} id="Vector_2" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3ee7c900} id="Vector_3" stroke="var(--stroke-0, #02F8CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_4" opacity="0" />
        </g>
        <defs>
          <clipPath id="clip0_1_706">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function VuesaxLinearPaintbucket3() {
  return (
    <div className="absolute contents left-0 top-0" data-name="vuesax/linear/paintbucket">
      <Paintbucket3 />
    </div>
  );
}


function CardWrapper() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative shrink-0 w-full" data-name="card wrapper">
      {/* Card 1: Frontend Engineering */}
      <div className="bg-[rgba(250,250,250,0.2)] relative rounded-[16px] shrink-0 flex-1 min-w-[356px] basis-[calc(50%-12px)]" data-name="CARD2">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
          <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/paintbucket">
            <VuesaxLinearPaintbucket1 />
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
            <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2b2f3b] text-[16px] whitespace-nowrap">Frontend Engineering</p>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Component2">
            <div className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.6] min-h-px min-w-px not-italic relative text-[#60646d] text-[16px]">
              <p className="mb-2">I build responsive interfaces with React, JavaScript, HTML, and CSS.</p>
              <p>I Structure reusable components and maintain clean, scalable UI architecture.</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f4f6f5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_24px_64px_2px_rgba(70,74,83,0.1)]" />
      </div>
      
      {/* Card 2: Core Engineering Concepts */}
      <div className="bg-[rgba(250,250,250,0.2)] relative rounded-[16px] shrink-0 flex-1 min-w-[356px] basis-[calc(50%-12px)]" data-name="CARD2">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
          <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/paintbucket">
            <VuesaxLinearPaintbucket3 />
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
            <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2b2f3b] text-[16px] whitespace-nowrap">Core Engineering Concepts</p>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Component2">
            <div className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.6] min-h-px min-w-px not-italic relative text-[#60646d] text-[16px]">
              <p className="mb-2">I manage asynchronous data flows and UI states (loading, error, success).</p>
              <p>I apply component-based design and foundational data structures & algorithms.</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f4f6f5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_24px_64px_2px_rgba(70,74,83,0.1)]" />
      </div>
      
      {/* Card 3: UI/UX & UX Writing */}
      <div className="bg-[rgba(250,250,250,0.2)] relative rounded-[16px] shrink-0 flex-1 min-w-[356px] basis-[calc(50%-12px)]" data-name="CARD2">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
          <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/paintbucket">
            <VuesaxLinearPaintbucket />
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
            <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2b2f3b] text-[16px] whitespace-nowrap">UI/UX & UX Writing</p>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Component2">
            <div className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.6] min-h-px min-w-px not-italic relative text-[#60646d] text-[16px]">
              <p className="mb-2">I design user flows, interaction patterns, and intuitive interfaces.</p>
              <p className="mb-2">I write clear microcopy and system feedback to improve usability.</p>
              <p>I create wireframes and contribute to design systems.</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f4f6f5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_24px_64px_2px_rgba(70,74,83,0.1)]" />
      </div>
      
      {/* Card 4: APIs & Data Handling */}
      <div className="bg-[rgba(250,250,250,0.2)] relative rounded-[16px] shrink-0 flex-1 min-w-[356px] basis-[calc(50%-12px)]" data-name="CARD2">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-full">
          <div className="relative shrink-0 size-[24px]" data-name="vuesax/linear/paintbucket">
            <VuesaxLinearPaintbucket2 />
          </div>
          <div className="content-stretch flex items-center relative shrink-0" data-name="Text Component2">
            <p className="font-['Poppins:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#2b2f3b] text-[16px] whitespace-nowrap">APIs & Data Handling</p>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Component2">
            <div className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[1.6] min-h-px min-w-px not-italic relative text-[#60646d] text-[16px]">
              <p className="mb-2">I integrate REST APIs and handle dynamic data rendering.</p>
              <p>I implement error handling and fallback states for reliability.</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f4f6f5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_24px_64px_2px_rgba(70,74,83,0.1)]" />
      </div>
    </div>
  );
}

function WhatFeatures() {
  return (
    <div className="relative shrink-0 w-full" data-name="what features">
      <div className="content-stretch flex flex-col gap-[40px] items-start pb-[80px] pt-[40px] px-[80px] relative w-full">
        <Features />
        <CardWrapper />
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-center overflow-clip relative shrink-0 w-full" data-name="Features section">
      <Carouse1 />
      <WhatFeatures />
    </div>
  );
}

function SectioWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-0 items-start relative shrink-0 w-full z-[1]" data-name="sectio wrapper">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-16 size-full" src={imgSectioWrapper} />
      </div>
      <HeroSection />
      <AboutSection />
      <LiveProject />
      <FeaturedProjects />
      <CaseStudy />
      <FeaturesSection />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#101e32] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-center gap-[40px] px-[80px] py-[60px] relative w-full">
        {/* Brand Name */}
        <div className="content-stretch flex items-center relative shrink-0">
          <h2 className="font-['Poppins:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-white text-[28px] whitespace-nowrap">Blessing Kadiri</h2>
        </div>
        
        {/* Social Icons */}
        <div className="content-start flex gap-[20px] items-center relative shrink-0">
          <a 
            href="https://www.linkedin.com/in/blessing-o-kadiri" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white relative rounded-full shrink-0 size-[48px] flex items-center justify-center hover:bg-[#02F8CF] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#101e32]">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          
          <a 
            href="https://github.com/Blessingdevdesign25/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white relative rounded-full shrink-0 size-[48px] flex items-center justify-center hover:bg-[#02F8CF] transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#101e32]">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          
          <a 
            href="https://wa.me/2348108783006" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white relative rounded-full shrink-0 size-[48px] flex items-center justify-center hover:bg-[#02F8CF] transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#101e32]">
              <path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a0 0 0 0 0 0 0"/>
              <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a0 0 0 0 0 0 0"/>
              <path d="M15 14c-.5-1-1.5-2-3-2s-2.5 1-3 2"/>
            </svg>
          </a>
          
          <a 
            href="mailto:blessing.kadiri@example.com" 
            className="bg-white relative rounded-full shrink-0 size-[48px] flex items-center justify-center hover:bg-[#02F8CF] transition-colors duration-300"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#101e32]">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          
          <a 
            href="https://www.behance.net/blessingokadiri" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white relative rounded-full shrink-0 size-[48px] flex items-center justify-center hover:bg-[#02F8CF] transition-colors duration-300"
            aria-label="Behance"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#101e32]">
              <path d="M6.5 14.875c1.375 0 2.125-.875 2.125-2s-.75-2-2.125-2H3.75v4h2.75zm-.125-6.5c1.125 0 1.875-.75 1.875-1.75S7.5 4.875 6.375 4.875H3.75v3.5h2.625zM1.5 2.875h5c2.625 0 4.5 1.625 4.5 4 0 1.375-.625 2.5-1.75 3.25 1.5.625 2.5 2.125 2.5 3.875 0 2.75-2.125 4.5-4.75 4.5h-5.5v-15.625zm13.75 3.75h6.5v-1.5h-6.5v1.5zm5.875 4.75c-.125-1.375-1-2.375-2.375-2.375-1.5 0-2.5 1.125-2.625 2.375h5zm-5.125 1.5c.25 1.5 1.375 2.375 2.75 2.375 1 0 1.875-.5 2.375-1.375h2.375c-.75 2.25-2.75 3.625-4.875 3.625-3 0-5.125-2.125-5.125-5.125s2.125-5.125 5.125-5.125c3.125 0 5.125 2.25 5.125 5.375v.25h-7.75z"/>
            </svg>
          </a>
        </div>
        
        {/* Copyright */}
        <div className="content-stretch flex items-center relative shrink-0">
          <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-white/70 text-[14px] whitespace-nowrap">
            Copyright © Blessing Kadiri
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start relative size-full" data-name="Portfolio2">
      <Navbar />
      <SectioWrapper />
      <Footer />
    </div>
  );
}