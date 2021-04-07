import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Profile.css'

export class Profiles extends Component {

    static contextType = DataContext;

    render() {
        const {userdata} = this.context;
        return (
        <aside class="profile-card">
            <div className = "heading">
            <h3>Select an account</h3>
            </div>
             <header>
              {
                   userdata.map(user =>(
                       <div className="card" key={user._id}>
                           <Link to={`/profile/${user._id}`}>
                               <img src={user.profilepicture} alt=""/>
                           </Link>
                           <hr/>
                               <Link to={user._id}>
                                       <p>{user.name}</p>
                              </Link>
                               
                       </div>
                   ))
               }
            </header>
            </aside>
        )
    }
}

export default Profiles
