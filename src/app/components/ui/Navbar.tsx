import React from "react";
import imgImage1 from "figma:asset/1aa0ad57739dff34e69790bf305718039bcc09dd.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#101e32]/90 border-b border-white/10 shadow-lg">
      <div className="max-w-[1280px] mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
        
        {/* Profile Image / Logo */}
        <div className="h-[60px] w-[60px] relative rounded-full shrink-0 overflow-hidden border border-[#02f8cf]/30 ring-2 ring-[#02f8cf]/10">
          <img 
            alt="Profile" 
            className="absolute h-[118.09%] left-[-27.11%] max-w-none top-[-13.32%] w-[148.53%] object-cover" 
            src={imgImage1} 
          />
        </div>

        {/* Links */}
        <div className="flex gap-[40px] items-center">
          <a 
            href="#case-study" 
            className="group flex gap-[6px] items-center text-white/80 hover:text-[#02f8cf] transition-all duration-300 font-['Poppins:Regular',sans-serif] text-[16px]"
          >
            Case Study
            <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a 
            href="#projects" 
            className="group flex gap-[6px] items-center text-white/80 hover:text-[#02f8cf] transition-all duration-300 font-['Poppins:Regular',sans-serif] text-[16px]"
          >
            Projects
            <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* CTA */}
        <a 
          href="mailto:blessingkadiri21@gmail.com"
          className="bg-[#02f8cf] hover:bg-[#02d1af] transition-colors duration-300 flex gap-[6px] items-center justify-center px-[24px] py-[12px] rounded-full shadow-[0_0_15px_rgba(2,248,207,0.3)] hover:shadow-[0_0_25px_rgba(2,248,207,0.5)] transform hover:-translate-y-0.5"
        >
          <span className="font-['Poppins:Medium',sans-serif] text-[#101e32] text-[16px]">Contact Me</span>
          <svg className="w-[18px] h-[18px] text-[#101e32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>

      </div>
    </nav>
  );
}
