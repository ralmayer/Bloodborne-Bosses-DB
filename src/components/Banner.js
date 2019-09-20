import React from 'react'
import Nav from './Nav'

const Banner = () =>
    <div id='banner'>
        <div id='bannerNav'>
            <Nav />
        </div>
        <div id="bannerText">
            <p>The <br /> Hunter's <br /> Guide</p>
            <div id='bannerSubText'></div>
            <div id='scrollImg'><img src='https://thumbs.gfycat.com/ApprehensiveHorribleHorsemouse-size_restricted.gif'/></div>
        </div>
        <div id='circle'></div>
        <div id='bannerTransition'></div>
    </div>


export default Banner