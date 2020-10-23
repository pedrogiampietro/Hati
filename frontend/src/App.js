import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { initAccount } from './actions/AccountActions'

import Home from './screens/Home'
import SignIn from './screens/SignIn'
import AccountProfile from './screens/Account/Profile'
import SignUp from './screens/SignUp'
import Dashboard from './screens/Dashboard'
import AccountCharacters from './screens/Account/Characters'
import AccountCharactersCreate from './screens/Account/Characters/Create'
import Highscores from './screens/Highscores'
import Character from './screens/Character'
import Forum from './screens/Forum'

import PageSearch from './components/PageSearch'

import './assets/css/styles.css'
import './assets/css/styles-bundle.css'
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
					<Route path="/sign-in">
						<SignIn />
					</Route>

					<Route path="/sign-up">
						<SignUp />
					</Route>

					<Route path="/dashboard">
						<Dashboard />
					</Route>

					<Route path="/account/profile_info">
						<AccountProfile />
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

					<Route path="/character/:name">
						<Character />
					</Route>

					<Route path="/PageSearch">
						<PageSearch />
					</Route>

					<Route path="/forum">
						<Forum />
					</Route>

					<Route path="/">
						<Home />
					</Route>
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
