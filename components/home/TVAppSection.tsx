import styles from '../../styles/TVApp.module.scss';
import ExternalLink from '../elements/ExternalLink';

const TVAppSection = () => {
  const TVs = [
    'tv-samsung',
    'tv-lg',
    'tv-vizio',
    'tv-sony',
    'tv-xfinity',
    'tv-roku',
    'tv-firetv',
    'tv-google',
    'tv-playstation',
    'tv-xbox',
  ];
  return (
    <section className={`${styles.tvAppSection} container`}>
      <div className={styles.tvAppHeader}>
        <img src="/icons/tv-large.png" />
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
      <div className={styles.varietyHeader}>
        <p>See it on your smart TV or streaming device.</p>
        <ul>
          <li>
            <ExternalLink
              rightChevron={true}
              lightColor={true}
              label="Set up your device"
            />
          </li>
          <li>
            <ExternalLink
              rightChevron={true}
              lightColor={true}
              label="Explore compatible devices"
            />
          </li>
        </ul>
      </div>
      <div className={styles.externalTVs}>
        {TVs.map((tv) => (
          <div key={tv}>
            <img src={`/icons/${tv}.jpg`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TVAppSection;
