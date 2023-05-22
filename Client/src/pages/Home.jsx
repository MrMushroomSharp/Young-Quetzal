import React from 'react'
import './pages.css'

function Home() {
    return (
        <div className='home'>

            <div className='title'>
                <h1 id="pre-me">Hello, My name is </h1>
                <h1 id="me">Nelson Sandoval.</h1>
                <h1>I build games &#38; websites just like these.</h1>

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
                <p>You can contact me through phone <a href="" className='contact-link'>call</a> or <a href="" className='contact-link'>email</a> me if I am not available. <br /> We  can dicuss plans and a basic concept for your site. Afterwards, we can discuss pricing and how long the site will take.  Sometimes I will not be immediately available but I will always do my best to respond as soon as possible and keep you up to date with how the website is going.</p>
            </div>

        </div>
    )
}

export default Home