import styles from './SocialButton.module.css';

interface Props {
  simpleicon?: boolean,
  src: string,
  alt: string,
}

function SocialButton(prop: Props) {
  return <>
    <img className={styles.social} src={ prop.simpleicon ? `https://cdn.simpleicons.org/${prop.src}/e3e3e3` : prop.src } alt={ prop.alt } width='32px'/>
  </>;
}

export default SocialButton;