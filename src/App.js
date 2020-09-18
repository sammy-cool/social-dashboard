import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'


class App extends React.Component{
	state={
		loggedIn:false
	}
	setLoggedIn = (loggedIn) => {
		this.setState({loggedIn})
	}
	render(){
		return(
			<div>
			<BrowserRouter>
			{this.state.loggedIn && <Route path="/" render={(props)=> <Dashboard {...props} setLoggedIn={this.setLoggedIn}/>}/>}
			{!this.state.loggedIn && <Route path="/" render={(props)=> <Login {...props} setLoggedIn={this.setLoggedIn}/>}  />}
			
			
			</BrowserRouter>
			</div>
			)
	}
}

export default App