import styles from '../../styles/Carousel.module.scss';
import InfiniteCarousel from '../elements/InfiniteCarousel';
import Carousel from '../elements/Carousel';

const CarouselSection = ({ scrollY }: { scrollY: number }) => {
  return (
    <section className={styles.carouselSection}>
      <Carousel scrollY={scrollY} />
      <InfiniteCarousel animationSpeed={45} startIndex={1} isRunning />
      <InfiniteCarousel animationSpeed={35} startIndex={6} isRunning />
    </section>
  );
};

export default CarouselSection;
