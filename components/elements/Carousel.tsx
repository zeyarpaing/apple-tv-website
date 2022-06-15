import styles from '../../styles/Carousel.module.scss';
import { useEffect, useState } from 'react';

// const movies = [
//   'blackbird',
//   'essex-serpent',
//   'forallmankind',
//   'loot',
//   'prehistoric',
// ];

const Carousel = ({ scrollY }: { scrollY: number }) => {
  const [movs, setMovs] = useState([
    {
      name: 'blackbird',
      left: '-0%',
    },
    {
      name: 'essex-serpent',
      left: '50%',
    },
    {
      name: 'forallmankind',
      left: '100%',
    },
  ]);
  const [movies, setMovies] = useState([
    'forallmankind',
    'loot',
    'prehistoric',
    'blackbird',
    'essex-serpent',
  ]);
  const [xShift, setXShift] = useState(0);

  useEffect(() => {
    // setInterval(() => {
    //   console.log('inter');
    //   setXShift(xShift - 900);
    //   let newMovie = [...movies.slice(1, movies.length), movies[0]];
    //   setMovies(newMovie);
    // }, 700);
  }, []);
  console.log('scrollY : ', scrollY);
  return (
    <div className={styles.carouselWrapper}>
      <div>
        <div
          className={styles.fullOverlay}
          style={{
            backgroundColor: scrollY > 2042 ? `rgba(0, 0, 0, 0)` : '#000',
          }}
        >
          <div
            style={{
              backgroundImage: `url('/movies/${
                movies[Math.floor(movies.length / 2)]
              }.jpg')`,
              width: `max(900px, calc(110rem - ${scrollY - 1500 + 'px'} ))`,
              // bottom: `max(0px, -${scrollY - 1000}px)`,
              height: `max(506px, calc(110rem - ${scrollY - 1000 + 'px'} ))`,
              // top: scrollY - 1800 + 'px',
            }}
          >
            <div>
              <p>Now Streaming</p>
              <img
                src={`/movies/${movies[Math.floor(movies.length / 2)]}.png`}
              />
            </div>
          </div>
        </div>
        <div>
          <section>
            {movies.map((mov) => (
              <div
                key={mov}
                style={{
                  backgroundImage: `url('/movies/${mov}.jpg')`,
                  transform: `translateX(${xShift}px) scale(-${
                    scrollY / 100
                  }%}`,
                }}
                className={styles.carouselItem}
              >
                <div>
                  <p>Now Streaming</p>
                  <img src={`/movies/${mov}.png`} />
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Carousel;