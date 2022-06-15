import styles from '../../styles/Carousel.module.scss';
import SmallMovie from './SmallMovie';
import { useState } from 'react';

const InfiniteCarousel = ({
  animationSpeed,
  startIndex = 1,
  isRunning = true,
}: {
  animationSpeed: number;
  startIndex: number;
  isRunning: boolean;
}) => {
  return (
    <div className={styles.infiniteCarousel}>
      {/* @ts-ignore */}
      <section className={styles.wrapper}>
        <div
          style={{
            animationDuration: animationSpeed + 's',
            animationPlayState: isRunning ? 'running' : 'paused',
          }}
        >
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
      </section>
    </div>
  );
};

export default InfiniteCarousel;
