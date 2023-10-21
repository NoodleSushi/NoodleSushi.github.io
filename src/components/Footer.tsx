import styles from './Footer.module.css';
import SocialButton from './SocialButton';

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

function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div>© 2023 NoodleSushi.</div>
        <div style={{display: 'inline-block'}}>
          <div className={styles.socials}>
            {socials.map(x =>
              <a key={ x[1] } href={ x[2] } target='_blank' title={ x[1] }>
                <SocialButton src={ x[0] } alt={ x[1] } size={32} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;