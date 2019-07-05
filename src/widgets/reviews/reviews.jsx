import React from 'react';
import reviews from './reviews.css';


const Reviews = () => (
	<div className={reviews.reviews}>
		<img src={require('../../img/trophy.svg')} alt="trophy"
			className={reviews.img1}/>
		<p>Более 50 отзывов с оценкой </p>
		<img src={require('../../img/stars.svg')} alt="stars"
			className={reviews.img2}/>
	</div>
);

export default Reviews;
