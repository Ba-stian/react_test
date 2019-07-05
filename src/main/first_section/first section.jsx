import React from 'react';
import first from './first section.css';
import details from './details.js';
import Reviews from '../../widgets/reviews/reviews.jsx';


/**
 * @classdesc Class for First Section
 */
class FirstSection extends React.Component {
	/**
	 * @return {FirstSection} markup
	 */
	render() {
		const Details = details.map(({src, description, text, id}) =>
			<div key={id} className={first.details}>
				<img src={src} alt={description} className={first.icons}/>
				<p className={first.text}>{text}</p>
			</div>);
		return (
			<div className={first.container}>
				<div className={first.wrapper}>
					<div className={first.column1}>
						<h2 className={first.header}>Полет на воздушном
							шаре</h2>
						<p className={first.paragraph}>
							Пикник на воздушном шаре в облаках это именно
							тот подарок, который поможет разделить эмоции
							и впечатления со своими близкими людьми</p>
						{Details}
						<Reviews/>
					</div>
					<div className={first.column2}>
						<img src={require('../../img/pic3.svg')} alt="photo"
							className={first.image}/></div>
				</div>
			</div>
		);
	}
}

export default FirstSection;
