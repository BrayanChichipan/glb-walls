import { useGLTF } from "@react-three/drei";
import { FC, useEffect, useState } from "react";
import { MeshBasicMaterial } from "three";

type WallPosition = "left" | "right" | "front" | "back";
interface GLBModelProps {
  wallSelected?: WallPosition;
}

const redMaterial = new MeshBasicMaterial({ color: "red" });

export const GLBModel: FC<GLBModelProps> = ({ wallSelected }) => {
  const { nodes, materials } = useGLTF("/glb-models/Barn_Testing.glb");
  const wallsMaterialInitial = {
    left: materials.Siding_LPSmartPanelSiding,
    back: materials.Siding_LPSmartPanelSiding,
    front: materials.Siding_LPSmartPanelSiding,
    right: materials.Siding_LPSmartPanelSiding,
  };
  const [wallsMaterial, setWallsMaterial] = useState(wallsMaterialInitial);

  useEffect(() => {
    if (!wallSelected) return;

    setWallsMaterial({ ...wallsMaterialInitial, [wallSelected]: redMaterial });
  }, [wallSelected]);

  return (
    <group dispose={null}>
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.Siding_LPSmartPanelSiding}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Siding_BoardandBatten}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.Roofing_Shingles_DesertTan}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.Wood_InteriorFloor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.Wood_Trim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.Metal_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={materials.Metal_Exterior}
        />
      </group>
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials.Wood_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials.Wood_Trim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry}
          material={wallsMaterial.back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry}
          material={wallsMaterial.right}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry}
          material={wallsMaterial.front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry}
          material={wallsMaterial.left}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/glb-models/Barn_Testing.glb");
