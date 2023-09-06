const { useGLTF } = require("@react-three/drei")

const Bee = () => {
    const beeModel = useGLTF('/assets/models/bee/scene.gltf')
    console.log(beeModel);
    return
}
export default Bee;
useGLTF.preload("/assets/models/bee/scene.gltf");