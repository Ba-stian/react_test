import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import {Button, Input, Form} from 'antd';
import styled from 'styled-components';


const StyledButton = styled(Button)`
font-size: 14px;
color: #dfdfdf;
display: block;
margin: 30px auto;
width: 50%;
`;

const FormInput = styled(Input)`
margin: 2px 0 10px;
outline: none;
border: none;
font-size: 14px;
padding: 0 5px;
width: 100%;
height: 30px;
box-shadow: 0 0 5px;
`;

const Wrapper = styled.div`
width: 100%;
height: 100vh;
position: relative;`;

const Container = styled.div`
position: absolute;
top: 34%;
left: 50%;
transform: translate(-50%,0%);
padding: 60px 30px 30px;
box-shadow: 0 0 10px;
`;

const Header = styled.h1`
text-align: center;
font-size: 20px;
padding: 10px 0;
`;

const Label = styled.label`
font-weight: bold;
display: block;
padding-bottom: 0;
`;

const Inputs = styled.div`
margin: 0 auto;
width: 250px;
`;

const Error = styled.p`
color: #ff0000;
font-size: 12px;
padding: 4px 0;
`;

const ServerError = styled.p`
color: #ff0000;
font-size: 14px;
padding: 6px 0;
`;


/**
 * @classdesc class Form
 */
class AuthForm extends React.Component {
	/**
	 * @param {string} props
	 */
	constructor(props) {
		super(props);
		this.props = props;
		this.state = props.inputs;
		this.state.isValid = false;
		this.state.error = [];
		this.state.serverError = [];
	}

	/**
	 * @return {Form} markup
	 */
	render() {
		return (
			<Wrapper>
				<Container>
					<Form onSubmit={this.onSubmit.bind(this)}>
						<Header>Войдите на сайт</Header>
						{this.state.inputs.map((input, i) =>
							<Inputs key={i}>
								<Label>{input.label}</Label>
								<FormInput name={name} key={i}
									type={input.type}
									placeholder={input.placeholder}
									onChange={(e) => this.onChange(e, i)}/>
								<Error>{this.state.error}</Error>
							</Inputs>
						)}
						<ServerError>{this.state.serverError}</ServerError>
						<StyledButton type='danger' htmlType='submit'>
							Войти
						</StyledButton>
					</Form>
				</Container>
			</Wrapper>);
	}

	/**
	 * @param {event} e
	 */
	onSubmit(e) {
		e.preventDefault();
		this.canSubmit();
		if (!this.state.isValid) {
			return;
		}
		this.props.onSubmit(this.getFormData());
		this.state.inputs.forEach((input) => input.value='');
	}

	/**
	 * @param {event} e
	 * @param {number} i
	 */
	onChange(e, i) {
		const value = e.target.value;
		const elem = this.state.inputs[i];
		elem.value = value;
		this.canSubmit();
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
		const login = this.state.inputs[0];
		const password = this.state.inputs[1];
		if (login.value.length && password.value.length > 3) {
			this.setState({
				isValid: true,
			});
		}
	}
}

AuthForm.propTypes = {
	inputs: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default AuthForm;
