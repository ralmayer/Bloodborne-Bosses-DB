import React from 'react'
import Nav from '../nav/Nav'

const Banner = () =>
    <div id='banner'>
        <div id='bannerNav'>
            <Nav />
        </div>
        <div id="bannerText">
            <p>The <br /> Hunter's <br /> Guide</p>
            <div id='bannerSubText'></div>
            <a onClick={() => window.scrollTo(0, 800)} id='scrollImg'><img src='https://thumbs.gfycat.com/ApprehensiveHorribleHorsemouse-size_restricted.gif' alt="arrow"/></a>
        </div>
        <div id='bannerTransition'></div>
    </div>


export default Banner