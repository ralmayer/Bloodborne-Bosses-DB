import React from 'react'

const MobileLinks = ({status}) => 
    <ul className={status ? 'nav-links-mobile' : 'nav-disabled'}>
        <li><a href='https://www.youtube.com/watch?v=G203e1HhixY'>Home</a></li>
        <li><a href='https://www.youtube.com/watch?v=G203e1HhixY'>Bosses</a></li>
        <li><a href='https://www.youtube.com/watch?v=G203e1HhixY'>About</a></li>
    </ul>


export default MobileLinks