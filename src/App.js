// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
// 2. TODO - Import drawing utility here
import { drawRect } from "./utilities";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    // e.g. const net = await cocossd.load();
    const net=await cocossd.load();
    
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      // e.g. const obj = await net.detect(video);
      const obj = await net.detect(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      drawRect(obj,ctx);
    }
  };

  useEffect(()=>{runCoco()},[]);
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_ENVIRONMENT);

  let videoConstraints: MediaTrackConstraints = {
    facingMode: facingMode,
  };

  console.log(facingMode + videoConstraints);


  return (
    <div className="App">
      <header className="App-header">
      <div id="video-stream">
        <Webcam className="my-webcam-class"
          ref={webcamRef}
          muted={true}
          videoConstraints={videoConstraints}
          style={{
          position: "absolute",
            textAlign: "center",
            zindex: 8,
            right:0,
            height: "100vh",
             width: "100%",
             objectFit: "fill",
          }}
        />

        <canvas id="bounding-box"
          ref={canvasRef}
          style={{
            position: "absolute",
            textAlign: "center",
            left:0,
            right:0,
            zindex: 8,
            height: "100vh",
             width: "100%",
             objectFit: "fill",
          }}
        />

        </div>
      </header>
    </div>
  );
}

export default App;
