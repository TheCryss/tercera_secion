import Bee from "./World/Bee";

const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <Bee></Bee>
        </>
    )
}

export default Experience;