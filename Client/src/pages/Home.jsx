import React from 'react'
import './pages.css'

function Home() {
    return (
        <div className='home'>
            <div className='title'>
                <h1>Hello, My name is Nelson Sandoval.</h1>
                <h1>I build games &#38; websites just like these ones.</h1>
            </div>

            <div className="apps-display">
                <h2>Game cool</h2>
                <h2>Game Dumb</h2>
                <h2>Game Black</h2>
                <h2>Game brain</h2>
            </div>

            <div className='process'>
                <h1>How does it work?</h1>
                <p>I you can contact me through <a href="">email</a> or <a href="">call</a> me and we will be able to dicuss plans and a basic concept for your site.</p>
            </div>
        </div>
    )
}

export default Home