import { useEffect, useRef, useState } from "react";
import "./Grumpus.css";

type Props = {
  img: string,
};

function Grumpus({ img }: Props) {
  const [i, setI] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prevI) => (prevI + 1) % 3);
      if (!audioRef.current?.paused ?? false) {
          setI((prevI) => prevI + 3);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
      audioRef.current?.play();
  };

  return (
    <>
      <button
        className="grumpus"
        style={{
          background: `url(${img})`,
          backgroundPositionX: -i * 128,
        }}
        onClick={handleButtonClick}
      />
      <audio src="/squee.wav" ref={audioRef}></audio>
    </>
  );
}

export default Grumpus;