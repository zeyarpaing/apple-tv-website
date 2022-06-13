import ExternalLink from '../elements/ExternalLink';
import { useRef, useState } from 'react';
import styles from '../../styles/FAQ.module.scss';

type questionProps = {
  question: string;
  answer: string;
  more?: string;
};

const Question = ({ question, answer, more }: questionProps) => {
  const collapse = useRef();
  const [expanded, setExpanded] = useState(false);

  function collapseSection(element: any) {
    let sectionHeight = element.scrollHeight;
    let elementTransition = element.style.transition;
    element.style.transition = '';
    requestAnimationFrame(function () {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;
      requestAnimationFrame(function () {
        element.style.height = 0 + 'px';
      });
    });
  }

  function expandSection(element: any) {
    let sectionHeight = element.scrollHeight;
    element.style.height = sectionHeight + 'px';

    function listener(e: Event) {
      element.style.height = null;
    }

    element.addEventListener('transitionend', listener);
    element.removeEventListener('transitionend', listener);
  }

  function toggleFaq() {
    if (expanded) {
      collapseSection(collapse.current);

      setExpanded(false);
    } else {
      expandSection(collapse.current);
      setExpanded(true);
    }
  }

  return (
    <>
      <div className={styles.faqQuestion}>
        <div
          role="button"
          tabIndex={0}
          onClick={toggleFaq}
          className={styles.title}
        >
          <h4>{question}</h4>
          <span>
            <svg
              className={expanded ? styles.translated : ''}
              width="23"
              height="13"
              viewBox="0 0 23 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.4756 1.62769L11.5 11.1551L1.52441 1.62769"
                stroke="#86868B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <hr />
      </div>
      {/* @ts-ignore */}
      <div className={styles.collapsible} ref={collapse}>
        <p className={styles.answer}>{answer}</p>
        {more && <ExternalLink label={more} rightChevron={true} />}
      </div>
    </>
  );
};

export default Question;
