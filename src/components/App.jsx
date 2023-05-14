import PropTypes from 'prop-types';
import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onAddFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Feedback
        good={good}
        bad={bad}
        neutral={neutral}
        onAddFeedback={onAddFeedback}
      />
    </>
  );
};

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onAddFeedback: PropTypes.func,
};
