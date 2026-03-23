import '../globalStyles.css'
import './homeStyles.css';
import React from 'react';
import CountUp from 'react-countup';
import SpeedBanner from './speedBanner/speedBanner';
import carImgOne from '/assets/images/finalizedCarImg/homeCarOne.png'
import carImgTwo from '/assets/images/finalizedCarImg/homeCarTwo.png'
import TrophyOne from '/assets/svg/trophyOne.svg';
import TrophyThree from '/assets/svg/trophyThree.svg';
import StarOne from '/assets/svg/starOne.png';
import StarTwo from '/assets/svg/starTwo.png';
import SponsorOno from '/assets/logos/sponsors/looksSalon.png';
import SponsorTwo from '/assets/logos/sponsors/gravityWorkshop.png';
import SponsorThree from '/assets/logos/sponsors/carDecor.png';

import Img_1 from '/assets/images/carImages/carImg_1.jpg';
import Img_2 from '/assets/images/carImages/carImg_2.jpg';
import Img_3 from '/assets/images/carImages/carImg_3.jpg';
import Img_4 from '/assets/images/carImages/carImg_4.jpg';
import Img_5 from '/assets/images/carImages/carImg_5.jpg';
import Img_6 from '/assets/images/carImages/carImg_6.jpg';
import Img_7 from '/assets/images/carImages/carImg_7.jpg';
import Img_8 from '/assets/images/carImages/carImg_8.jpg';
import Img_9 from '/assets/images/carImages/carImg_10.jpg';
import Img_10 from '/assets/images/carImages/carImg_11.jpg';
import Img_11 from '/assets/images/carImages/carImg_12.jpg';
import Img_12 from '/assets/images/carImages/carImg_13.jpg';
import Img_13 from '/assets/images/carImages/carImg_14.jpg';
import Img_14 from '/assets/images/carImages/carImg_15.jpg';
import Img_15 from '/assets/images/carImages/carImg_16.jpg';
import Img_16 from '/assets/images/carImages/carImg_17.jpg';
import Img_17 from '/assets/images/carImages/carImg_18.jpg';
import popupIMG from './popupImg.png';

const images = [Img_1, Img_2, Img_3, Img_4, Img_5, Img_6, Img_10, Img_11, Img_13, Img_15, Img_16, Img_17];

