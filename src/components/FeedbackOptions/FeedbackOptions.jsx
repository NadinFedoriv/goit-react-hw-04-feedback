import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.feedback}>
    {options.map(option => {
      const optionLabel = option.toUpperCase();
      return (
        <button
          className={css.button}
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {optionLabel}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
