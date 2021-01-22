import React from "react";
import {render} from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Something} from "./app/components/Something";

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
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
)
