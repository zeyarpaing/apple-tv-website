import styles from '../../styles/Carousel.module.scss';
import SmallMovie from './SmallMovie';

const InfiniteCarousel = ({
  animationSpeed,
  startIndex = 1,
}: {
  animationSpeed: number;
  startIndex: number;
}) => {
  return (
    <div className={styles.infiniteCarousel}>
      {/* @ts-ignore */}
      <div style={{ animationDuration: animationSpeed + 's' }}>
        {Array(6)
          .fill(0)
          .map((e, idx) => (
            <SmallMovie
              key={idx}
              source={`/movies/small/${idx + startIndex}.jpg`}
            />
          ))}
        {Array(6)
          .fill(0)
          .map((e, idx) => (
            <SmallMovie
              key={idx + startIndex}
              source={`/movies/small/${idx + startIndex}.jpg`}
            />
          ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
