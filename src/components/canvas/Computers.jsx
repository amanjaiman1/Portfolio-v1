
import { Suspense, useEffect, useState } from "react" 
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload,  useGLTF} from "@react-three/drei"

import CanvasLoader from '../Loader'
import { three } from "maath"

const Computers = ( isMobile ) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={0.5} />
      <spotLight
        position ={[-20, 50, 10]}
        angle = {0.12}
        penumbra = {1}
        intensity = {1}
        castShadow
        shadow-mapSize = {1024}
      />
      <primitive
        object={computer.scene}
        scale={ isMobile ? 0.7 : 0.75}
        position = { isMobile ? [0, -3, -1.2] : [0, -3.25, -.8]}
        rotation = {[-0.01, -0.2, -0.1]}
      /> 
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');

    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a Listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the Listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [])

  return (
    <Canvas 
    className="hidden"
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25}}
    gl={{ preserveDrawingBuffer: true}}
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas