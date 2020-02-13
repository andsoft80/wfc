import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        {/* <Provider store={store}> */}
            <main>
                <Switch>
                    {/* <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/forgotpass' component={ForgotPass} />
                    <Route exact path='/signin' component={SignIn} /> */}
                    <Route exact path='*' component={App} />
                    {/* <Route exact path='/profile' component={App} /> */}


                </Switch>
            </main>
            

        {/* </Provider> */}

    </BrowserRouter>

), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
