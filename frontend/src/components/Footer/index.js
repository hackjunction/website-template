import React, { PureComponent } from 'react';
import './style.scss';

class Footer extends PureComponent {

	render() {
		return (
			<div className="Footer">
				<span className="Footer--copyright">
					A website template made with{' '}
					<span role="img" aria-label="love">
						💕
                    </span>
					{' '}by the Junction tech team
				</span>
			</div>
		)
	}
}

export default Footer;