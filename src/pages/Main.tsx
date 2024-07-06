import styles from './Main.module.css';
import SocialButton from '../components/SocialButton';

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

  return (
    <>
      <img src='/hehe lol.gif' alt='noodlesushi' title='me lol' />
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
