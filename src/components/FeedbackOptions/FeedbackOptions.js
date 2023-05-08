import React from "react";
import PropTypes from "prop-types";

import css from './FeedbackOptions.module.css';


export const FeedbackOptions =({options, onLeaveFeedback}) => {
    return (
        <ul className={css.buttonsList}>
        {options.map(name => (
            <li className={css.buttonsItem}
            key={name}>
            <button type="button"
                onClick={() => {
                    onLeaveFeedback(name);
                }}>
                {name}
            </button>
        </li>))}
    </ul>
    )
}
FeedbackOptions.propTypes = {
    options: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}