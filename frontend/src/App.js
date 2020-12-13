import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { initAccount } from './actions/AccountActions'

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import AccountProfile from './screens/Account/Profile'
import ProfileName from './screens/Account/ProfileName'
import ProfileAvatar from './screens/Account/ProfileAvatar'
import SignUp from './screens/SignUp'
import Dashboard from './screens/Dashboard'
import AccountCharacters from './screens/Account/Characters'
import AccountCharactersCreate from './screens/Account/Characters/Create'
import Highscores from './screens/Highscores'
import Character from './screens/Character'
import Forum from './screens/Forum'
import Threads from './screens/Forum/Threads'
import CreateThread from './screens/Forum/Threads/Create'
import Discussions from './screens/Forum/Discussions'
import EditPost from './screens/Forum/Discussions/EditPost'
import ForgotPassword from './screens/Account/ForgotPassword'
import ResetPassword from './screens/Account/ResetPassword'
import ChangePassword from './screens/Account/ChangePassword'
import Downloads from './screens/Downloads'
import Guilds from './screens/Guilds'
import GuildList from './screens/Guilds/GuildList'
import Online from './screens/Online'

import PageSearch from './components/PageSearch'
import ProtectedRoute from './helpers/ProtectedRoute'

import 'react-toastify/dist/ReactToastify.min.css'
import './assets/css/styles.css'
import './assets/css/styles-bundle.css'
import './assets/css/style-dark.css'
import './assets/css/toastr.css'
import '../node_modules/bootstrap/js/src/modal'
import '../node_modules/bootstrap/js/src/collapse'
import '../node_modules/bootstrap/js/src/tab'

import './assets/js/scripts'

const App = ({ initAccount }) => {
  useEffect(() => {
    initAccount()
  }, [initAccount])

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot" component={ForgotPassword} />
          <Route exact path="/reset" component={ResetPassword} />

          {/* Protected Routes */}
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute
            exact
            path="/account/profile"
            component={AccountProfile}
          />
          <ProtectedRoute
            exact
            path="/account/profile_name"
            component={ProfileName}
          />
          <ProtectedRoute
            exact
            path="/account/avatar"
            component={ProfileAvatar}
          />
          <ProtectedRoute
            exact
            path="/account/password"
            component={ChangePassword}
          />
          <ProtectedRoute
            exact
            path="/account/characters/create"
            component={AccountCharactersCreate}
          />
          {/* Finaly Protected Routes */}

          <Route
            exact
            path="/account/characters"
            component={AccountCharacters}
          />
          <Route exact path="/highscores" component={Highscores} />
          <Route exact path="/character/:name" component={Character} />
          <Route exact path="/PageSearch" component={PageSearch} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/forum/:board_id" component={Threads} />
          <Route exact path="/forum/:board_id" component={CreateThread} />
          <Route
            exact
            path="/forum/thread/:board_id/:discussion"
            component={Discussions}
          />
          <Route exact path="/forum/post/edit/:id" component={EditPost} />

          <Route exact path="/downloads" component={Downloads} />

          <Route exact path="/guilds" component={Guilds} />

          <Route exact path="/guilds/:id" component={GuildList} />

          <Route exact path="/online" component={Online} />

          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
  }
}

export default connect(mapStateToProps, { initAccount })(App)
