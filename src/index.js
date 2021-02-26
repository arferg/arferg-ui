import React from "react";
import {render} from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {Something} from "./app/components/Something";
import {PageNotFound} from "./app/components/PageNotFound/PageNotFound";

class HelloMessage extends React.Component {
    render() {
        return <div className="container">
                <h1>Hello {this.props.name}</h1>

            <Something />
        </div>
    }
}

render(
    <BrowserRouter>
        <div className={"app-container"}>
            <Switch>
                <Route exact path="/" component={HelloMessage} />
                {/*<Route exact path={PagePaths.ACTIVITY} component={AllDocumentActivity} />*/}
                <Route path="/404" component={PageNotFound} />
                <Redirect to="/404" />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
)
