import React, { useState, useEffect, Fragment } from 'react';
import './App.scss';
import Banner from './components/Banner';
import BossesPreview from './components/Bosses Preview/BossesPreview';
import Footer from './components/Footer';

function App() {
    const [bossesList, setBossesList] = useState(null)


    const fetchData = async () => {
        const res = await fetch('https://api.myjson.com/bins/1ep6g1')
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
                        <Footer />
                        {console.log(bossesList)}</Fragment> 
                        : null
            }
        </div>
    )

}

export default App