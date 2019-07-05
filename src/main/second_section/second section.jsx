import React from 'react';
import pics from '../../img/pic';
import second from '../second_section/second section.css';

/**
 * @classdesc class for Second Section
 */
class SecondSection extends React.Component {
	/**
	 * @return {SecondSection} markup
	 */
	render() {
		const Pics = pics.map(({id, src, description}) =>
			<img key={id} src={src} alt={description} className={second.pic}/>);
		return (
			<div className={second.wrapper}>
				<div className={second.container}>
					<h3 className={second.header}>Фотографии пакета:</h3>
					<div className={second.pics}>
						{Pics}
					</div>
					<a href="#" className={second.link}/>
				</div>
			</div>
		);
	}
}

export default SecondSection;
