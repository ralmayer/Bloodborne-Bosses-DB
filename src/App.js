import React, { useState, useEffect, Fragment } from 'react';
import './App.scss';
import Banner from './components/Banner';
import BossesPreview from './components/Bosses Preview/BossesPreview';
import Footer from './components/Footer';
import CTA from './components/CTA'

function App() {
    const [bossesList, setBossesList] = useState(null)

    const fetchData = async () => {
        const res = await fetch('https://api.myjson.com/bins/13ityd')
        const data = await res.json()
        setBossesList(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {bossesList ? 
                    <Fragment>            
                        <Banner />
                        <BossesPreview bosses={bossesList} />
                        <CTA />
                        <Footer />
                        </Fragment> 
                        : null
            }
        </div>
    )

}

export default App