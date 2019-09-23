import React, { useState, useEffect } from 'react';
import './App.scss';
import Banner from './components/Banner'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
    const [bosses, setBosses] = useState({})

    async function fetchData() {
        const res = await fetch('https://api.myjson.com/bins/6gv55')
        res
            .json()
            .then(result => setBosses(result))
            console.log(bosses)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <Banner />
            <CTA />
            <Footer />
        </div>
    )

}

export default App