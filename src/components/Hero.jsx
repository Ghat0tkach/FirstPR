import React from "react";
import { Underlay, Overlay } from "../components/Threejs/style";
import "./hero.css";
import { Threebackground } from "./Threejs/ThreeBackground";



export default function Hero() {
  return (
    <>
     
      <Underlay />
      <div className="flex justify-center items-center h-screen">
      <Threebackground/>
      </div>
       
   
    </>
  );
}
 