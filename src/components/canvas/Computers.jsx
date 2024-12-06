import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { dedsec0, dedsec4 } from '../../assets';


const Computers = ({ isMobbile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black"/>
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize = {1024}
      />
      <primitive 
      object={computer.scene}
      scale = {isMobbile ? 0.7 : 0.75}
      position = {isMobbile ? [0, -3, -3.2] :[0, -3.25, -1.5]}            
      rotation = {[-0.01, -0.2, -0.1]}
      />
      
    </mesh>
  )
}

const ComputersCanvas = () =>{
  const [isMobbile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add alistener to chnage the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [] )

  return(
    <div className="relative h-screen">
      <img className="absolute lg:w-[750px] top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={dedsec4} alt="" />
    </div>
  )
}

export default ComputersCanvas;
