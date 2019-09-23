import React from 'react'

const BurgerButton = ({toggleClass}) =>
    <div id='burger' onClick={toggleClass}>
        <div></div>
        <div></div>
        <div></div>
    </div>


export default BurgerButton