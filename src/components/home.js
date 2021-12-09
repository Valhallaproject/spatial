import React from 'react'
import Navbar from './navbar';
import '../style/home.css'

function Home () {
    return(
        <div className="home">
            <Navbar/>
            <div className="container">
                <div className="contentHome">
                    <h4>So, you want to travel to</h4>
                    <h1>Space</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
                </div>
                <button className="explore"> 
                    Explore
                </button>
                
            </div>
        </div>
    );
}

export default Home