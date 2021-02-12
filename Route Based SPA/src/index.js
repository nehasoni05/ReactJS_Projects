import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Home from "./pages/home.js";
import SignIn from "./pages/signIn.js";
import SignUp from "./pages/signUp.js";

class Cq extends React.Component {
	render() {
		return (
			<>
            
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/signIn" component={SignIn}/>
              <Route exact path="/signUp" component={SignUp}/>
            </Switch>
            
            </>
		)
	}
}

ReactDOM.render(
	<BrowserRouter>
        <Cq/>
    </BrowserRouter>,
	document.getElementById('root')
);
