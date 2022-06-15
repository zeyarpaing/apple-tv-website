import styles from '../../styles/Carousel.module.scss';
import StreamNow from './StreamNow';

const SmallMovie = ({ source }: { source: string }) => {
  return (
    <div className={styles.smallMovie}>
      <div className={styles.imgContainer}>
        <img src={source} />
      </div>
      <div className={styles.overlay}>
        <span>
          <StreamNow />
        </span>
      </div>
    </div>
  );
};

export default SmallMovie;
