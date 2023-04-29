import React from 'react'
import './pages.css'
import arrow from "../assets/arrow.png"

function Home() {
    return (
        <div className='home'>
            <div className='title'>
                <h1>Hi! My name is Nelson Sandoval</h1>
                <h1>I build websites just like this one!</h1>
                <p>Lets go take a look</p>
                <img src={arrow} classname="" />
            </div>
        </div>
    )
}

export default Home