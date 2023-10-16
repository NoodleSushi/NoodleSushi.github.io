import styles from './Main.module.css';

function Main() {
  return (
    <>
      <div className={styles.introContainer}>
        <div className={styles.introContent}>
          <img className={styles.noodleImageShadow} src='/noodle-home.png' alt='noodlesushi'/>
          <img className={styles.noodleImage} src='/noodle-home.png' alt='noodlesushi' />
          <div className={styles.introContentText}>
            <h1>Heya! I'm NoodleSushi!</h1>
            <h2>Will be working on my website soon.</h2>
            <h2>uwu</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
