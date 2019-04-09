import React, { PureComponent } from 'react'
import './style.scss';

import BasicSection from '../../components/BasicSection';
import HeaderImage from '../../components/HeaderImage';
import TechnologyGrid from '../../components/TechnologyGrid';
import CenteredContent from '../../components/CenteredContent';
import Divider from '../../components/Divider';
import TEXT_KEYS from '../../redux/textfields/keys';
import MEDIA_KEYS from '../../redux/mediafields/keys';


class HomePage extends PureComponent {

	render() {
		return (
			<div>
				<HeaderImage imageKey={MEDIA_KEYS.homePageHeaderImage} titleKey={TEXT_KEYS.homePageTitle} />
				<Divider />
				<BasicSection bodyKey={TEXT_KEYS.homePageBody} />
				<Divider lg />
				<CenteredContent>
					<TechnologyGrid />
				</CenteredContent>
				<Divider lg />
			</div>
		)
	}
}

export default HomePage