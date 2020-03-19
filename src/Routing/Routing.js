import React from 'react'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Sign from '../component/sign'
import Login from '../component/login'
import Table from '../component/table'
import Home from '../component/home'
import ChatBox from '../component/chatbox'
import Like from '../component/like'
import Counter from './../Hoc/clickCounter'
import Hover from './../Hoc/clickHover'


class Routing extends React.Component{
    render(){
      return(
        <React.Fragment>
        <Router>
          <Switch>
            <Route  exact={true} path='/' component={Sign}   />
            <Route  path='/sign' component={Sign}   />
            <Route path ='/login' component={Login} />
            <Route path ='/table' component={Table} />
            <Route path='/home'  component={Home}  />
            <Route path='/chatbox' component={ChatBox} />
            <Route path ='/like' component={Like}  />
            <Route path ='/clickCounter' component={Counter}  />
            <Route path ='/clickHover' component={Hover}  />
          </Switch>
        </Router>
        </React.Fragment>
      )
    }
}
export default Routing