/**
 * OPTIMIZED CONTACT PAGE
 * 
 * Changes:
 * - Add loading="lazy" to all sponsor images
 * - Use LazyImage component for sponsor logos
 * - Lazy load all images instead of eager loading
 */

import "../globalStyles.css";
import { LazyImage } from '../common/LazyImageComponents';
import car from '/assets/logos/sponsors/carShringar.png';
import gulf from '/assets/logos/sponsors/gulf.png';
import gravity from '/assets/logos/sponsors/gravityWorkshopSVG.svg';
import solidworks from '/assets/logos/sponsors/solidworksSVG.svg';
import ansys from '/assets/logos/sponsors/ansys.png';
import lotus from '/assets/logos/sponsors/lotus.png';
import ContactForm from './contactForm';

function Contact() {
	return (
		<>
			<div style={{width: "100%", backgroundColor:"var(--modestbrown)"}} className='flex flex-col justify-center items-stretch'>
				<div className="w-full flex justify-center">
					<div className="w-85vw flex flex-col text-center mt-24 pb-20 items-center">
						<div className="sm:text-5xl text-3xl font-brushKing px-4 text-blackbean">Message To Sponsors</div>
						<div className="max-w-7xl font-albula text-lg text-[#5d3a33] text-center sm:text-lg pt-6 sm:px-12 text-md px-4 mt-7">At the Motorsports Club of NIT Raipur, we are driven by passion, innovation, and excellence in automotive engineering. Our team comprises talented and dedicated students who consistently push the boundaries of design and performance. By sponsoring us, you will be aligning your brand with future leaders in technology and engineering, gaining visibility at national and international competitions. Your support will not only help us enhance our vehicle designs and performance but also foster the development of critical skills in our members. Together, we can pave the way for groundbreaking advancements in motorsports. Join us in this exhilarating journey and be a part of our success story.</div>

						<a href="https://drive.google.com/file/d/1O17bcGZmEcvGEGEfKBwF5a0UOLpJmiGm/view?pli=1">
							<button className="py-3 px-5 text-lg font-bold bg-tawny hover:bg-orange-600 rounded-md text-white font-albula transition-all mt-10">Download our Brochure</button>
						</a>
					</div>
				</div>

				<div className=" flex flex-col items-center md:py-28 md:px-40  py-28">
					<div className="w-full text-3xl flex justify-center font-brushKing italic text-amber-500">
						<p className="mb-10">
							TITLE SPONSOR
						</p>
					</div>

					<div className=" ">
						{/* ✅ OPTIMIZED: Use LazyImage instead of <img> */}
						<LazyImage
							src={gravity}
							alt="Gravity Workshop Logo"
							className=" md:h-52 px-4"
						/>
					</div>

					<p className="max-w-7xl font-albula text-lg text-[#5d3a33] text-center sm:text-lg pt-6 sm:px-12 text-md px-4 mt-7">The primary objective of this workshop is to provide bespoke car customization based on customer requirements. Our comprehensive services include mechanical work, air conditioning maintenance, dent and paint repair, electrical work, and a variety of modifications. We are dedicated to delivering high-quality, personalized solutions to ensure each vehicle meets the unique preferences and standards of our clients.</p>
				</div>

				<div className='flex flex-col text-center mt-20 mb-10'>
					<p className='font-brushKing sm:text-4xl text-3xl italic text-amber-600'>GOLD SPONSOR</p>
					<div className=" flex md:flex-row flex-col md:justify-evenly items-center py-8 gap-5">
						<div className="">
							{/* ✅ OPTIMIZED: Lazy load sponsor logos */}
							<LazyImage
								src={car}
								alt="Car Shringar"
								className="h-40"
								loading="lazy"
							/>
							<p className="text-2xl pt-5 font-albulaHeavy mt-5">Car Shringar</p>
						</div>

						<div className="">
							{/* ✅ OPTIMIZED: Lazy load sponsor logos */}
							<LazyImage
								src={gulf}
								alt="Gulf Oil"
								className="h-40"
								loading="lazy"
							/>
							<p className="text-2xl pt-5 font-albulaHeavy mt-5">Gulf Oil</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col text-center justify-center gap-8 pt-10 mt-20 '>
					<p className='font-brushKing sm:text-4xl text-3xl italic text-amber-700'>SOFTWARE PARTNERS</p>
					<div className="flex md:flex-col flex-col gap-8">
						<div className='flex flex-col md:flex-row items-center justify-evenly gap-10'>
							<div className="">
								{/* ✅ OPTIMIZED: Lazy load large software logos */}
								<LazyImage
									src={solidworks}
									alt="Solidworks"
									className=" px-4"
									loading="lazy"
									style={{width: "500px"}}
								/>
								<p className="text-2xl font-albulaHeavy mt-5">Solid Works</p>
							</div>

							<div className="">
								{/* ✅ OPTIMIZED: Lazy load large software logos */}
								<LazyImage
									src={ansys}
									alt="Ansys"
									className=""
									loading="lazy"
									style={{width: "500px"}}
								/>
								<p className="text-2xl font-albulaHeavy mt-5">Ansys</p>
							</div>
						</div>

						<div className="flex flex-col items-center">
							{/* ✅ OPTIMIZED: Lazy load Lotus logo */}
							<LazyImage
								src={lotus}
								alt="Lotus"
								className=" size-60 md:size-36"
								style={{width: "200px"}}
								loading="lazy"
							/>
							<p className="text-2xl font-albulaHeavy mt-5">Lotus</p>
						</div>
					</div>
				</div>

			
				<div className="flex justify-center mt-20 px-20">
					<ContactForm/>
				</div>
			</div>
		</>
	)
}

export default Contact
