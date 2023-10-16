import styles from './SocialButton.module.css';

interface Props {
  src: string,
  alt: string,
  size?: string | number | undefined,
}

function SocialButton(prop: Props) {
  return <>
    <img className={styles.social} src={ prop.src } alt={ prop.alt } width={prop.size ?? '32px'}/>
  </>;
}

export default SocialButton;