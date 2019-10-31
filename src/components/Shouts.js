import React, { useContext, Fragment } from 'react'
import { Comments } from './Comments'
import Nav from './nav/Nav'

const Shouts = () => {
    return <Fragment>
        <Nav />
        <h1>Shouts Components</h1>
        <Comments pageName='shouts'/>
    </Fragment>
}

export default Shouts