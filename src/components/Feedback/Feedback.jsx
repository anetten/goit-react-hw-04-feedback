import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  // <div className={css.feedback}>
  //   <button className={css.button} onClick={() => onLeaveFeedback('good')}>
  //     Good
  //   </button>
  //   <button className={css.button} onClick={() => onLeaveFeedback('neutral')}>
  //     Neutral
  //   </button>
  //   <button className={css.button} onClick={() => onLeaveFeedback('bad')}>
  //     Bad
  //   </button>
  // </div>

  <div className={css.feedback}>
    {options.map(option => (
      <button
        key={option}
        className={css.button}
        onClick={() => onLeaveFeedback(option)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);
