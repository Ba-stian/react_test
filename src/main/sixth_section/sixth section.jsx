import React from 'react';
import sixth from './sixth section.css';
import PropTypes from 'prop-types';


const Comment = ({source, name, profession, rate, review, date}) => (
	<div className={sixth.comment}>
		<img src={source} alt="person" className={sixth.person}/>
		<div className={sixth.column}>
			<p className={sixth.name}>{name}</p>
			<p className={sixth.profession}>{profession}</p>
			<div className={sixth.row}>
				<img className={sixth.stars} src={require('../../img/stars.svg')}
					alt="stars"/>
				<img className={sixth.check} src={require('../../img/check.svg')}
					alt="check"/>
				<p className={sixth.rate}>{rate}</p>
			</div>
			<p className={sixth.review}>{review}</p>
			<p className={sixth.date}>{date}</p>
		</div>
	</div>
);

const SixthSection = () => (
	<div className={sixth.wrapper}>
		<div className={sixth.container}>
			<h5 className={sixth.header}>Отзывы:</h5>
			<Comment rate={'Супер! Я бы заказала съемку снова!'}
				review={'Хотим выразить огромную благодарность вашей компании!' +
				'Не смотря на то что погода была холодная, на самом шаре оказалось' +
				'очень тепло, это безумно порадовало. Виды открываются потрясающие.' +
				'Романтика одним словом!'}
				name={'Александра Тихонова'}
				source={require('../../img/person1.svg')}
				profession={'Арт-директор'} date={'27 Апреля, 2019г.'}/>
			<Comment rate={'Супер! Я бы заказал съемку снова!'}
				review={'Восторг! :) Очень понравилось :)' +
				'Захватили последний теплый, солнечный октябрьский день :)' +
				'Впечатлило всё: как надувают шар, подъём, полёт, приземление. \n' +
				'Организация полёта отличная. Спасибо!'}
				name={'Григорий Хабаров'}
				source={require('../../img/person2.svg')}
				profession={'Фотограф'}
				date={'19 Апреля, 2019г.'}/>
			<Comment rate={'Супер! Я бы заказал съемку снова!'}
				review={'Круто-круто-круто!!! Отмечали мой ДэРэ.' +
				'Отлично провели время!!! Кстати закуски были вкусными' +
				'и сытными))Мы \n' + 'с собой ничего не брали. Сами много' +
				'фоткались,поэтому воспоминания' +'обалденные!!!))' +
				'А еще нам всем напечатали по сертификату' + 'воздухоплавателя,' +
				'правда некоторые ленятся за ним съездить)))' +'Но все равно' +
				'приятно. Короче, Презентстар – проверено. Оценка: пять!'}
				name={'Михаил Громов'}
				source={require('../../img/person3.svg')}
				profession={' '} date={'11 Апреля, 2019г.'}/>
			<a href="#" className={sixth.link}/>
		</div>
	</div>
);

Comment.propTypes = {
	source: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	profession: PropTypes.string.isRequired,
	rate: PropTypes.string.isRequired,
	review: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};

export default SixthSection;
