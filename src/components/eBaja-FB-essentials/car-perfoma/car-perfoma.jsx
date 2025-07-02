import React, { Fragment, useEffect, useState } from 'react';

import Timeline from '../timeline/timeline';

import '@google/model-viewer'; 


//Ourcar
/*
function Ourcar({events, img}) {

    return (
        <div className="flex car-perfoma" >
            <Timeline events={events} />
            <div className="flex justify-center items-center" style={{ width: '50%', height: 'auto' }}>
                <img src={img} alt="" className='img2' />
            </div>
        </div>
    )
}
*/
function Ourcar() {
  return (
    <div className="flex justify-center items-center w-full my-10">
      <model-viewer
        src="/assets/3d-model/buggy_arena.glb"
        alt="fb_car-3d-model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        tone-mapping="neutral"
        poster="/models/poster.webp"
        shadow-intensity="1"
        camera-orbit="237.2deg 83.55deg 681m"
        field-of-view="30deg"
        exposure="1"
        style={{ width: "100%", maxWidth: "700px", height: "500px" }}
      >

        <button
          className="Hotspot"
          slot="hotspot-2"
          data-position="-52.893556219581406m 46.67007241485319m 19.275814219125973m"
          data-normal="-0.9830000535092797m 0.1804583509294921m 0.03384787113780743m"
          data-visibility-attribute="visible"
        >
          <div className="HotspotAnnotation">Chassis</div>
        </button>

        <button
          className="Hotspot"
          slot="hotspot-3"
          data-position="-18.400700390338898m 60.644701331084974m 86.22113210048003m"
          data-normal="-1m 0m 0m"
          data-visibility-attribute="visible"
        >
          <div className="HotspotAnnotation">Engine</div>
        </button>

        <button
          className="Hotspot"
          slot="hotspot-5"
          data-position="-25.00000000000009m 78.73656714166536m 40.52659348927291m"
          data-normal="-1m 0m 0m"
          data-visibility-attribute="visible"
        >
          <div className="HotspotAnnotation">Fuel Tank</div>
        </button>

        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>

        <button slot="ar-button" id="ar-button">
          View in your space
        </button>

        <div id="ar-prompt">
          <img src="https://modelviewer.dev/shared-assets/icons/hand.png" alt="AR hand gesture" />
        </div>
      </model-viewer>
    </div>
  );
}

export default Ourcar;