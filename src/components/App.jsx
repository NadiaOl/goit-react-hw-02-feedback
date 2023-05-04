import React, {Component} from "react";
import {Statistics} from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Section} from './Section/Section'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad));
    }


    handleIncrementGood = () => {
      this.setState(prevState => ({
          good: prevState.good + 1,
      }));
      };
  
      handleIncrementNeutral = () => {
      this.setState(prevState => ({
          neutral: prevState.neutral + 1,
      }));
      };
      
      handleIncrementBad = () => {
      this.setState(prevState => ({
          bad: prevState.bad + 1,
      }));
      };

  render () {
    const total=this.countTotalFeedback
    const positivePercentage = this.countPositiveFeedbackPercentage
    const handleIncrementGood = this.handleIncrementGood
    const handleIncrementNeutral = this.handleIncrementNeutral
    const handleIncrementBad = this.handleIncrementBad

    return (
<div className="feedback">
  
<Section title = "Please, leave your feedback">
  <FeedbackOptions
  handleIncrementGood={handleIncrementGood}
  handleIncrementNeutral={handleIncrementNeutral}
  handleIncrementBad={handleIncrementBad}
  />
  </Section>
  
<Section title = "Statistics">
  <Statistics 
    good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}
    total={total()}
    positivePercentage={positivePercentage()}/>
  </Section>
</div>
    )
  }
}

