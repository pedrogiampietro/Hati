import React, { Component } from 'react'
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
            <nav>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item"><Link to="/sign-in">Sign-in</Link> </li>
                    <li className="list-group-item"><Link to="/sign-up">Sign-up</Link> </li>
                    <li className="list-group-item"><Link to="/account/characters">Characters</Link> </li>
                    <li className="list-group-item"><Link to="/account/characters/create">Create Character</Link> </li>
                </ul>
            </nav>
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