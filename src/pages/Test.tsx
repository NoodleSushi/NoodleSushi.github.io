import { Box, OrbitControls, PositionalAudio } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Suspense, useEffect, useRef, useState } from "react";
import { Euler, PositionalAudio as PositionalAudioThree } from "three";
import { CartridgeModel } from "../components/CartridgeModel";
import { Game, queryGames } from "../db";

interface CardProps {
  i: number;
  img: string;
}

const Cartridge = ({ i, img }: CardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const rotationRef = useRef(new Euler(0, 0, 0));
  const audio = useRef<PositionalAudioThree>(null);

  return (
    <RigidBody key={i}
      position={[i*0.8, 2, 0]}
      restitution={-100}
      colliders={false}
      rotation={rotationRef.current}
      onCollisionEnter={(e) => {
        audio.current?.play();
      }}
      linearDamping={1} 
    >
      <CartridgeModel
        castShadow
        receiveShadow
        img={img}
        outline={isHovered}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setIsHovered(true);
        }}
        onPointerLeave={(e) => {
          e.stopPropagation();
          setIsHovered(false);
        }}
      />
      <PositionalAudio ref={audio} url="./hit.wav" loop={false} autoplay={false} />
    </RigidBody>
  );
};


const Experience = () => {
  const [games, setGames] = useState<Game[]>([]);
  
  useEffect(() => {
    queryGames().then((result) => {
      setGames(result);
    });
  });

  return (
    <>
      <ambientLight intensity={1} />
      {/* <hemisphereLight color={0xffeeb1} groundColor={0x080820} intensity={1} castShadow /> */}
      {/* <spotLight position={[1, 1, 1]} angle={10} intensity={4} castShadow /> */}
      <OrbitControls />
      {games.map((game, i) => (<Cartridge key={i} i={i} img={game.cart_img} />))}
      <RigidBody type="fixed" restitution={-100}>
        <Box position={[0, 0, 0]} args={[50, 1, 50]} receiveShadow>
          <meshStandardMaterial color="springgreen" />
        </Box>
      </RigidBody>
    </>
  );
};


const Test = () => {
  return (
    <Canvas shadows camera={{ position: [20, 20, 20], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Suspense>
        <Physics gravity={[0, -9.81*8, 0]}>
          <Experience />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default Test;