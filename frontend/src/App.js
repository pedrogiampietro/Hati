import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import AccountCharacters from './screens/Account/Characters'
import AccountCharactersCreate from './screens/Account/Characters/Create'


const App = () => {
    return (
        <BrowserRouter>
        <div>



    <Switch>
        <Route path="/sign-in">
            <SignIn />
        </Route>
        <Route path="/sign-up">
            <SignUp />
        </Route>
        <Route path="/account/characters/create">
        <AccountCharactersCreate />
        </Route>
        <Route path="/account/characters">
            <AccountCharacters />
        </Route>
        <Route path="/">
            <Home />
        </Route>

    </Switch>
        </div>
        </BrowserRouter >
    )
} 

export default App