import React from 'react';
import form from './form.css';
import Button from '../widgets/button/button.jsx';
import PropTypes from 'prop-types';


class Form extends React.Component {
	constructor(props){
		super(props);
		this.props = props;
		this.state = props.inputs;
	}
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
						<Button text={'submit'} className={form.btn}
							onSubmit={this.onSubmit.bind(this)}/>
						<Button text={'logout'} className={form.btn}/>
					</form>
				</div>
			</div>);
	}

	/**
	 * @param {event} e
	 * @param {number} i
	 */
	onSubmit(e, i) {
		e.preventDefault();
		this.props.onSubmit(this.onChange(e, i));
	}

	/**
	 * @param {event} e
	 * @param {number} i
	 * @return {string}
	 */
	onChange(e, i) {
		const value = e.target.value;
		const elem = this.state.inputs[i];
		elem.value = value;
		return elem.value[0] && elem.value[1];
	}
}

Form.propTypes = {
	inputs: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Form;
