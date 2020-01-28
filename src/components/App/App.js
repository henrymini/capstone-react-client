import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Poem from '../poems/Poem'
import PoemCreate from '../poems/PoemCreate'
import Poems from '../poems/Poems'
import PoemEdit from '../poems/PoemEdit'
// import Homepage from '../Home/Home'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <AuthenticatedRoute exact user={user} path='/poems/:id' render={(props) => (
            <Poem user={user} match={props.match} history={props.history} alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} exact path='/' render={({ location }) => (
            <Poems user={user} location={location} />
          )} />
          <AuthenticatedRoute user={user} path='/create-poem' render={() => (
            <PoemCreate alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/poems/:id/edit' render={({ match }) => (
            <PoemEdit alert={this.alert} user={user} match={match} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          {
          // <Route exact path='/hgv' render={() => (
          //   <Homepage alert={this.alert} />
          // )} />
          }
          <Route exact path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
