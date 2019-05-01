import { createWidgetFactory, tsx } from '@dojo-labs/framework/widget-core/tsx';

import * as css from './Body.m.css';

const createWidget = createWidgetFactory({});

export const Body = createWidget(() => {
	return (
		<div classes={[css.body]}>
			<ul classes={[css.articles]}></ul>
		</div>
	);
});

export default Body;
