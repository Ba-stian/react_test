import React from 'react';
import AuthForm from '../form/form.jsx';
import inputs from '../widgets/inputs/inputs';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import styled from 'styled-components';


const StyledButton = styled(Button)`
color: #fff;
font-size: 14px;
width: 200px;
`;
const Header = styled.h1`
font-size: 40px;
margin: 0;
padding-right: 50px;
color: #fff;
transition: .4s ease-in-out;
&:hover {
text-shadow: 0 0 3px;
}
`;
const Wrapper = styled.div`
height: 100vh;
background: #5596ff;
display: flex;
justify-content: center;
align-items: center;
`;

/**
 * @classdesc class for Auth
 */
class Auth extends React.Component {
	/**
	 * @param {string} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			isLogged: false,
			token: null,
		};
	}

	/**
	 * @update state
	 */
	componentDidMount() {
		if (localStorage.getItem('token')) {
			this.setState({
				isLogged: true,
			});
		}
	}

	/**
	 * @return {Auth} markup
	 */
	render() {
		return (
			<div>
				{this.state.isLogged ?
					<Wrapper>
						<Header>
							Congratulations, you are logged!</Header>
						<StyledButton type='primary'
							onClick={this.logOut.bind(this)}>Выйти</StyledButton>
					</Wrapper>
					: null}
				{(!this.state.isLogged)
					? <AuthForm inputs={inputs} onSubmit={this.onAuth.bind(this)}/>
					: null}
			</div>
		);
	}

	/**
	 * @param {Object} data
	 * @return {Object} data
	 */
	onAuth(data) {
		if (!this.state.isLogged) {
			fetch('agg.st.devjs.ru/auth/token')
				.then((res) => {
					if (res.status === 200) {
						this.setState({
							token: 'PNM_QCJ-MAYVTMYWCPGRVW',
						});
						localStorage.setItem('token', this.state.token);
					}
					this.onLogin();
				});
		}
		return data;
	}

	/**
	 * @update state
	 */
	onLogin() {
		if (this.state.token) {
			const token = localStorage.getItem('token');
			if (token) {
				this.setState({
					isLogged: true,
				});
			}
		}
	}

	/**
	 * @update state
	 */
	logOut() {
		localStorage.removeItem('token');
		this.setState({
			isLogged: false,
		});
	}
}

export default Auth;
