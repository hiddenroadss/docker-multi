import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Fibonacci from "./Fibonacci";
import OtherPage from "./OtherPage";

function App() {
    return (
        <Router>
            <div>
                <div>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/other-page"}>Other Page</Link>
                </div>
                <div className="App">
                    <Route exact path={"/"} component={Fibonacci}/>
                    <Route path={"/other-page"} component={OtherPage}/>

                </div>
            </div>
        </Router>
    );
}

export default App;
