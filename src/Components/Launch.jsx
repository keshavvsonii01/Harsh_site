import React from 'react';
import "../css/launch.css";



function Launch() {
  return (
    <>
    <div className='launch-container'  id='desktopVideo'>
      <video className='launch-video' id='desktopVideo' src="./images/vid3.mp4" loop type="video/mp4" autoPlay muted></video>
    </div>
     <div className='launch-container'  id='mobileVideo'>
     <video className='launch-video' id='mobileVideo' src="./images/vid33.mp4" loop type="video/mp4" autoPlay muted></video>
   </div>
   </>
  );
}

export default Launch;
