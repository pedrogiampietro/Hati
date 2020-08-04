import React from 'react'
// import Routes from './routes'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import AccountCharacters from './screens/Account/Characters'
import AccountCharactersCreate from './screens/Account/Characters/Create'

import './assets/css/app.bundle.css'; 
import './assets/css/vendors.bundle.css'; 
import '../node_modules/bootstrap/js/src/modal'


const App = () => {
    return (

    <BrowserRouter>
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
    </BrowserRouter >
    
    )
} 

export default App