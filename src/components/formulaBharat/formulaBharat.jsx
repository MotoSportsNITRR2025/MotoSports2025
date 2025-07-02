import React, { useState } from 'react';

import './fbStyles.css';

import TextShpere from '../eBaja-FB-essentials/textSphere/textSpehere';
import Ourcar from '../eBaja-FB-essentials/car-perfoma/car-perfoma';
import Phases from '../eBaja-FB-essentials/phases/phases';
import Team from '../eBaja-FB-essentials/team/fbFiles/fbTeam';
import phases from './phases.json'

//Descrition
function Description() {
  return (
    <div className='  flex flex-col  justify-center items-center h-800'>
      <h1 className=' font-albulaHeavy text-center text-7xl ml-10 text-amber-800 mb-10 mt-10'>Formula Bharat</h1>
      <p className='w-4/5 ml-10  text-gray-600'>
        <span className="text-red-700"> Formula Bharat is an Indian Formula Student-style </span>
        engineering design competition in which students from colleges and universities all over the country, compete with a life-size formula-style vehicle in areas of engineering design, overall cost, marketability and dynamic performance. The series replicates the global student Formula series hosted in around
        <span className="text-red-700"> 11 countries  </span> per year.
        The purpose of this competition is to encourage students to gain hands-on practical experience, while applying engineering theories studied in the classroom. In addition, students learn the art of management and teamwork, which are essential skills required in the
        <span className="text-red-700"> real world. </span> These student teams are required to build a new vehicle from scratch year-after-year and seek sponsorship and donations by their own means to fund the project.
      </p>
    </div>

  )
}

function App() {
  const texts = [
    "Power",
    "KTM 390",
    "43 bsp",
    "9500 RPM",
    "Torque",
    "Acceleration",
    "R13",
    "140 km/h",
    "AISI 1018",
    "Brakes",
    "Phase 1",
    "FB",
    "Formula-1",
    "f-bharat",
    "Chassis",
  ];

  const events = [
    {
      subHeading: "KTM 390 (2013)",
      heading: "Engine",
      direction: "left"

    },
    {
      subHeading: "140 km/h",
      heading: "Top Speed",
      direction: "right"

    },
    {
      subHeading: "43 bsp at 9500 rpm",
      heading: "Power",
      direction: "left"

    },
    {
      subHeading: "AISI 1018",
      heading: "Material of chassis",
      direction: "right"

    },
    {
      subHeading: "250 kg",
      heading: "Weight",
      direction: "left"
    },
    {
      subHeading: "R13",
      heading: "Tyres",
      direction: "right"

    },

  ]

  return (
    <>
      <main className=' fbPage flex flex-col justify-between items-center bg-modestBrown'>
        <div id='introDiv' className="w-85vw mt-10">
          <div className="fbFront flex xl:-mt-28 justify-evenly">
            <TextShpere texts={texts} />
            <Description />
          </div>

          <Phases events={phases} /> 

          <h1 className='font-albulaHeavy text-amber-900 text-7xl   flex justify-center items-center pb-28 pt-36'>OUR CAR</h1>
          <Ourcar events={events}  />

          <div className="FB_Team">
            <Team  />
          </div>
        </div>
      </main>
    </>
  )
}

export default App;