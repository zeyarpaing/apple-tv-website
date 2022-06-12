import styles from '../../styles/Value.module.scss';
import Pricing, { PricingProps } from '../pricing/Pricing';
import { useSelector } from 'react-redux';

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

export default ValueSection;
