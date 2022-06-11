import ExternalLink from '../elements/ExternalLink';
import styles from './Pricing.module.scss';
import IntersectionAnimate from '../elements/IntersectionAnimate';

export interface PricingProps {
  title: string;
  priceTitle: string;
  description: string;
  action: string;
  footNote?: {
    hash: string;
    label: number;
  };
  learnMore?: boolean;
}

const Pricing = ({
  title,
  priceTitle,
  action,
  description,
  footNote,
  learnMore,
}: PricingProps) => {
  return (
    <div className={styles.pricingContainer}>
      <IntersectionAnimate animationName="floatin">
        <h2>{title}</h2>
        <h3>{priceTitle}</h3>
        <p>
          {description}{' '}
          {footNote && (
            <sup>
              <a href={footNote.hash}>{footNote.label}</a>
            </sup>
          )}
          {learnMore && <ExternalLink />}
        </p>
        <a className={styles.actionBtn}>{action}</a>
      </IntersectionAnimate>
    </div>
  );
};

export default Pricing;
