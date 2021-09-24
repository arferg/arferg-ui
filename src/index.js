import "regenerator-runtime/runtime";   // lets you use async/await. No need to add any dependencies because babel-runtime depends on regenerator-runtime already
import React from "react"
import {render} from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import {Something} from "./app/components/Something"
import {PageNotFound} from "./app/components/PageNotFound/PageNotFound"
import "./index.scss"
import {ConnectedRouter, routerMiddleware} from "connected-react-router"
import {createBrowserHistory} from "history"
import {Provider} from "react-redux"
import {applyMiddleware, compose, createStore} from "redux"
import reducers from "./app/store/ReduxReducers"
import thunk from "redux-thunk";

const HelloMessage = (props) => {
    return <div className="container">
            {/*<h5>Hello</h5>*/}

        <Something />
    </div>
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.location.hostname !== "prod"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const history = createBrowserHistory({
    basename: window.location.pathname.startsWith("/something") ? "/something" : "/"
});

const store = createStore(reducers(history), composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))));

render(
    <Provider store={store}>
        <BrowserRouter>
            <div className={"app-container"}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={HelloMessage} />
                        {/*<Route exact path={PagePaths.ACTIVITY} component={AllDocumentActivity} />*/}
                        <Route path="/404" component={PageNotFound} />
                        <Redirect to="/404" />
                    </Switch>
                </ConnectedRouter>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)
