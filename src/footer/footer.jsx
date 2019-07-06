import React from 'react';
import footer from './footer.css';


const Footer = () => (
	<div className={footer.wrapper}>
		<div className={footer.up}>
			<a href="#" className={footer.logo}>take
				<span className={footer.look}>look</span>
			</a>
			<a className={footer.language} href="#">ru
				<img alt="arrow" src={require('../img/arrow.svg')}
					className={footer.arrow}/>
			</a>
			<a className={footer.social} href="#"/>
		</div>
		<div className={footer.down}>
			<div className={footer.block}>
				<div className={footer.pays}>
					<img src={require('../img/pay1.svg')} alt="pay"
						className={footer.pay}/>
					<img src={require('../img/pay2.svg')} alt="pay"
						className={footer.pay}/>
					<img src={require('../img/pay3.svg')} alt="pay"
						className={footer.pay}/>
				</div>
				<div className={footer.pic}>
					<img src={require('../img/support.svg')} alt="support"
						className={footer.support}/></div>
			</div>
		</div>
	</div>
);

export default Footer;
