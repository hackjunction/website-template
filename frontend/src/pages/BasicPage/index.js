import React, { PureComponent } from 'react'
import './style.scss';

import { connect } from 'react-redux';

import { pages as selectPages } from '../../redux/pages/selectors';
import { pageBySlug } from '../../redux/pages/helpers';
import HeaderImage from '../../components/HeaderImage';
import BasicSection from '../../components/BasicSection';
import Divider from '../../components/Divider';
import NotFoundPage from '../NotFoundPage';


class BasicPage extends PureComponent {

	render() {
		const { page } = this.props;

		if (!page) {
			return <NotFoundPage />
		}

		return (
			<div>
				<HeaderImage image={page.HeaderImage} title={page.Title} />
				<Divider />
				<BasicSection body={page.Body} />
				<Divider lg />
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const pages = selectPages(state);
	const { match } = ownProps;
	const page = pageBySlug(pages, match.params.slug)

	return {
		page
	}
}

export default connect(mapStateToProps)(BasicPage);