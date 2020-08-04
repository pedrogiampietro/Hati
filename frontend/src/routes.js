import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import AccountCharacters from './screens/Account/Characters'
import AccountCharactersCreate from './screens/Account/Characters/Create'


function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/sign-in' component={ SignIn } />
            <Route path='/sign-up' component={ SignUp } />
            <Route path='/account/characters' exact component={ AccountCharacters } />
            <Route path='/account/characters/create' component={ AccountCharactersCreate } />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;