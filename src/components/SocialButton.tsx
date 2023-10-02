import styles from './SocialButton.module.css';

interface Props {
  src: string,
  alt: string,
}

function SocialButton(prop: Props) {
  return <>
    <img className={styles.social} src={ prop.src } alt={ prop.alt } width='32px'/>
  </>;
}

export default SocialButton;