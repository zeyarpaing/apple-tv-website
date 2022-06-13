import ExternalLink from '../elements/ExternalLink';
import { useRef } from 'react';

type questionProps = {
  question: string;
  answer: string;
  more?: string;
};
const Question = ({ question, answer, more }: questionProps) => {
  const collapse = useRef();

  return (
    <>
      <div className="faq-wrapper">
        <div className="title">
          <h4>{question}</h4>
          <span>
            <svg
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
      </div>
      {/* @ts-ignore */}
      <div className="collapsible" ref={collapse}>
        <hr />
        <p>{answer}</p>
        {more && <ExternalLink label={more} rightChevron={true} />}
      </div>
    </>
  );
};

export default Question;
