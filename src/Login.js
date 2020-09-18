import React from 'react'
import axios from 'axios'

class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            email: '',
            users: [],
            err_msg: '',
            format: ''

        }
    }

    handleChange=(e)=> 
    {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
             console.log(response.data)
            const users = response.data.find(ele => ele.email === this.state.email)
           if(users){
               localStorage.setItem('storedId', users.id)
               this.setState({  users })
               this.props.setLoggedIn(true)
           }
           else if(!this.state.email.includes('@gmail.com')){
                this.setState({ format: 'invalid format' })
           }
           else{
              
               this.setState({err_msg: 'Please enter valid mail' })
           }
          
        })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <h1>Home page</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="Email">Email:-</label>
                    <input 
                    type="text"
                    id="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    </form>
                    <p style={{color:"red"}}> {this.state.err_msg} </p>
                    <p style={{color:"red"}}> {this.state.format} </p>
                </div>
            </div>
        )
    }
}
export default Login