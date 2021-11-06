import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import { useCookies } from "react-cookie";
import "./App.css"

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  return (
    <Router>
      <Switch>
        <Route path={"/"+cookies.user} exact={true} component={Home} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/login" exact={true} component={Login} />
      </Switch>
    </Router>
  )
}
export default App;