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

      <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
    
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <li className="nav-link"><Link to="/">Home</Link> </li>
            </li>
            <li className="nav-item">
              <li className="nav-link"><Link to="/sign-in">Sign-in</Link> </li>
            </li>
            <li className="nav-item">
            <li className="nav-link"><Link to="/sign-up">Sign-up</Link> </li>
            </li>
            <li className="nav-item dropdown">
              <li className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <font color="white"> Teste Dropdown </font>
              </li>
              
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li className="dropdown-item"><Link to="/account/characters"><font color="black">Characters</font></Link> </li>
              <li className="dropdown-item"><Link to="/account/characters/create"><font color="black">Create Characters</font></Link> </li>
              </div>
            </li>
          </ul>
        </div>
      </div>
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