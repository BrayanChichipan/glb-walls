import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { GLBModel } from "./components/GLBModel";
import { OrbitControls } from "@react-three/drei";
import { Dropdown } from "./components/Dropdown";
import "./styles/app.css";

function App() {
  const [wall, setWall] = useState<"left" | "right" | "front" | "back">();

  return (
    <div>
      <div className="dropdown">
        <Dropdown
          trigger={
            <span className="trigger-dropdown">{wall ?? "Wall side"}</span>
          }
          menu={
            <div className="menu-container">
              <span className="option" onClick={() => setWall("front")}>
                Front
              </span>
              <span className="option" onClick={() => setWall("right")}>
                Right
              </span>
              <span className="option" onClick={() => setWall("left")}>
                Left
              </span>
              <span className="option" onClick={() => setWall("back")}>
                Back
              </span>
            </div>
          }
        />
      </div>
      <div className="canvas-container">
        <Canvas camera={{ position: [-4, 2, 12.25], fov: 50 }}>
          <OrbitControls enableZoom={false} />
          <directionalLight intensity={10} position={[1, 0, 0]} />
          <directionalLight intensity={10} position={[-1, 0, 0]} />
          <directionalLight intensity={10} position={[0, 1, 0]} />
          <directionalLight intensity={10} position={[0, -1, 0]} />
          <directionalLight intensity={10} position={[0, 0, 1]} />
          <directionalLight intensity={10} position={[0, 0, -1]} />
          <Suspense fallback={null}>
            <GLBModel wallSelected={wall} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
