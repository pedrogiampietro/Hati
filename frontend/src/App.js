import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { initAccount } from './actions/AccountActions' 

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import AccountCharacters from './screens/Account/Characters'
import AccountCharactersCreate from './screens/Account/Characters/Create'
import Highscores from './screens/Highscores'

import './assets/css/app.bundle.css'; 
import './assets/css/vendors.bundle.css'; 
import './assets/css/datagrid/datatables/datatables.bundle.css'
import '../node_modules/bootstrap/js/src/modal'

const App = ({ initAccount }) => {

    useEffect(() => {
        initAccount()
    }, [initAccount])

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

                <Route path="/highscores">
                    <Highscores />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
    </BrowserRouter >
    
    )
} 

const mapStateToProps = (state) => {
    return {
        account: state.account.account
    }
}

export default connect(mapStateToProps, { initAccount })(App)