import React from 'react';
import fifth from './fifth section.css';
import PropTypes from 'prop-types';


const Info = (props) => (
	<div className={fifth.info}>
		<div className={fifth.paragraph}>
			<p>{props.question}</p>
			<p>{props.answer}</p>
		</div>
		<img src={props.source} alt="pic" className={fifth.pics}/>
	</div>
);

const FifthSection = () => (
	<div className={fifth.wrapper}>
		<div className={fifth.container}>
			<hr className={fifth.line}/>
			<iframe className={fifth.card}
				src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3610.2396806845136!2d55.271833533729534!3d25.195138407401497!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1562351197369!5m2!1sru!2sru"/>
			<div className={fifth.ellipse}/>
			<div className={fifth.meet}>
				<p className={fifth.meet_where}>Где встречаемся</p>
				<p className={fifth.meet_there}>Яхрома</p>
			</div>
			<div className={fifth.block}>
				<Info question={'Где встречаемся?'} answer={'Яхрома'}
					source={require('../../img/num1.svg')}/>
				<Info question={'Время съемки'} answer={'3 часа'}
					source={require('../../img/num2.svg')}/>
				<Info question={'Мест осталось:'} answer={'2 места'}
					source={require('../../img/num3.svg')}/>
				<Info question={'Мария Иванова'} answer={'Фотограф'}
					source={require('../../img/person.svg')}/>
				<a href="#" className={fifth.link}>Показать больше информации</a>
			</div>
		</div>
	</div>
);

Info.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
};

export default FifthSection;
