import React from 'react';
import form from './form.css';
import Button from '../widgets/button/button.jsx';
import PropTypes from 'prop-types';


/**
 * @classdesc class Form
 */
class Form extends React.Component {
	/**
	 * @param {string} props
	 */
	constructor(props) {
		super(props);
		this.props = props;
		this.state = props.inputs;
		this.state.isValid = false;
	}

	/**
	 * @return {Form} markup
	 */
	render() {
		return (
			<div className={form.form}>
				<div className={form.container}>
					<form onSubmit={this.onSubmit.bind(this)}>
						<h1 className={form.header}>Войдите на сайт</h1>
						{this.state.inputs.map((input, i) =>
							<div className={form.inputs} key={i}>
								<label className={form.label}>{input.label}</label>
								<input className={form.input} name={name} key={i}
									type={input.type} value={this.state.value}
									placeholder={input.placeholder}
									onChange={(e) => this.onChange(e, i)}/>
							</div>
						)}
						<Button text={'login'} className={form.btn}
							onClick={this.onSubmit.bind(this)}/>
					</form>
				</div>
			</div>);
	}

	/**
	 * @param {event} e
	 */
	onSubmit(e) {
		e.preventDefault();
		this.canSubmit();
		if (this.state.isValid) {
			this.props.onSubmit(this.getFormData());
		}
	}

	/**
	 * @param {event} e
	 * @param {number} i
	 */
	onChange(e, i) {
		const value = e.target.value;
		const elem = this.state.inputs[i];
		elem.value = value;
	}

	/**
	 * @return {Object}
	 */
	getFormData() {
		const data = {};
		this.state.inputs.forEach((input)=> {
			data[input.name] = input.value;
		});
		return data;
	}

	/**
	 * @update state
	 */
	canSubmit() {
		this.state.inputs.forEach((input) => {
			if (input.value.length > 4) {
				this.setState({
					isValid: true,
				});
			}
		});
	}
}

Form.propTypes = {
	inputs: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Form;
