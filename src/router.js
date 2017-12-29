import React from 'react';
import {Router, Route, IndexRoute} from 'dva/router';


import IndexPage from "./routes/IndexPage.js";

import CustomServer from "./routes/IndexPage/CustomServer.js";

function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Route path="/" component={IndexPage}>
                <IndexRoute component={CustomServer}/>
            </Route>
        </Router>
    );
}

export default RouterConfig;
