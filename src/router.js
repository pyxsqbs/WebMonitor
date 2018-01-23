import React from 'react';
import {Router, Route, IndexRoute} from 'dva/router';


import IndexPage from "./routes/IndexPage.js";

import CustomServer from "./routes/IndexPage/CustomServer.js";

import CommoditySearch from "./routes/IndexPage/CommoditySearch.js";

function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Route path="/" component={IndexPage}>
                <IndexRoute component={CommoditySearch}/>
                <Route path="/CustomServer" component={CustomServer}/>
            </Route>
        </Router>
    );
}

export default RouterConfig;
