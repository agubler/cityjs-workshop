import renderer from '@dojo-labs/framework/widget-core/vdom';
import { tsx } from '@dojo-labs/framework/widget-core/tsx';

import HackerNews from './HackerNews';

const r = renderer(() => <HackerNews />);
r.mount({ domNode: document.getElementById('app')! });
