import React from 'react';
import Button from '../../widgets/button/button.jsx';
import photosession from './photosession.css';


const Photosession = () => (
	<div className={photosession.background}>
		<div className={photosession.wrapper}>
			<h1 className={photosession.header}>Эксклюзивная
				<span className={photosession.red}> фотосессия </span>
				на воздушном шаре в Москве</h1>
			<div className={photosession.book}>
				<p className={photosession.price}>
					Стоимость:
					<span className={photosession.ruble}>1500₽</span></p>
				<p className={photosession.percent}>%</p>
			</div>
			<Button text={'Забронировать место'}
				className={photosession.btn}
				action={() => window}/>
		</div>
	</div>
);

export default Photosession;
