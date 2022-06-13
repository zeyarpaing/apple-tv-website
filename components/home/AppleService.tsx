import styles from '../../styles/Service.module.scss';
import ExternalLink from '../elements/ExternalLink';

const AppleService = () => {
  return (
    <section className={styles.appleService}>
      <section className={styles.service1}>
        <img src="/icons/service-1.jpg" />
        <div>
          <img src="/icons/apple-one.png" />
          <p>
            Bundle Apple TV+ <br className="mobile" /> with{' '}
            <br className="tablet" /> up to five other great services.
            <br /> And enjoy more for less.
          </p>
          <a className={styles.link}>Try Apple One free*</a>
          <ExternalLink label="Learn More" rightChevron={true} />
        </div>
      </section>
      <section className={`${styles.service1} ${styles.service2}`}>
        <img src="/icons/service-2.jpg" />
        <div>
          <p>
            The Apple Music Student <br className="mobile" /> Plan comes with
            <br className="mobile" />
            Apple TV+ for free.
          </p>
          <a className={styles.link}>Try Apple Music free</a>
        </div>
      </section>
      <div className={styles.serviceContainer}>
        <section className={`${styles.service1} ${styles.service3}`}>
          <div className={styles.imgWrapper}>
            <img src="/icons/service-4k.jpg" />
          </div>
          <div className={styles.contentWrapper}>
            <img src="/icons/tv-4k.png" />
            <p>
              A higher
              <br className="mobile" /> definition of TV.
            </p>
            <div className={styles.btns}>
              <a className={styles.link}>Buy</a>
              <ExternalLink label="Learn More" rightChevron={true} />
            </div>
          </div>
        </section>
        <section className={`${styles.service1} ${styles.service3}`}>
          <div className={styles.imgWrapper}>
            <img src="/icons/service-ariplay.jpg" />
          </div>
          <div className={styles.contentWrapper}>
            <span className={styles.airPlay}>AirPlay</span>
            <p>
              Bring Apple TV+ to
              <br /> a screen near you.
            </p>
            <ExternalLink label="Learn more" rightChevron={true} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default AppleService;
