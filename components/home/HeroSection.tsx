import { useRef, useState } from 'react';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';

const HeroSection = ({ scrollY }: { scrollY: number }) => {
  let vdRef = useRef();
  const [paused, setPaused] = useState(false);

  return (
    <section className={styles.heroSection}>
      <div className={styles.video_wrapper}>
        <div>
          <div className={styles.overlay} style={{ opacity: scrollY / 400 }} />
          <video
            muted
            loop
            autoPlay
            // @ts-ignore
            ref={vdRef}
            src="https://www.apple.com/105/media/us/apple-tv-plus/2022/755f2d0d-659f-44e2-a345-57305fabfdfa/supercut/large.mp4"
          />
        </div>
        <div className={styles.content_wrapper}>
          <div>
            <div
              className={styles.main_content}
              style={{ opacity: 1 - scrollY / 400 }}
            >
              <h2>
                <p>
                  All Apple Originals.
                  <br className="large" />
                  Only on&nbsp;Apple&nbsp;TV+.
                </p>
              </h2>
              <div className={styles.cta_section}>
                <a href="#">Stream now</a>
              </div>
              <p className={styles.cta_desc}>
                <span> Watch on the </span>
                <Image src="/icons/tv.png" width={41} height={41} />
                <span>app</span>
              </p>
            </div>
          </div>
          <div
            className={styles.videoControl}
            style={{ opacity: scrollY > 450 ? 0 : 1 }}
          >
            <button
              onClick={() => {
                setPaused(!paused);
                if (!paused) {
                  // @ts-ignore
                  vdRef.current.pause();
                } else {
                  // @ts-ignore
                  vdRef.current.play();
                }
              }}
            >
              <Image
                src={paused ? '/icons/play.svg' : '/icons/pause.svg'}
                height={36}
                width={36}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
