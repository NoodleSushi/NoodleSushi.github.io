import styles from './Main.module.css';
import SocialButton from '../components/SocialButton';

function Main() {
  const socials: [string, boolean, string, string][] = [
    ['github', true, 'GitHub', 'https://github.com/NoodleSushi'],
    ['twitter', true, 'Twitter', 'https://twitter.com/Noodle_Sushi'],
    ['youtube', true, 'YouTube', 'https://www.youtube.com/@Noodle_Sushi'],
    ['instagram', true, 'Instagram', 'https://www.instagram.com/noodle.sushii'],
    ['soundcloud', true, 'SoundCloud', 'https://soundcloud.com/noodle_sushi'],
    ['itchdotio', true, 'Itch.io', 'https://noodlesushi.itch.io'],
    ['/socials/newgrounds.svg', false, 'Newgrounds', 'https://noodlesushi.newgrounds.com'],
    ['/socials/bsky.png', false, 'Bluesky', 'https://bsky.app/profile/noodlesushi.bsky.social'],
  ];

  return (
    <>
      <img src='/hehe lol.png' alt='noodlesushi' title='me lol' />
      <h1>Hello! I'm NoodleSushi!</h1>
      <h2>Will be working on my website soon.</h2>
      <h2>uwu</h2>
      <div style={{display: 'inline-block'}}>
        <div className={styles.socials}>
          {socials.map(x =>
            <a href={ x[3] } target='_blank' title={ x[2] }>
              <SocialButton src={ x[0] } simpleicon={ x[1] } alt={ x[2] } />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
