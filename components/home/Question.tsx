import ExternalLink from '../elements/ExternalLink';
import {useRef, useState} from 'react';
import styles from '../../styles/FAQ.module.scss';

type questionProps = {
  question: string;
  answer: string;
  more?: string;
};

const Question = ({question, answer, more}: questionProps) => {
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
          <div onClick={toggleFaq} className={styles.title}>
            <h4>{question}</h4>
            <span>
            <svg
                className={expanded ? styles.translated : ''}
                fill="none"
                height="8"
                viewBox="0 0 17 8"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M1 1.00006L8.5 6.50006L16 1.00006"
                  stroke="black"
                  strokeLinecap="round"
                  strokeWidth="1.8"
              />
            </svg>
          </span>
          </div>
          <hr/>
        </div>
        {/* @ts-ignore */}
        <div className={styles.collapsible} ref={collapse}>
          <p className={styles.answer}>{answer}</p>
          {more && <ExternalLink label={more} rightChevron={true}/>}
        </div>
      </>
  );
};

export default Question;
