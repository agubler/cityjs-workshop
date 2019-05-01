import { createWidget, tsx } from '@dojo-labs/framework/widget-core/tsx';

import Header from './Header';
import Body from './Body';

const HackerNews = createWidget(() => (
	<div>
		<Header />
		<Body />
	</div>
));

export default HackerNews;
