import PropTypes from 'prop-types';
import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';

export class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    onAddFeedback: PropTypes.func,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  render() {
    return (
      <>
        <Feedback
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
          onAddFeedback={this.onAddFeedback}
        />
      </>
    );
  }
}
