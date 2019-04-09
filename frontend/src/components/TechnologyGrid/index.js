import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

import { map } from 'lodash-es';
import { connect } from 'react-redux';

import { technologies as selectTechnologies } from '../../redux/technologies/selectors';
import { updateTechnologies } from '../../redux/technologies/actions';

class TechnologyGrid extends PureComponent {
	static propTypes = {
		technologies: PropTypes.array.isRequired,
		updateTechnologies: PropTypes.func.isRequired,
	}

	static defaultProps = {
		technologies: [],
	}

	componentDidMount() {
		this.props.updateTechnologies();
	}

	renderTechnologies() {
		const { technologies } = this.props;
		return map(technologies, technology => {
			return (
				<div className="TechnologyGrid--item">
					<img className="TechnologyGrid--item__logo" src={technology.logo.url} alt={technology.name} />
				</div>
			)
		})
	}

	render() {
		return (
			<div className="TechnologyGrid">
				<h3 className="TechnologyGrid--title">Here's a few of the technologies we love to use</h3>
				<div className="TechnologyGrid--items">
					{this.renderTechnologies()}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	technologies: selectTechnologies(state),
})

const mapDispatchToProps = (dispatch) => ({
	updateTechnologies: () => dispatch(updateTechnologies())
})

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyGrid);