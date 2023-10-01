import React from "react";
import { Underlay, Overlay } from "../components/Threejs/style";
import { Suspense } from "react";
import "./hero.css";
import { ThreeBackground } from "./Threejs/ThreeBackground";

export default function Hero() {
  return (
    <>
      <Underlay />
      <div className="flex justify-center items-center h-screen">
      <ThreeBackground />
     
      </div>
       
   
    </>
  );
}
 