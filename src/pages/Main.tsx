import styles from './Main.module.css';
import SocialButton from '../components/SocialButton';

function Main() {
  const socials: [string, string, string][] = [
    ['/socials/github.svg', 'GitHub', 'https://github.com/NoodleSushi'],
    ['/socials/twitter.svg', 'Twitter', 'https://twitter.com/Noodle_Sushi'],
    ['/socials/youtube.svg', 'YouTube', 'https://www.youtube.com/@Noodle_Sushi'],
    ['/socials/instagram.svg', 'Instagram', 'https://www.instagram.com/noodle.sushii'],
    ['/socials/soundcloud.svg', 'SoundCloud', 'https://soundcloud.com/noodle_sushi'],
    ['/socials/itchdotio.svg', 'Itch.io', 'https://noodlesushi.itch.io'],
    ['/socials/newgrounds.svg', 'Newgrounds', 'https://noodlesushi.newgrounds.com'],
    ['/socials/bsky.png', 'Bluesky', 'https://bsky.app/profile/noodlesushi.bsky.social'],
  ];

  return (
    <>
      <img src='/hehe lol.gif' alt='noodlesushi' title='me lol' />
      <h1>Hello! I'm NoodleSushi!</h1>
      <h2>Will be working on my website soon.</h2>
      <h2>uwu</h2>
      <div style={{display: 'inline-block'}}>
        <div className={styles.socials}>
          {socials.map(x =>
            <a href={ x[2] } target='_blank' title={ x[1] }>
              <SocialButton src={ x[0] } alt={ x[1] } />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
