import React from 'react';
import PropTypes from 'prop-types';
import button from './button.css';

/**
 * @classdesc class for Button
 */
class Button extends React.Component {
	/**
	 * @param {string} props
	 */
	constructor(props) {
		super(props);
	}

	/**
	 * @return {Button} markup
	 */
	render() {
		return (
			<button className={`${button.btn} ${this.props.className}`}
				onClick={(e)=> this.onClick(e)}>
				{this.props.text}
			</button>
		);
	}

	/**
	 * @param {event} e
	 */
	onClick(e) {
		this.props.onClick(e);
	}
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Button;
