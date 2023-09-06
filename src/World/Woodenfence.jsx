import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function WoodenFence(props) {
  const { nodes, materials } = useGLTF("/assets/models/woodenfence/woodenFence.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WoodenFence.geometry}
        material={nodes.WoodenFence.material}
      />
    </group>
  );
}
export default WoodenFence;
useGLTF.preload("/woodenFence.glb");
