import React, { Component } from 'react'
import {DataContext} from '../Context'
import '../css/Details.css'
  
   export class Details extends Component {
   static contextType = DataContext;
    state = {
        users: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.userdata;
            const data = res.filter(user =>{
                return user._id === this.props.match.params.id
            })
            this.setState({users: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }
    
    render() {
        const {users} = this.state;
        return(
            <>
            {
            users.map(user =>(
            <main>
            <div className="head">
              <p>Profile</p>
              <p>Posts</p>
              <p>Gallery</p>
              <p>ToDo</p>
            </div>
            <div className="header">
              <p>Profile</p>
              <img src={user.profilepicture} alt=""/>
              <strong>{user.name}</strong>

            </div>
        
            <div className = "profile">
             <img src={user.profilepicture} alt=""/>
             <p>{user.name}</p>
             <p>Username: {user.username}</p>
             <p>e-mail: {user.email}</p>
             <p>Phone: {user.phone}</p>
             <p>Website: {user.website}</p>
             {/* <hr /> */}
             <p id = "company" >Company</p>
             <p>Name:{user.company.name}</p>
             <p>catchphrase:{user.company.catchPhrase}</p>
             <p>bs{user.company.bs}:</p>
             <hr/>
             <div id = "vl"></div>
            </div>
            <div className="address">
            <p>Address</p>
            <div className = "map">
            <p>Street:{user.address.street}</p>
            <p>Suit:{user.address.suite}</p>
            <p>City:{user.address.city}</p>
            <p>Zipcode:{user.address.zipcode}</p>
            <img src= {user.address.geo.map} alt="" />
            </div>
            </div>
            </main>
           ))
          } 
        </>   
      )
   }
}
export default Details