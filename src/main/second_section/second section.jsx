import React from 'react';
import second from '../second_section/second section.css';
import PropTypes from 'prop-types';

/**
 * @classdesc class for Second Section
 */
class SecondSection extends React.Component {
	/**
	 * @param {data} props
	 */
	constructor(props) {
		super(props);
		this.props = props;
	}
	/**
	 * @return {SecondSection} markup
	 */
	render() {
		const Pics = this.props.content.images.map(({url_original}, i) =>
			<img key={i} src={url_original} alt="pics"
				className={second.pic}/>);
		Pics.pop();
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

SecondSection.propTypes = {
	content: PropTypes.object.isRequired,
};

export default SecondSection;
