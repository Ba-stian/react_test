import React from 'react';
import first from './first section.css';
import Reviews from '../../widgets/reviews/reviews.jsx';
import PropTypes from 'prop-types';


/**
 * @classdesc class for First Section
 */
class FirstSection extends React.Component {
	/**
	 * @param {data} props
	 */
	constructor(props) {
		super(props);
		this.props = props;
	}

	/**
	 * @return {FirstSection} markup
	 */
	render() {
		const Details = (props) => (
			<div className={first.details}>
				<img src={props.src} alt="icon" className={first.icons}/>
				<p className={first.text}>{props.description}</p>
			</div>
		);
		return 	(
			<div className={first.container}>
				<div className={first.wrapper}>
					<div className={first.column1}>
						<h2 className={first.header}>{this.props.content.name}</h2>
						<p className={first.paragraph}>
							{this.props.content.description}</p>
						<Details src={require('../../img/1.svg')}
							description={`${this.props.content.quantity} часа съёмки`}/>
						<Details src={require('../../img/4.svg')}
							description={`${this.props.content.languages[0]}, 
						${this.props.content.languages[1]}`}/>
						<Details src={require('../../img/1.svg')}
							description={`От ${this.props.content.price} ₽`}/>
						<Details src={require('../../img/3.svg')}
							description={this.props.content.city}/>
						<Details src={require('../../img/2.svg')}
							description={`Более ${this.props.content.results.photos},
						фотографий`}/>
						<Reviews className={''}/>
					</div>
					<div className={first.column2}>
						<img
							src={`${this.props.content.images[0].url_original}`}
							alt="photo" className={first.image}/></div>
				</div>
			</div>
		);
	}
}

FirstSection.propTypes = {
	content: PropTypes.object.isRequired,
};

export default FirstSection;
