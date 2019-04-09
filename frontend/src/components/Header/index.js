import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { map } from 'lodash-es';
import { pages as selectPages } from '../../redux/pages/selectors';

class Header extends PureComponent {

	renderPages() {
		return map(this.props.pages, page => {
			return (
				<Link className="Header--nav__link" to={`/${page.URLPath}`}>{page.Title}</Link>
			)
		})
	}

	render() {
		return (
			<div className="Header">
				<div className="Header--left">
					<img className="Header--left__logo" src={require('../../assets/logos/text_white.png')} alt="Junction wordmark" />
				</div>
				<nav className="Header--nav">
					<Link className="Header--nav__link" to="/">Home</Link>
					{this.renderPages()}
				</nav>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	pages: selectPages(state),
})

export default connect(mapStateToProps)(Header);
