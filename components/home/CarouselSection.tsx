import styles from '../../styles/Carousel.module.scss';
import InfiniteCarousel from '../elements/InfiniteCarousel';

const CarouselSection = () => {
  return (
    <section className={styles.carouselSection}>
      <InfiniteCarousel animationSpeed={46} startIndex={1} />
      <InfiniteCarousel animationSpeed={38} startIndex={6} />
    </section>
  );
};

export default CarouselSection;
