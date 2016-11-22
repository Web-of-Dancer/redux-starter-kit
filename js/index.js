import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import MyApp from './components/MyApp';
import Board from './components/board';
import NotFound from './components/NotFound';
import configStore from './configStore';

import negativeRoute from './routes/negative';
import hotspotRoute from './routes/hotspot';

// 创建store
var store = configStore();
// 同步browserHistory
var history = syncHistoryWithStore(browserHistory, store);
// router配置
var rootRoute = {
	path: '/',
	component: MyApp,
	indexRoute: { component: Board },
	childRoutes: [
		negativeRoute,
		hotspotRoute,
		// require('./routes/special'),
		// require('./routes/digging')
		{path: 'board', component: Board},
		{
			path: '*',
			component: NotFound
		}
	]
};

render(
	<Provider store={store}>
		<Router history={history} routes={rootRoute} />
	</Provider>,
	document.getElementById('reactapp')
);