import React, { Component, useRef } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Usercard.css'

export class Usercard extends Component {

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
                           <Link to={`/usercard/${user._id}`}>
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

export default Usercard
