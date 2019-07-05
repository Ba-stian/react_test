import React from 'react';
import reviews from './reviews.css';
import PropTypes from 'prop-types';


const Reviews = (props) => (
	<div className={`${reviews.reviews} ${props.className || ''}`}>
		<img src={require('../../img/trophy.svg')} alt="trophy"
			className={reviews.img1}/>
		<p>Более 50 отзывов с оценкой </p>
		<img src={require('../../img/stars.svg')} alt="stars"
			className={reviews.img2}/>
	</div>
);

Reviews.propTypes = {
	className: PropTypes.string.isRequired,
};

export default Reviews;
