import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li><Link to="/sign-in">Login</Link> </li>
                    <li><Link to="/sign-up">Register</Link> </li>
                    <li><Link to="/account/character/create">Create Character</Link> </li>
                </ul>
            </nav>

            <Switch>
                <Route path='/sign-in'><h1>Login</h1></Route>
                <Route path='/sign-up'><h1>Register</h1></Route>
                <Route path='/account/character/create'><h1>Create Character</h1></Route>
                <Route path='/'><h1>Home</h1></Route>
            </Switch>    
        </div>
        
        </BrowserRouter>
    )
}

export default App