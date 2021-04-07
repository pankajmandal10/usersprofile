import React, { Component } from 'react'
import Profiles from './section/Profiles'
import Details from './section/Details'
import {Route} from "react-router-dom"

export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Profiles} exact />
                    <Route path="/profile" component={Profiles} exact  />
                    <Route path="/profile/:id" component={Details} exact />
            </section>
        )
    }
}

export default Section
