import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import respositories from './pages/Repositories';
import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={respositories} />
            </Switch>
        </BrowserRouter>
    )
}