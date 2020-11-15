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
import ProtectedRoute from './helpers/ProtectedRoute'

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
					<Route path="/sign-in" component={SignIn} />
					<Route path="/sign-up" component={SignUp} />
					<Route path="/forgot" component={ForgotPassword} />
					<Route path="/reset" component={ResetPassword} />

					{/* Protected Routes */}
					<ProtectedRoute path="/dashboard" component={Dashboard} />
					<ProtectedRoute path="/account/profile" component={AccountProfile} />
					<ProtectedRoute
						path="/account/profile_name"
						component={ProfileName}
					/>
					<ProtectedRoute path="/account/avatar" component={ProfileAvatar} />
					<ProtectedRoute path="/account/password" component={ChangePassword} />
					<ProtectedRoute
						path="/account/characters/create"
						component={AccountCharactersCreate}
					/>
					{/* Finaly Protected Routes */}

					<Route path="/account/characters" component={AccountCharacters} />
					<Route path="/highscores" component={Highscores} />
					<Route path="/character/:name" component={Character} />
					<Route path="/PageSearch" component={PageSearch} />
					<Route exact path="/forum" component={Forum} />
					<Route exact path="/forum/:board_id" component={Threads} />
					<Route exact path="/forum/:board_id" component={CreateThread} />
					<Route
						exact
						path="/forum/thread/:board_id/:discussion"
						component={Discussions}
					/>
					<Route exact path="/forum/post/edit/:id" component={EditPost} />
					<Route path="/" component={Home} />
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
