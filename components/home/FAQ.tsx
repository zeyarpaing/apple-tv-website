import styles from '../../styles/FAQ.module.scss';
import Question from './Question';

const FAQs = [
  {
    question: 'What is Appple TV',
    answer:
      'Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.',
  },
  {
    question: 'How can I watch it?',
    answer:
      'Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at tv.apple.com.',
    more: 'Learn more',
  },
  {
    question: 'What does it cost?',
    answer:
      'That all depends on which offer you choose. (1) If you buy an Apple device, Apple TV+ is included free for 3 months.1 (2) A monthly subscription is just $4.99 per month after a free seven-day trial.2\n' +
      '(3) Apple TV+ is included in Apple One, which bundles up to five other Apple services into a single monthly subscription. Apple One plans start at $14.95 per month. (4) The Apple Music Student Plan comes with a free subscription to Apple TV+.3 Friday Night Baseball is free for a limited time — an Apple TV+ subscription is not required.',
  },
  {
    question: 'Can I share with my family?',
    answer:
      'Of course. Apple TV+ lets you share your subscription with up to five family members.',
  },
  {
    question: 'Are there commercials? And can I watch on demand?',
    answer:
      'Apple Originals are always commercial-free. Some shows release all episodes at once. Other shows add new episodes every Friday. You can then watch them on demand anytime, anywhere. Friday Night Baseball may include commercials depending on location or region.',
  },
  {
    question: 'Do I need an Apple TV 4K?',
    answer:
      'No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.',
    more: 'See all supported devices',
  },
  {
    question: 'Can I download to watch offline?',
    answer:
      'Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection.',
  },
];

const FAQ = () => {
  return (
    <section className={styles.faqWrapper}>
      <h2>Questions? Answers.</h2>
      <div className={styles.questionsWrapper}>
        {FAQs.map((faq, idx) => (
          <Question
            question={faq.question}
            answer={faq.answer}
            more={faq.more}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
