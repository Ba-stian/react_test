import React from 'react';
import Form from '../form/form.jsx';
import inputs from '../widgets/inputs/inputs.js';
import Button from '../widgets/button/button.jsx';
import auth from './auth.css';


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
					<div className={auth.auth}>
						<h1 className={auth.header}>
							Congratulations, you are logged!</h1>
						<Button text={'logout'} className={auth.btn}
							onClick={this.logOut.bind(this)}/>
					</div>
					: null}
				{(!this.state.isLogged)
					? <Form inputs={inputs} onSubmit={this.onAuth.bind(this)}/>
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
			fetch('agg.st.devjs.ru/?Content-Type=application/json')
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
