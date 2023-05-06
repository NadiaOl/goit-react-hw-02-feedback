import React from "react";
import PropTypes from "prop-types";

import css from './Statistics.module.css';

export const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
    return (
                <ul className={css.statisticsList}>
                    <li className={css.statisticsItem}>
                        Good: <span>{good}</span>
                    </li>
                    <li className={css.statisticsItem}>
                        Neutral: <span>{neutral}</span>
                    </li>
                    <li className={css.statisticsItem}>
                        Bad: <span>{bad}</span>
                    </li>
                    <li className={css.statisticsItem}>
                        Total: <span>{total}</span>
                    </li>
                    <li className={css.statisticsItem}>
                        Positive: <span>{positivePercentage}%</span>
                    </li>
                </ul>
    )
    }

    Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    }
