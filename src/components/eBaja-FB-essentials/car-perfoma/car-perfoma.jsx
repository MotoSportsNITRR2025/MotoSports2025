import React, { Fragment, useEffect, useState } from 'react';

import Timeline from '../timeline/timeline';

import '@google/model-viewer'; 


function Ourcar() {
  return (
    <div className=" flex justify-center items-center w-full"
    style={{ background: "linear-gradient(180deg,#ffffff 0%,#7c5238 10%, #efc65e 90%, #ffffff 100%)" }}>
      <model-viewer
        src="/assets/3d-model/buggy_arena.glb"
        alt="fb_car-3d-model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        tone-mapping="neutral"
        poster="/models/poster.webp"
        shadow-intensity="2"
        camera-orbit="225.2deg 80.55deg 500m"
        field-of-view="30deg"
        exposure="1"
        style={{ width: "100%", height: "500px" }}
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


      </model-viewer>
    </div>
  );
}

export default Ourcar;