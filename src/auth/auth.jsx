import React from 'react';
import Form from '../form/form.jsx';
import inputs from '../widgets/inputs/inputs.js';


/**
 * @classdesc class for Auth
 */
class Auth extends React.Component {
	render() {
		return (
			<Form inputs={inputs} onSubmit={this.onAuth.bind(this)}/>
		);
	}
	onAuth(data) {

	}

}

export default Auth;
