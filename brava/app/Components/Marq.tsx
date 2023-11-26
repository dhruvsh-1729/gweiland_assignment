import React from "react";
import Marquee from "react-fast-marquee";
import Card from "./CustomCard";

const Mark = ()=>{
    const spacer = {
        'width': '20px'
    }


    return (<>
        <Marquee speed={80} autoFill={true} style={{'marginTop': '80px', 'marginBottom':'50px'}}>
        <Card url='https://i.postimg.cc/JtMLNvTB/icon1.png' text='Dankestu' color="black"/>
        <div style={spacer}/>
        <Card url='https://i.postimg.cc/rRV2qRd9/icon2.png' text='pendulum' color="orange"/>
        <div style={spacer}/>
        <Card url='https://i.postimg.cc/XXL0QLh1/icon3.png' text='cryptoraggles' color="black"/>
        <div style={spacer}/>
        <Card url='https://i.postimg.cc/WF6PRw43/icon4.png' text='bitfins' color="black"/>
        <div style={spacer}/>
        <Card url='https://i.postimg.cc/McvzMFYj/icon5.png' text='vudu bridaga' color="black"/>
        <div style={spacer}/>
        <Card url='https://i.postimg.cc/mPZLRDzj/icon6.png' text='future fest' color="black"/>
        <div style={spacer}/>
        </Marquee>
    </>)
}

export default Mark;