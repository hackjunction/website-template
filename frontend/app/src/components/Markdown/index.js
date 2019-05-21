import React, { PureComponent } from 'react';
import './style.scss';

import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';

class Markdown extends PureComponent {
	render() {
		const { source } = this.props;
		return (
			<div className="Markdown">
				<ReactMarkdown
					plugins={[breaks]}
					source={source}
					renderers={{
						delete: () => <br />
					}}
				/>
			</div>
		);
	}
}

export default Markdown;
