import React from 'react'
import DomainBlock from './domainBlock'

const descriptions=[
  "Dive into the mechanics of combustion engines and build systems that deliver raw power and performance.",
  "Shape the future of mobility by designing efficient, high-performance electric drivetrains.",
  "Engineer precision braking systems that ensure safety, control, and confidence at every speed.",
  "Construct strong and lightweight chassis structures that form the foundation of the entire vehicle.",
  "Create responsive steering systems that translate driver intent into perfect control on the track.",
  "Design systems that absorb shocks, maximize grip, and keep the vehicle stable on any terrain."
]
const links=["https://drive.google.com/file/d/16zt23g8Z1LUAlgchDS965guUiQrikQ3a/view?usp=sharing",
    "https://drive.google.com/file/d/1smSmnODY5WjP7Gk6vNOIC2CxRiQjRJyJ/view?usp=sharing",
    "https://drive.google.com/file/d/187Iu4sQfYhsUozjRxUJSjTMEk9mV7oMF/view?usp=sharing",
    "https://drive.google.com/file/d/16FlPZ1fOWjfLym96kLRtsiqtisHniH-H/view?usp=sharing",
    "https://drive.google.com/file/d/1NuiLyB_qX9GmPLMQU-z1NTOc0_ZhODxn/view?usp=sharing",
    "https://drive.google.com/file/d/1Z_40RwqsJXmU5rukktf6uylDQWKSMuRx/view?usp=sharing"
]

const icons=["speed","bolt","settings","build","control_camera","tune"]

const titles=["| PT-CV","| PT-EV","| BRAKES","| FRAMES","| STEERING","| SUSPENSION"]

function ProblemStatements() {
  return (
    <>
  <main className='aboutPage min-h-screen bg-modestBrown flex flex-col items-center px-4 sm:px-6 lg:px-10 pt-2 sm:pt-4 pb-8 sm:pb-10'>
    

    <div className='w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-4'>
            <DomainBlock domain="Powertrain CV" description={descriptions[0]} link={links[0]} icon={icons[0]} title={titles[0]} />
            <DomainBlock domain="Powertrain EV" description={descriptions[1]} link={links[1]} icon={icons[1]} title={titles[1]} />
            <DomainBlock domain="Brakes" description={descriptions[2]} link={links[2]} icon={icons[2]} title={titles[2]} />
            <DomainBlock domain="Frames" description={descriptions[3]} link={links[3]} icon={icons[3]} title={titles[3]} />
            <DomainBlock domain="Steering" description={descriptions[4]} link={links[4]} icon={icons[4]} title={titles[4]} />
            <DomainBlock domain="Suspension" description={descriptions[5]} link={links[5]} icon={icons[5]} title={titles[5]} />
        </div>
        
        <div
          class="mt-10 sm:mt-14 lg:mt-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 bg-on-surface text-surface relative overflow-hidden bg-[#181919] text-[#faf9f8]"
        >
          <div class="absolute inset-0 opacity-10 mix-blend-overlay">
            <img
              class="w-full h-full object-cover"
              data-alt="Abstract macro shot of carbon fiber texture with dramatic studio lighting and sharp diagonal lines"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtfo6Xmdgi2RkwLQKDMMxb4hRaUOjx4pDhlpPwqhMLebGkn6sjWgeFBmZ6aBtBz_7ZhsRTo6p4w4FYdWFjrkZoc9N2DExFqfIdxInEWCz7gujNVI2jj9fscOmqD6ZEguijBf4TQGQAG_fBuczTzf9ifptVUlWbpSRx1NXWYJwXAoRcJDKtmhh_RJnkq221fi2zBB3f2HZwh8nZ4DhmedLGVLuEZz_2f9XR-PdAD3CskYxKBM6IF2mw-QixEh-NsxbnYcL2a1ZGdA"
            />
          </div>
          <div class="relative z-10 max-w-xl ">
            <h2
              class="text-4xl font-headline font-black uppercase tracking-tighter mb-4 italic"
            >
              Ready to fuel the mission?
            </h2>
            <p class="text-surface-container-high opacity-80 font-body">
              Join the elite creative operations squad. Your strategic input is
              the aerodynamic edge we need on the track.
            </p>
          </div>
          <div class="w-full md:w-auto flex flex-col gap-3 sm:gap-4 md:gap-5">
            <button
            class="relative z-10 custom-gradient-btn w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-on-primary font-headline font-black uppercase tracking-tighter text-base sm:text-lg lg:text-xl scale-100 hover:scale-105 transition-all active:scale-95 whitespace-nowrap bg-[#9e491b]"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeBEEKJgEPjNllB02AuakxTrmac0thLxXgpw1GTh3DkijY4uw/viewform', '_blank')}>
            Submit Tech Entry →
          </button>
          <button
            class="relative z-10 custom-gradient-btn w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-on-primary font-headline font-black uppercase tracking-tighter text-base sm:text-lg lg:text-xl scale-100 hover:scale-105 transition-all active:scale-95 whitespace-nowrap bg-[#9e491b]"
          onClick={() => window.open('https://forms.gle/5ZyACpYkMNYR6CGq9', '_blank')}>
            Submit Non-Tech Entry →
          </button>
          </div>
          
        </div>
        
    </main>
    </>
  )
}

export default ProblemStatements
