import React, { useState, useEffect } from 'react';
import './App.scss';
import Banner from './components/Banner'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
    const [bossesList, setBossesList] = useState(null)

    async function fetchData() {
        const res = await fetch('https://api.myjson.com/bins/6gv55')
        const data = await res.json()
        setBossesList(data)
        
    }

    useEffect(() => {
        fetchData()  
    }, [])


    return (
        <div>
            <Banner />
            <CTA />
            <Footer />
            {bossesList !== null && console.log(bossesList.bosses[0])}
        </div>
    )

}

export default App