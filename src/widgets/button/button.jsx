import React from 'react';
import PropTypes from 'prop-types';
import button from './button.css';


const Button = (props) => (
	<button className={`${button.btn} ${props.className}`}
		onClick={props.action}>
		{props.text}
	</button>
);

Button.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired,
};

export default Button;
