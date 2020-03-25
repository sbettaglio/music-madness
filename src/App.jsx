import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Phish from './pages/Phish'
import Dead from './pages/Dead'
import Amigos from './pages/Amigos'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/phish">Phish</Link>
            </li>
            <li>
              <Link to="/dead">The Grateful Dead</Link>
            </li>
            <li>
              <Link to="/amigos">Los Amigos Invisibles</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/phish" component={Phish}></Route>
        <Route exact path="/dead" component={Dead}></Route>
        <Route exact path="/amigos" component={Amigos}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
