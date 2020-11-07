import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Form from "./Form";
import Active from "./Active"
import Complete from "./Complete"


function App() {

    return(
        <div className="divWrapper">
            <h1>#todo</h1>
            <nav>
                <ul>
                    <li><Link to="/all">All</Link></li>
                    <li><Link to="/active">Active</Link></li>
                    <li><Link to="/complete">Complete</Link></li>
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path="/">
                    <Form />
                </Route>
                <Route path="/active">
                    <Active />
                </Route>
                <Route path="/Complete">
                    <Complete />
                </Route>
            </Switch>
            <Form />
        </div>
    )
}
export default App