import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import BossList from './components/Full Boss List/BossList';
import About from './components/About';

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
                <BrowserRouter>
                    <Fragment> 
                        <Route path="/" component={Home} exact />      
                        <Route path="/about" component={About} />
                        <Route path="/bosses" component={BossList} />       
                        {/* <Banner />
                        <BossesPreview bosses={bossesList} />
                        <CTA />
                        <Footer /> */}
                    </Fragment> 
                </BrowserRouter>
                : null
            }
        </div>
    )

}

export default App