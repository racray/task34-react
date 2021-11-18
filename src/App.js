// import { Input } from '@mui/material';
import './App.css';

import { useState } from 'react';
import { MiniDrawer} from './Box'
import React from "react";

export default function App(){
  const pov = [{title:"Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)", picture:"https://m.media-amazon.com/images/I/61WUqJd4dfS._SL1000_.jpg", price: 2999,description:"With a new speaker and design, Echo Dot is a voice-controlled smart speaker with Alexa, designed for any room. Just ask for music, news, information, control compatible smart home devices and more. You can either use the crisp and clear built-in speaker or connect Echo Dot to your own other speakers using Bluetooth or 3.5mm audio cable."},
  {title:"Apple iPhone 13 (256GB) - Blue", picture:"https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg", price: 89900.00,description:"The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. ... The first-generation iPhone came preloaded with a suite of Apple software, including iTunes, the Safari web browser and iPhoto."},
  {title:"Sony WI-XB400 Wireless Extra Bass in-Ear Headphones", picture:"https://m.media-amazon.com/images/I/71JaIPh39SL._SL1500_.jpg", price: 2500,description:"Sony WI-XB400 Wireless Extra Bass in-Ear Headphones with 15 hrs Battery, Quick Charge, Magnetic Earbuds, Tangle Free Cord, BT Ver 5.0, Work from home,Bluetooth Headset with Mic for Phone Calls (Black)"},
  {title:"Sony Bravia 125.7 cm (50 inches) Full HD LED Smart TV ", picture:"https://m.media-amazon.com/images/I/81y7qQG1GvL._SL1500_.jpg", price: 59990.00,description:"Amazing clarity and detail with Full High Definition. Experience exquisite detail and texture on this Full HD TV. Everything you watch is refined to ensure minimum noise and maximum impact. See the difference in buildings and seascapes"},
  {title:"Apple Watch Series 3", picture:"https://m.media-amazon.com/images/I/71EoGntO5bL._SL1500_.jpg", price: 30900,description:"GPS model lets you take calls and reply to texts from your wrist.Large Retina OLED display.Up to 2x faster processor than Series SE"},
  {title:"Canon imageCLASS MF232w All-in-one Laser", picture:"https://m.media-amazon.com/images/I/61O7a5RTbYS._SL1342_.jpg", price: 17799,description:"Printer Type- Laser, Functionality- All-in-One (Print, Scan, Copy); Printer Output- Mono (Black.Connectivity- USB 2.0, Wi-Fi, Canon PRINT Business, Canon Print Service, Google Cloud Print, Apple AirPrint, Mopria; Display panel- 6.9cm BW LCD."}];

  const [products,setProducts] = useState(pov);
  return(
    <div className="App">
        <MiniDrawer products={products} setProducts={setProducts}/>
    </div>
  )
}




