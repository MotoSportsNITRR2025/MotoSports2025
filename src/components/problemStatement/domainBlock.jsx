import React from 'react'

function Arrow(){
  return (
    <svg width="30" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <g stroke="oklch(57.7% 0.245 27.325)" 
     stroke-width="4" 
     stroke-linecap="butt"
     stroke-linejoin="miter"
     fill="none">
    
    <line x1="8" y1="20" x2="26" y2="20" />
    
    <line x1="20" y1="12" x2="30" y2="21.5" />
    <line x1="20" y1="28" x2="30" y2="19.5" />
    
  </g>
</svg>
  )
}

function DomainBlock(props) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      
      {/* <div className="
        w-full max-w-[18rem] h-full min-h-[220px] max-h-[220px] p-3 sm:p-4 rounded-xl border-2 border-[#621b00]
        bg-[#a9a298] text-white text-center
        shadow-[0px_0px_0px_#621b00]
        transition-all duration-300 ease-in-out
        flex flex-col
        
        hover:scale-105
        hover:shadow-[0px_0px_20px_#c75000ff]
        hover:bg-[#ffa970]
        hover:text-[#2f1000ff]
        hover:border-[#4b2c00]
      ">
        
        <h2 className="text-lg sm:text-xl font-bold mb-2">
          {props.domain}
        </h2>
        
        <p className="text-sm opacity-90 mb-3 sm:mb-4 flex-1 overflow-y-auto" style={{ color: '#2f1000ff' }}>
            {props.description}
        </p>

        <button className="
          px-3 py-1.5 rounded-md text-xs sm:text-sm mt-auto
          bg-[#945600] text-[#fff1de] font-medium
          transition-all duration-300
          
          hover:bg-[#621b00]
          hover:scale-105
          hover:shadow-md
        "
        onClick={() => window.open(props.link, '_blank')}>
            View Details
        </button>

      </div> */}
      <div class="border-r border-b border-outline-variant/20 p-10 hover:bg-[#f8c986] transition-all duration-300 group hover:shadow-[0px_0px_10px_#000000ff] ">
<div class="flex justify-between items-start mb-12">
<span class="font-headline text-[11px] font-black text-red-600 tracking-widest text-secondary">{props.title}</span>
<span class="material-symbols-outlined text-primary opacity-20 group-hover:opacity-100 transition-opacity">{props.icon}</span>
</div>
<h3 class="font-headline text-2xl font-bold mb-4 text-primary">{props.domain}</h3>
<p class="font-body text-on-surface-variant mb-10 leading-relaxed min-h-[80px]">
                        {props.description}
                    </p>
<button class="font-headline text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] text-secondary flex items-center gap-3 group-hover:gap-5 transition-all" onClick={() => window.open(props.link, '_blank')}>
                        VIEW DETAILS <Arrow />
</button>
</div>

    </div>
  )
}

export default DomainBlock