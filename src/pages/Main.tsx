import styles from './Main.module.css';
import SocialButton from '../components/SocialButton';
import React from 'react';

function Main() {
  const email: string = 'noodlesushinfo@gmail.com';
  const socials: [string, string, string][] = [
    ['/socials/github.svg', 'GitHub', 'https://github.com/NoodleSushi'],
    ['/socials/twitter.svg', 'Twitter', 'https://twitter.com/Noodle_Sushi'],
    ['/socials/youtube.svg', 'YouTube', 'https://www.youtube.com/@Noodle_Sushi'],
    // ['/socials/instagram.svg', 'Instagram', 'https://www.instagram.com/noodle.sushii'],
    ['/socials/soundcloud.svg', 'SoundCloud', 'https://soundcloud.com/noodle_sushi'],
    ['/socials/itchdotio.svg', 'Itch.io', 'https://noodlesushi.itch.io'],
    ['/socials/newgrounds.svg', 'Newgrounds', 'https://noodlesushi.newgrounds.com'],
    // ['/socials/bsky.png', 'Bluesky', 'https://bsky.app/profile/noodlesushi.bsky.social'],
  ];

  const COOLDOWN_TIME = 100;
  const PETTING_TIME = 1000;
  const NOODLE_IDLE = 0;
  const NOODLE_ANTICIPATE = 1;
  const NOODLE_PET = 2;
  const NOODLE_IMGS = ['/noodle-default.gif', '/noodle-anticipate.gif', '/noodle-pet.gif'];
  const [noodleState, setNoodleState] = React.useState(NOODLE_IDLE);
  const timeoutID = React.useRef<number | null>(null);
  const squeeAudio = React.useRef<HTMLAudioElement>(null);

  const updateNoodleState = (newState: number) => {
    if (noodleState === NOODLE_IDLE && newState === NOODLE_ANTICIPATE)
      setNoodleState(NOODLE_ANTICIPATE);
    else if (noodleState === NOODLE_ANTICIPATE) {
      if (newState === NOODLE_IDLE) {
        if (timeoutID.current !== null)
          clearTimeout(timeoutID.current);
        timeoutID.current = setTimeout(() => setNoodleState(NOODLE_IDLE), COOLDOWN_TIME);
      } else if (newState === NOODLE_PET) {
        squeeAudio.current?.play();
        setNoodleState(NOODLE_PET);
        if (timeoutID.current !== null)
          clearTimeout(timeoutID.current);
        timeoutID.current = setTimeout(() => setNoodleState(NOODLE_IDLE), PETTING_TIME);
      }
    }
  };

  const isInArea = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    return x >= 19 / 152 && x <= 72 / 152 && y >= 30 / 103 && y <= 52 / 103;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const check = isInArea(e);
    if (check)
      updateNoodleState(NOODLE_ANTICIPATE);
    else if (!check)
      updateNoodleState(NOODLE_IDLE);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    if (isInArea(e))
      updateNoodleState(NOODLE_PET);
  };

  const handleMouseLeave = () => {
    updateNoodleState(0);
  };

  return (
    <>
      <audio ref={squeeAudio} src='/squee.ogg' />
      <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown}>
        {
          Array.from(NOODLE_IMGS.entries()).map(([i, src]) =>
            <img key={i} className={styles.noodle} style={{ display: noodleState === i ? 'block' : 'none' }} src={src} alt='noodlesushi'/>
          )
        }
      </div>
      <h1>Hello! I'm NoodleSushi!</h1>
      <h2>Will be working on my website soon.</h2>
      <h2>=w=</h2>
      <div style={{display: 'inline-block'}}>
        <div className={styles.socials}>
          {socials.map(x =>
            <a href={ x[2] } target='_blank' title={ x[1] }>
              <SocialButton src={ x[0] } alt={ x[1] } />
            </a>
          )}
        </div>
      </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <svg width="44" height="32" viewBox="2 0 16 16">
          <path fill='#ffffffde' d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z" />
        </svg>
        <a className={styles.link} href={`mailto:${email}`}>{email}</a>
      </div>
    </>
  );
}

export default Main;
