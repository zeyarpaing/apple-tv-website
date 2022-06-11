import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Pricing, { PricingProps } from '../components/pricing/Pricing';
import ExternalLink from '../components/elements/ExternalLink';

const pricingData: PricingProps[] = [
  {
    title: 'Buy an Apple device',
    priceTitle: '3 months free.',
    description:
      'Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.',
    action: 'Check eligibility',
    footNote: {
      label: 1,
      hash: '#footnote-1',
    },
  },
  {
    title: 'Free 7-day trial',
    priceTitle: '$4.99/mo.',
    description:
      'A monthly subscription is just $4.99 per month after a free 7-day trial. Share Apple TV+ with your family.',
    action: 'Try it free',
    footNote: {
      label: 2,
      hash: '#footnote-2',
    },
  },
  {
    title: 'Free 1‑month trial',
    priceTitle: 'Apple One',
    description:
      'Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.',
    action: 'Try Apple One free*',
    learnMore: true,
  },
];

const Home: NextPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', (e: Event) => {
      setScrollY(window.scrollY);
      console.log(window.scrollY);
    });
  }, []);

  return (
    <Layout>
      <HeroSection scrollY={scrollY} />
      <ValueSection scrollY={scrollY} />
      <TVAppSection />
    </Layout>
  );
};

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
                  vdRef.current.pause();
                } else {
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

const ValueSection = ({ scrollY }: { scrollY: number }) => {
  return (
    <section className={styles.valueSection}>
      <div>
        <ul>
          <li
            className={`before-floatin  ${
              scrollY >= 300 ? 'entered-floatin' : ''
            }`}
          >
            New Apple Originals every month.
          </li>
          <li
            className={`before-floatin  ${
              scrollY >= 400 ? 'entered-floatin' : ''
            }`}
          >
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </li>
          <li
            className={`before-floatin  ${
              scrollY >= 500 ? 'entered-floatin' : ''
            }`}
          >
            Share Apple TV+ with your family.
          </li>
        </ul>
      </div>
      <section className={styles.pricingSection}>
        <div>
          {pricingData.map((data, idx) => (
            <Pricing {...data} key={idx} />
          ))}
        </div>
      </section>
    </section>
  );
};

const TVAppSection = () => {
  return (
    <section className={`${styles.tvAppSection} container`}>
      <div className={styles.tvAppHeader}>
        <Image src="/icons/tv-large.png" width={76} height={76} />
        <h2>Watch Apple TV+ anywhere on the Apple TV app.</h2>
        <p>
          Find the Apple TV app on your favorite Apple devices. <br />
          Or watch Apple TV+ online at{' '}
          <ExternalLink lightColor={true} label="tv.apple.com" />.
        </p>
      </div>
      <div className={styles.deviceContainer}>
        <div>
          <div className={styles.deviceWrapper}>
            <img src="/icons/dev-tv.jpg" />
          </div>
          <h3>Apple TV</h3>
        </div>
        <div>
          <div className={styles.deviceWrapper}>
            <img src="/icons/dev-iph.jpg" />
          </div>
          <h3>iPhone</h3>
        </div>
        <div>
          <div className={styles.deviceWrapper}>
            <img src="/icons/dev-ipad.jpg" />
          </div>
          <h3>iPad</h3>
        </div>
        <div>
          <div className={styles.deviceWrapper}>
            <img src="/icons/dev-mac.jpg" />
          </div>
          <h3>Mac</h3>
        </div>
        <div>
          <div className={styles.deviceWrapper}>
            <img src="/icons/dev-air.jpg" />
          </div>
          <h3>AirPlay</h3>
        </div>
      </div>
    </section>
  );
};
export default Home;
