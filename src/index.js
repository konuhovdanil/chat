import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducers';
import state from './state';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import AppContainer from "./containers/AppContainer";
import Chat from "./components/Chat";

const store = createStore(reducer, state);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path={'/'} component={AppContainer}/>
                <Route path={'/chat'} component={Chat}/>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
