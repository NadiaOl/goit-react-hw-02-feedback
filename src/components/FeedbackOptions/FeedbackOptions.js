import React from "react";

import css from './FeedbackOptions.module.css';

export const FeedbackOptions =({handleIncrementGood, handleIncrementNeutral, handleIncrementBad}) => {
    return (
        <ul className={css.buttonsList}>
        <li className={css.buttonsItem}>
            <button type="button"
                onClick={event => {
                    handleIncrementGood();
                }}>
                Good
            </button>

        </li>
        <li className={css.buttonsItem}>
            <button type="button"
                onClick={event =>
                    {handleIncrementNeutral()
                }}>
                Neutral
            </button>
        </li>
        <li className={css.buttonsItem}>
            <button type="button"
                onClick={event =>
                    {handleIncrementBad()
                }}>
                Bad
            </button>
        </li>
    </ul>
    )
}