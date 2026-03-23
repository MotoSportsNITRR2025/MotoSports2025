import React from 'react'

function DomainBlock(props) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      
      <div className="
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

      </div>

    </div>
  )
}

export default DomainBlock