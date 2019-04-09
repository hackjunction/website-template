import React, { PureComponent } from 'react';
import './style.scss';

class Divider extends PureComponent {

	render() {

		let className = 'Divider';

		if (this.props.sm) {
			className += ' Divider-sm';
		}

		if (this.props.lg) {
			className += ' Divider-lg';
		}

		return (
			<div className={className} />
		)
	}
}

export default Divider;