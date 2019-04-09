import React, { PureComponent } from 'react';
import './style.scss';

class CenteredContent extends PureComponent {

	render() {
		return (
			<div className="CenteredContent">
				<div className="CenteredContent--inner">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default CenteredContent;