import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Account from './components/Account'
import Popular from './components/Popular'
import MovieItemDetails from './components/MovieItemDetails'
import SearchRoute from './components/Search'

import appContext from './Context/appContext'

import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

class App extends Component {
  state = {username: '', password: ''}

  triggerChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  triggerChangePassword = event => {
    this.setState({password: event.target.value})
  }

  triggerLogout = props => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
    this.setState({username: '', password: ''})
  }

  render() {
    const {username, password} = this.state

    return (
      <appContext.Provider
        value={{
          username,
          password,
          triggerChangeUsername: this.triggerChangeUsername,
          triggerChangePassword: this.triggerChangePassword,
          triggerLogout: this.triggerLogout,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/account" component={Account} />
          <ProtectedRoute exact path="/popular" component={Popular} />
          <ProtectedRoute exact path="/search" component={SearchRoute} />
          <ProtectedRoute
            exact
            path="/movies/:id"
            component={MovieItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </appContext.Provider>
    )
  }
}

export default App
