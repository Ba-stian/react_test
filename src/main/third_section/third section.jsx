import React from 'react';
import third from './third section.css';
import PropTypes from 'prop-types';


const ThirdSection = (props) => (
	<div className={third.wrapper}>
		<div className={third.container}>
			<div className={third.about}>
				<h3 className={third.header}>Об организаторе:</h3>
				<p className={third.paragraph}>
					{props.content.specialist.description}</p>
				<a href="#" className={third.link}/>
			</div>
			<div className={third.photographer}>
				<img src={props.content.specialist.avatar.url_thumbnail} alt="person"
					className={third.photo}/>
				<img src={require('../../img/heart.svg')} alt="heart"
					className={third.heart}/>
				<p className={third.name}>{props.content.specialist.name}</p>
				<h3 className={third.photographer_head}>Фотограф</h3>
				<a href="#" className={third.photographer_link}>Показать больше
					информации о фотографе</a>
			</div>
		</div>
	</div>
);

ThirdSection.propTypes = {
	content: PropTypes.object.isRequired,
};

export default ThirdSection;
