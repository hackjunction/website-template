import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { connect } from 'react-redux';

import { textfields as selectTextfields } from '../../redux/textfields/selectors';
import CenteredContent from '../CenteredContent';
import Markdown from '../Markdown';

class BasicSection extends PureComponent {

	static propTypes = {
		title: PropTypes.string,
		body: PropTypes.string,
	}

	render() {
		const { title, body } = this.props;

		return (
			<CenteredContent>
				<div className="BasicSection">
					<h2 className="BasicSection--title">{title}</h2>
					<Markdown source={body} />
				</div>
			</CenteredContent>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const textfields = selectTextfields(state);
	const { titleKey, bodyKey } = ownProps;
	const title = titleKey ? textfields[titleKey] : ownProps.title;
	const body = bodyKey ? textfields[bodyKey] : ownProps.body;

	return {
		title,
		body
	}
}

export default connect(mapStateToProps)(BasicSection)