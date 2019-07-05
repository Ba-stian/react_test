import React from 'react';
import third from './third section.css';


const ThirdSection = () => (
	<div className={third.wrapper}>
		<div className={third.container}>
			<div className={third.about}>
				<h3 className={third.header}>Об организаторе:</h3>
				<p className={third.paragraph}>Всем привет! Я фотограф Мария!
						И по мимо фотосъемки я так же являюсь членом группы
						экспертов
						туристической отрасли, которые хорошо разбираются в
						маркетинге,
						операциях и услугах обслуживания клиентов,
						специализирующихся на
						совместном использовании и частных турах.</p>
				<p className={third.paragraph}>Сначала мы (я и моя команда)
						изучаем интересы клиентов,
						а затем придумываем подходящее решение, которое
						соответствует
						бюджету и планам клиента. Мы никогда не зависим от
						субпоставщиков
						и не свяжемся…</p>
				<a href="#" className={third.link}/>
				<h3 className={third.header}>Что я предоставлю:</h3>
				<p className={third.paragraph2}>Встречу вас на машине
						после длительного перелёта.
						Качественный подбор места и локации для вашей съемки.
						При необходимости всегда возможно прерваться на
						обед/ужин.
						Более 50 фотографий на выходе с обработкой и
						замечательные впечатления о Дубае !
				</p>
				<a href="#" className={third.link}/>
			</div>
			<div className={third.photographer}>
				<img src={require('../../img/person.svg')} alt="person"
					className={third.photo}/>
				<img src={require('../../img/heart.svg')} alt="heart"
					className={third.heart}/>
				<p className={third.name}>Марина Иванова</p>
				<h3 className={third.photographer_head}>Фотограф</h3>
				<a href="#" className={third.photographer_link}>Показать больше
					информации о фотографе</a>
			</div>
		</div>
	</div>
);

export default ThirdSection;
