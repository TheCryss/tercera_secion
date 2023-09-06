import { useEffect, useRef } from "react";

const { useAnimations,useGLTF } = require("@react-three/drei")


const Bee = () => {
    const beeModel = useGLTF('/assets/models/bee/scene.gltf')
    console.log(beeModel);
    const beeRef =useRef();
    const {animations} = beeModel;
    const { actions } = useAnimations(animations, beeRef);
    useEffect(() => {
        const action = actions["All Animations"]
        action.play()
    }, [])
    return(
      <mesh ref={beeRef} mesh position-x={2} rotation-y={-Math.PI * 0.15} scale={2}>
            <primitive object={beeModel.scene} />
      </mesh>
    )
}
export default Bee;
useGLTF.preload("/assets/models/bee/scene.gltf");