function Home() {
    const [showProblemPopup, setShowProblemPopup] = React.useState(true);

    return (
        <>
            {showProblemPopup && (
                <div className='fixed inset-0 z-[70] bg-black/55 flex items-center justify-center px-4'>
                    <div className='relative w-full max-w-2xl'>
                        <button
                            type='button'
                            aria-label='Close problem statement banner'
                            onClick={() => setShowProblemPopup(false)}
                            className='absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-dustyWhite text-blackbean text-2xl leading-none shadow-md'
                        >
                            ×
                        </button>

                        <a href='/problemStatements' className='block'>
                            <img
                                src={popupIMG}
                                alt='Open Problem Statement Page'
                                className='w-full rounded-2xl border-4 border-sealbrown bg-dustyWhite shadow-xl cursor-pointer'
                            />
                        </a>
                    </div>
                </div>
            )}

            <main className='flex flex-col justify-between items-center bg-modestBrown'>
                <div id='introDiv' className="w-85vw flex flex-col justify-between items-center lg:flex-row lg:justify-evenly lg:items-center box-border lg:top-32">
                    <div id='introTextDiv' className='flex flex-col justify-evenly items-center sm:px-6 sm:py-2 w-full sm:w-550px md:w-full lg:w-400px 1.5lg:px-6 1.5lg:py-6 1.5lg:w-475px xl:w-625px 2xl:w-700px h-500'>
                        <div id='introHeading' className='w-full text-4xl sm:text-5xl xl:text-6xl font-albulaHeavy text-blackbean'>Official <br />
                            <span className="text-tawny">Motosports Club</span> of <br />
                            <span className="text-tawny">NIT, Raipur</span>
                            <p className='text-base sm:text-xl font-poppins font-medium mt-4 text-mutedBlack'>Unleashing Adrenaline: The Heart-Pounding World of Motorsport!</p>
                        </div>

                        <div id='introStatDiv' className='flex justify-between items-start w-full lg:mr-7 xl:mr-16'>
                            <div id='statBlockOne' className=' flex flex-col justify-between items-center w-150'>
                                <p className='font-poppins font-bold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl text-brown'>
                                    <CountUp start={0} end={85} duration={4} delay={0}></CountUp>
                                    <span>+</span>
                                </p>
                                <p className='font-poppins text-base sm:text-xl text-blackbean text-center'>team members</p>
                            </div>
                            <div id='statBlockTwo' className=' flex flex-col justify-between items-center w-150'>
                                <p className='font-poppins font-bold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl text-brown'>
                                    <CountUp start={0} end={1000} duration={3} delay={0}></CountUp>
                                    <span>+</span>
                                </p>
                                <p className='font-poppins text-base sm:text-xl text-blackbean text-center'>hours of hardwork</p>
                            </div>
                            <div id='statBlockThree' className='flex flex-col justify-between items-center w-150'>
                                <p className='font-poppins font-bold text-2xl sm:text-4xl lg:text-3xl xl:text-4xl text-brown'>
                                    <CountUp start={0} end={10} duration={3.5} delay={0}></CountUp>
                                    <span>+</span>
                                </p>
                                <p className='font-poppins text-base sm:text-xl text-blackbean text-center'>years of experience</p>
                            </div>
                        </div>
                    </div>

                    <img src={carImgOne} alt="Motosport Car Image One" className='px-2 py-2 w-500px lg:w-475px xl:w-550px 2xl:w-675px 1.6xl:w-700px xl:px-5 xl:py-5' />
                </div>

                <div id='speedBannerHolder' className='mt-0 md:-mt-20 z-10'>
                    <SpeedBanner />
                </div>

                <div id='aboutSection' className='w-85vw flex flex-col xl:flex-row justify-evenly items-center'>
                    <img src={carImgTwo} alt="Car Image - 2" className='w-full md:w-4/5 xl:w-700px transition-all'/>
                    <div id='about_textSection' className='text-center xl:w-650'>
                        <h1 className='font-albulaHeavy text-5xl text-blackbean mt-10'>Who Are We?</h1>
                        <div class="fade_rule mt-4 mb-4 w-2/5"></div>
                        <p className='font-albula text-lg text-sealbrown mt-5'>Motorsports at NIT Raipur is a dynamic club dedicated to advancing automotive technology and racing. With a strong record of participation and success in competitions, we showcase our skills and passion, establishing ourselves as leaders in India's automotive sector. Join us to pursue your passions and demonstrate your abilities on a larger stage. Experience the thrill with NIT Raipur Motorsports!</p>
                    </div>
                </div>

                <div id='achievementSection' className='mt-40 w-85vw'>
                    <h1 className='flex flex-col justify-center items-center'>
                        <h1 className='text-center font-albulaHeavy text-3xl sm:text-4xl lg:text-5xl text-blackbean'>Achievement's</h1>
                        <div className="fade_rule mt-4 mb-4 w-2/5"></div>
                        <p className='font-albula text-lg text-center w-full xl:w-3/4 mt-2'>The NIT Raipur Motorsports Club has a distinguished record of accomplishments in the field of collegiate motorsports. Our team has consistently excelled in prestigious competitions such as Formula Bharat, where we showcase our engineering innovation and skill.</p>
                    </h1>
                    <div className='h-auto px-5 py-5 flex justify-center items-center flex-wrap gap-7 box-border mt-7'>
                        <div id='achievementCardOne' className='w-[325px] h-[400px] rounded-2xl flex flex-col justify-evenly items-center px-5 py-5 bg-dustyWhite shadow-md hover:shadow-xl hover:scale-105 transition-all'>
                            <img src={TrophyOne} alt="trophy"  className='w-[125px]'/>
                            <div id='achievement_cardDataOne' className='w-full text-center'>
                                <h1 className='font-albula text-2xl'>Quad Torc 2017</h1>
                                <h1 className='font-albulaBold text-3xl mt-3'>Overall Rank 3rd</h1>
                                <p className='font-albula text-lg mt-2'>Maneuverability  test</p>
                            </div>
                        </div>

                        <div id='achievementCardTwo' className='w-[325px] h-[400px] rounded-2xl flex flex-col justify-evenly items-center px-5 py-5 bg-dustyWhite shadow-md hover:shadow-xl hover:scale-105 transition-all'>
                            <img src={TrophyThree} alt="trophy"  className='w-[130px]'/>
                            <div id='achievement_cardDataOne' className='w-full text-center'>
                                <h1 className='font-albula text-2xl'>Quad Torc 2016</h1>
                                <h1 className='font-albulaBold text-3xl mt-3'>Overall Rank 4th</h1>
                                <p className='font-albula text-lg mt-2'>Business Plan</p>
                            </div>

                        </div>

                        <div id='achievementCardThree' className='w-[325px] h-[400px] rounded-2xl flex flex-col justify-evenly items-center px-5 py-5 bg-dustyWhite shadow-md hover:shadow-xl hover:scale-105 transition-all'>
                            <img src={StarTwo} alt="trophy"  className='w-[130px]'/>
                            <div id='achievement_cardDataOne' className='w-full text-center'>
                                <h1 className='font-albula text-2xl'>SAE Supra 2016</h1>
                                <h1 className='font-albulaBold text-3xl mt-3'>Overall Rank 61</h1>
                                <p className='font-albula text-lg mt-2'>out of 251 colleges</p>
                            </div>
                        </div>

                        <div id='achievementCardFour' className='w-[325px] h-[400px] rounded-2xl flex flex-col justify-evenly items-center px-5 py-5 bg-dustyWhite shadow-md hover:shadow-xl hover:scale-105 transition-all'>
                            <img src={StarOne} alt="trophy"  className='w-[130px]'/>
                            <div id='achievement_cardDataOne' className='w-full text-center'>
                                <h1 className='font-albula text-2xl'>SAE Baja 2016</h1>
                                <h1 className='font-albulaBold text-3xl mt-3'>Overall Rank 63</h1>
                                <p className='font-albula text-lg mt-2'>out of 200 colleges</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='speedBannerHolder' className='w-85vw mt-32'>
                    <h1  className='text-center font-albulaHeavy text-3xl sm:text-4xl lg:text-5xl text-blackbean'>Image Gallery</h1>

                    <div class="fade_rule mt-4 mb-4 w-2/5"></div>

                    <div className='mt-10'>
                        <div className="image-grid">
                            {images.map((image, index) => (
                                <div key={index} className="image-container">
                                    <img src={image} alt={`Image ${index + 1}`} className="image" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id='sponsorSection' className='w-85vw mt-32 mb-10'>
                    <h1  className='text-center font-albulaHeavy text-3xl sm:text-4xl lg:text-5xl text-blackbean'>Our Sponsors</h1>
                    <div class="fade_rule mt-4 mb-4 w-1/3"></div>
                    
                    <div className='mt-10'>
                        <div id='sponsorSection' className='w-98vw flex flex-col lg:flex-row lg:flex-wrap justify-evenly items-center gap-10'>
                            <img src={SponsorOno} alt="Looks Salon" className='w-48'/>
                            <img src={SponsorTwo} alt="Looks Salon" className='w-full lg:w-96'/>
                            <img src={SponsorThree} alt="Looks Salon" className='w-full lg:w-96'/>
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    )
}
  
export default Home