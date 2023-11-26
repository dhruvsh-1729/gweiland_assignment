'use client';
import React from 'react';
import CustomCarousel from './CustomCarousel'; // Adjust the path based on your project structure

const Slideshow = () => {
  const TextStyle = {
    color: 'white',
    fontSize: '60px',
    fontWeight: '900',
  }

  const ButtonStyle = {
    // padding: '15px 35px',
    // borderRadius: '25px',
    // backgroundColor: 'black',
    // fontSize: '16px',

  }

  const ButtonComp = (
    <button className="shop--now-button" >
      shop now
    </button>
  )

  const Text1 = (
    <div style={TextStyle}>
      <h1>heritage</h1>
      <h1>hoodie</h1>

      {ButtonComp}
    </div>
  )

  const Text2 = (
    <div style={TextStyle}>
      <h1>premium</h1>
      <h1>zip</h1>
      <h1>hoodies</h1>

      {ButtonComp}
    </div>
  )

  const Text4 = (
    <div style={TextStyle}>
      <h1>heritage</h1>
      <h1>woman</h1>
      <h1>tanks</h1>

      {ButtonComp}
    </div>
  )

  const Text5 = (
    <div style={TextStyle}>
      <h1>heritage</h1>
      <h1>trees</h1>

      {ButtonComp}
    </div>
  )

  
    const images = [
        { url: 'https://serv1.dragndropz.com/user_images/2023_11_25/9540_vQTIzn_50d417950df61291cec2a5714a64b862.png',caption: Text1, captionPosition: 'left'},
        { url: 'https://serv1.dragndropz.com/user_images/2023_11_25/9541_EyzdWM_6bf7eebe6c29f94d03c36f9a747eb71e.png',caption: Text1, captionPosition: 'left' },
        { url: 'https://serv1.dragndropz.com/user_images/2023_11_25/9542_McPFjt_247ff37852a5e8dbdb129c84399947ea.png',caption: Text2, captionPosition: 'left' },
        { url: 'https://serv1.dragndropz.com/user_images/2023_11_25/9543_PcOH3a_5e37185919d80cd68d7d37a681b24771.png',caption: Text4, captionPosition: 'right' },
        { url: 'https://serv1.dragndropz.com/user_images/2023_11_25/9544_q6bmTo_4fbadb03bd3e367cb6164b7f7f4291ce.png',caption: Text5, captionPosition: 'right' },
      ];
    
 

  return (
    <CustomCarousel images={images} />
  );
}

export default Slideshow;
