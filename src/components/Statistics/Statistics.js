import React, { Component } from "react";

import css from './Statistics.module.css';

class Statistics extends Component {


state = {
    good: 0,
    neutral: 0,
    bad: 0
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

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / (this.state.good + this.state.neutral + this.state.bad));
    }

    
    
    render() {
        const total = this.countTotalFeedback();
        const positive = this.countPositiveFeedbackPercentage(total);
        return (
            <div className={css.feedback}>
                <p className={css.title}>Please, leave your feedback</p>
                <ul className={css.buttonsList}>
                    <li className={css.buttonsItem}>
                        <button type="button"
                            onClick={event =>
                                {this.handleIncrementGood()
                            }}>
                            Good
                        </button>

                    </li>
                    <li className={css.buttonsItem}>
                        <button type="button"
                            onClick={event =>
                                {this.handleIncrementNeutral()
                            }}>
                            Neutral
                        </button>
                    </li>
                    <li className={css.buttonsItem}>
                        <button type="button"
                            onClick={event =>
                                {this.handleIncrementBad()
                            }}>
                            Bad
                        </button>
                    </li>
                </ul>
                <p className={css.statistics}>Statistics</p>
                <ul className={css.statisticsList}>
                    <li className={css.statisticsItem}>
                        Good: <span>{this.state.good}</span>
                    </li>
                    <li className={css.statisticsItem}>
                        Neutral: <span>{this.state.neutral}</span>
                    </li>
                    <li className={css.statisticsItem}>
                        Bad: <span>{this.state.bad}</span>
                    </li>
                    <li className={css.statisticsItem}>
                        Total: <span>{total}</span>
                    </li>
                    <li className={css.statisticsItem}>
                        Positive: <span>{positive}%</span>
                    </li>
                    
                </ul>
        </div>
    )
    }



}

export default Statistics;