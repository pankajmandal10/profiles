import React, { Component } from 'react'
import Usercard from './section/Usercard'
import Details from './section/Details'
import {Route} from "react-router-dom"




export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Usercard} exact />
                    <Route path="/usercard" component={Usercard} exact  />
                    <Route path="/usercard/:id" component={Details} exact />
            </section>
        )
    }
}

export default Section
