import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './style.scss';

import { connect } from 'react-redux';
import { mediafields as selectMediafields } from '../../redux/mediafields/selectors';
import { textfields as selectTextfields } from '../../redux/textfields/selectors';


class HeaderImage extends PureComponent {

	static propTypes = {
		image: PropTypes.shape({
			url: PropTypes.string.isRequired
		}),
		title: PropTypes.string,
		subtitle: PropTypes.string,
	}

	render() {
		const { image, title, subtitle, } = this.props

		if (!image) {
			return null;
		}

		return (
			<div className="HeaderImage">
				<img className="HeaderImage--image" src={image.url} alt="Header image" />
				<div className="HeaderImage--content">
					<h1 className="HeaderImage--content__title">{title}</h1>
					<p className="HeaderImage--content__subtitle">{subtitle}</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const mediafields = selectMediafields(state);
	const textfields = selectTextfields(state);
	const { imageKey, titleKey, subtitleKey, } = ownProps;
	const image = imageKey ? mediafields[imageKey] : ownProps.image;
	const title = titleKey ? textfields[titleKey] : ownProps.title;
	const subtitle = subtitleKey ? textfields[subtitleKey] : ownProps.subtitle;

	return {
		image,
		title,
		subtitle,
	}
}


export default connect(mapStateToProps)(HeaderImage);