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

import PageSearch from './components/PageSearch'

import 'react-toastify/dist/ReactToastify.min.css'
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

					<Route path="/forgot">
						<ForgotPassword />
					</Route>

					<Route path="/reset">
						<ResetPassword />
					</Route>

					<Route path="/dashboard">
						<Dashboard />
					</Route>

					<Route path="/account/profile">
						<AccountProfile />
					</Route>

					<Route path="/account/profile_name">
						<ProfileName />
					</Route>

					<Route path="/account/avatar">
						<ProfileAvatar />
					</Route>

					<Route path="/account/password">
						<ChangePassword />
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

					<Route exact path="/forum">
						<Forum />
					</Route>

					<Route exact path="/forum/:board_id">
						<Threads />
					</Route>

					<Route exact path="/forum/:board_id">
						<CreateThread />
					</Route>

					<Route exact path="/forum/thread/:board_id/:discussion">
						<Discussions />
					</Route>

					<Route exact path="/forum/post/edit/:id">
						<EditPost />
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
