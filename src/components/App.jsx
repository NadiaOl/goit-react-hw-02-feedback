import React, {Component} from "react";
import {Statistics} from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Section} from './Section/Section'
import {Notification} from './Notifiction/Notifiction'

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

    handleIncrement = name => {
      this.setState(prevState => {
        return {
          [name]: prevState[name] + 1,
      };});
      };
  

  render () {
    const total=this.countTotalFeedback
    const positivePercentage = this.countPositiveFeedbackPercentage

    return (
<div className="feedback">
  
<Section title = "Please, leave your feedback">
  <FeedbackOptions
  options= {Object.keys(this.state)}
  onLeaveFeedback={this.handleIncrement}/>
</Section>
  
<Section title = "Statistics">
  { total() > 0 ? 

  (<Statistics 
    good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}
    total={total()}
    positivePercentage={positivePercentage()}/>) :

    (<Notification message="There is no feedback"></Notification>)
    
  }
  </Section>
</div>
    )
  }
}

