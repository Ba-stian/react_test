import React from 'react';
import Button from '../widgets/button/button.jsx';
import header from './header.css';


const Header = () => (
	<div className={header.header}>
		<div className={header.wrapper}>
			<div className={header.left}>
				<a href="#" className={header.logo}>take
					<span className={header.look}>look</span>
				</a>
				<p className={header.number}>
					<span className={header.phone}>Телефон: </span>
						8(800)-123-12-12</p></div>
			<Button text={'Обратный звонок'} className={header.btn}
				action={()=>'Hello'}/>
		</div>
	</div>
);

export default Header;
