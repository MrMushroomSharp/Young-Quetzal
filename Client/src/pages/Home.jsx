import React from 'react'
import './pages.css'

function Home() {
    return (
        <div className='home'>
            <div className='title'>
                <h1>Hello, My name is Nelson Sandoval.</h1>
                <h1>I build games &#38; websites just like these ones.</h1>

                <div className="apps-display">
                    <div><span><h1>Blocky Blombs</h1></span></div>
                    <div><span><h1>Blocky Blombs</h1></span></div>
                    <div><span><h1>Blocky Blombs</h1></span></div>
                    <div><span><h1>Blocky Blombs</h1></span></div>
                    <div><span><h1>Blocky Blombs</h1></span></div>
                    <div><span><h1>Blocky Blombs</h1></span></div>
                </div>
            </div>

            <div className='process'>
                <h1>How does it work?</h1>
                <p>You can contact me through phone <a href="">call</a> or <a href="">email</a> me if I am not available. <br /> We will be able to dicuss plans and a basic concept for your site. Afterwards, we can discuss pricing and how long the site will take.</p>
            </div>
        </div>
    )
}

export default Home