import React from 'react'
import axios from 'axios'

class Dashboard extends React.Component {
    constructor() {
    super()
    this.state = {
        users: {},
        post:[]
    }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.setLoggedIn(false)
    }

    componentDidMount() {
        const userId=localStorage.getItem("storedId")
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
            //console.log(response)
        const users= response.data
        this.setState({
            users
            })
        console.log(this.state.users)
        })

        .catch((err) => {
            console.log(err)
        })
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response)=>{
        // console.log(response.data)
        const post=response.data
        this.setState({post})
    })
    .catch((err) => {
            console.log(err)
        })
    }

    render() {
        
        return (
          <div>
          <div> 
          <button onClick={this.handleSubmit}>Logout</button>
          </div>
          <div>
             { Object.keys(this.state.users).length !=0 && (
              <div>
               <h1> Name-{this.state.users.name} </h1>
                <h3>Email-{this.state.users.email} </h3>
                <h1>Company</h1>
                <h3>{this.state.users.company.name}</h3>
              </div>
             )     
         }
         </div>
            
              <div>
              <div>
               {
                this.state.post.map((post)=>{
                    return (
                        <div>
                        <h4>POST-Title</h4>
                        <p>{post.title}</p>
                        </div>)
                })  
         }
         </div>
            
              </div>

          </div>
       )
    }
}

export default Dashboard