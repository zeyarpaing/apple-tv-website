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
            Bundle Apple TV+ with up to five other great services. And enjoy
            more for less.
          </p>
          <a className={styles.link}>Try Apple One free*</a>
          <ExternalLink label="Learn More" rightChevron={true} />
        </div>
      </section>
    </section>
  );
};

export default AppleService;
