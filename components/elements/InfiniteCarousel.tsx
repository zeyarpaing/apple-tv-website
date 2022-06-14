import styles from '../../styles/Carousel.module.scss';
import SmallMovie from "./SmallMovie";

const InfiniteCarousel = () => {
  return <div className={styles.infiniteCarousel}>
    <div>
      <SmallMovie/>
    </div>
  </div>;
};

export default InfiniteCarousel;