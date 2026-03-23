import React from 'react'
import DomainBlock from './domainBlock'

const descriptions=[
  "Dive into the mechanics of combustion engines and build systems that deliver raw power and performance.",
  "Shape the future of mobility by designing efficient, high-performance electric drivetrains.",
  "Engineer precision braking systems that ensure safety, control, and confidence at every speed.",
  "Design systems that absorb shocks, maximize grip, and keep the vehicle stable on any terrain.",
  "Create responsive steering systems that translate driver intent into perfect control on the track.",
  "Construct strong and lightweight chassis structures that form the foundation of the entire vehicle."
]
const links=["https://drive.google.com/file/d/1UtNuzAtDF_XGAKmX3yHNjAdg2x2BKpqM/view?usp=sharing",
    "https://drive.google.com/file/d/1B0OkZ0Fdtf-vpZ0K7k48EZhKvT2xipZC/view?usp=sharing",
    "https://drive.google.com/file/d/1z-bS3YmlWSnwTYZX0vvVqzbapQs_gH5w/view?usp=drive_link",
    "https://drive.google.com/file/d/1avy1Ovyv1IbFKcpm2kXwbLrNrsuWzst5/view?usp=sharing",
    "https://drive.google.com/file/d/1syxyCt-a_s8aB-rDSDbGCxnaVI1sh74-/view?usp=sharing",
    "https://drive.google.com/file/d/1aXLQglTSIbkSxBZz8_AZfqms3-lnPhQy/view?usp=sharing"
]

function ProblemStatements() {
  return (
    <>
  <main className='aboutPage min-h-screen bg-modestBrown flex flex-col items-center px-4 sm:px-6 lg:px-10 pt-2 sm:pt-4 pb-8 sm:pb-10'>
    

    <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-4'>
            <DomainBlock domain="Powertrain CV" description={descriptions[0]} link={links[0]} />
            <DomainBlock domain="Powertrain EV" description={descriptions[1]} link={links[1]} />
            <DomainBlock domain="Brakes" description={descriptions[2]} link={links[2]} />
            <DomainBlock domain="Frames" description={descriptions[3]} link={links[3]} />
            <DomainBlock domain="Steering" description={descriptions[4]} link={links[4]} />
            <DomainBlock domain="Suspension" description={descriptions[5]} link={links[5]} />
        </div>
        <div className="w-full max-w-7xl mx-auto my-6 text-center">
  
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#621b00] to-transparent"></div>
            
            <div className="group relative px-8 py-4 cursor-pointer">
        

        {/* Text */}
        <p className="py-4 text-lg font-semibold tracking-wide text-[#621b00] 
                      transition-all duration-300 
                      group-hover:tracking-widest group-hover:text-[#c75000]"
                      onClick={() => window.open('https://forms.gle/9sz7pUGvK7A1NLiN6', '_blank')}>
          Submit Here →
        </p>

        {/* Background glow on hover */}
        <div className="absolute inset-0 -z-10 opacity-0 
                        bg-[#fff1de] blur-md 
                        transition-all duration-300 
                        group-hover:opacity-100"></div>

        </div>
            
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#621b00] to-transparent"></div>

        </div>
        
    </main>
    </>
  )
}

export default ProblemStatements