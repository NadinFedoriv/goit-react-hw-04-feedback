import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions';
import css from './App.module.css';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { Notification } from 'components/Notification';

export function App() {
  
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
const handleLeaveFeedback = option => {
    setFeedback(prevFeedback => ({ ...prevFeedback, [option]: prevFeedback[option] + 1 }));
  };

  const totalFeedback = Object.values(feedback).reduce((total, value) => total+value, 0)
    
  const positiveFeedbackPercentage =  totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  

      return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedback)}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
          }
