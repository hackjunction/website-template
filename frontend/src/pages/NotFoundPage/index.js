import React, { PureComponent } from 'react'
import './style.scss';

import BasicSection from '../../components/BasicSection';
import HeaderImage from '../../components/HeaderImage';

import MEDIA_KEYS from '../../redux/mediafields/keys';
import TEXT_KEYS from '../../redux/textfields/keys';

class NotFoundPage extends PureComponent {

	render() {
		return (
			<div>
				<HeaderImage imageKey={MEDIA_KEYS.notFoundPageHeaderImage} />
				<BasicSection titleKey={TEXT_KEYS.notFoundPageTitle} bodyKey={TEXT_KEYS.notFoundPageBody} />
			</div>
		)
	}
}

export default NotFoundPage