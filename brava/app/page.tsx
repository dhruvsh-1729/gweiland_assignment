import Header from "./Components/header";
import Navbar from "./Components/Navbar";
import Slideshow from "./Components/slideshow";
import Card from "./Components/CustomCard";
import image from '../assets/img1.png';
import Mark from "./Components/Marq";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Slideshow/>
      {/* <image/> */}
      {/* <Card url='https://i.postimg.cc/JtMLNvTB/icon1.png' text='Dankestu' color="black"/>

      <Card url='https://i.postimg.cc/rRV2qRd9/icon2.png' text='pendulum' color="orange"/>

      <Card url='https://i.postimg.cc/XXL0QLh1/icon3.png' text='Dankestu' color="black"/>

      <Card url='https://i.postimg.cc/WF6PRw43/icon4.png' text='pendulum' color="black"/> */}

      <Mark/>
    </div>
  )
}
