import React from 'react';
import fourth from './fourth section.css';
import Button from '../../widgets/button/button.jsx';
import Reviews from '../../widgets/reviews/reviews.jsx';
import PropTypes from 'prop-types';


const ScheduleCell = (props) => (
	<div className={fourth.cell}>
		<div>
			<p className={fourth.paragraph}>{props.time}</p>
			<img src={require('../../img/price.svg')} alt="price"
				className={fourth.price}/>
			<p className={fourth.place}>Осталось — 1 место</p>
		</div>
		<Button text={'Выбрать'} className={fourth.btn} action={() => true}/>
	</div>
);

const FourthSection = () => (
	<div className={fourth.wrapper}>
		<div className={fourth.container}>
			<h4 className={fourth.header}>Доступная съемка
				в ближайшее время:</h4>
			<div className={fourth.schedule}>
				<p className={fourth.day}>Пятница, 14 сентября</p>
				<img src={require('../../img/calendar.svg')} alt="calendar"
					className={fourth.calendar}/>
				<ScheduleCell time={'15:00 - 18:00'}/>
				<ScheduleCell time={'19:00 - 22:00'}/>
				<Reviews className={fourth.review}/>
			</div>
		</div>
	</div>
);

ScheduleCell.propTypes = {
	time: PropTypes.string.isRequired,
};

export default FourthSection;
