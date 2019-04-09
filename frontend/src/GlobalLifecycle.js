import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateTextfields } from './redux/textfields/actions';
import { updateMediafields } from './redux/mediafields/actions';
import { updatePages } from './redux/pages/actions';

/** A component which renders nothing, but you can use its lifecycle methods to do things affecting the whole app, such as:
 * 
 * - Fetch content from the API and store it in Redux
 * - Initialize services like Google Analytics
 * - Show a privacy popup to users on first visit
 * - etc...
 * 
 */

class GlobalLifecycle extends Component {

	componentDidMount() {
		this.props.updateTextfields();
		this.props.updateMediafields();
		this.props.updatePages();
	}

	render() {
		return null;
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
	updateTextfields: () => dispatch(updateTextfields()),
	updateMediafields: () => dispatch(updateMediafields()),
	updatePages: () => dispatch(updatePages()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalLifecycle)