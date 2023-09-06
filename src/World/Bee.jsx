const { useGLTF } = require("@react-three/drei")

const Bee = () => {
    const beeModel = useGLTF('/assets/models/bee/scene.gltf')
    console.log(beeModel);
    return(
      <mesh mesh position-x={2} rotation-y={-Math.PI * 0.15} scale={2}>
            <primitive object={beeModel.scene} />
      </mesh>
    )
}
export default Bee;
useGLTF.preload("/assets/models/bee/scene.gltf");
