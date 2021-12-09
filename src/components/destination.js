import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Moon from '../images/destination/image-moon.png';
import Mars from '../images/destination/image-mars.png';
import Europa from '../images/destination/image-europa.png';
import Titan from '../images/destination/image-titan.png';
import '../style/destination.css'


const Destination = () => {
    const [planet, setPlanet] = useState(0)
    const planets = [
        {
            name: "Moon",
            images: Moon,
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            travel: "3 days"
        },
        {
            name: "Mars",
            images: Mars,
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. km",
            travel: "9 months"
        },
        {
            name: "Europa",
            images: Europa,
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. km",
            travel: "3 years"
        },
        {   
            name: "Titan",
            images: Titan,
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. km",
            travel: "7 years"
        }
    ]
    function getPlanet(index){
        setPlanet(index)
    }
    return(
        <div className="destination">
            <Navbar/>
            <h3><span className="grey">01</span>  PICK YOUR DESTINATION</h3>
            <div className="containerDestination">
                <div className="image">
                    <img src={planets[planet].images} alt=""/>
                </div>
                <div className="infoPlanet">
                    <ul className="planetsItems">
                        <li><Link to onClick={()=>getPlanet(0)} className={planet === 0 ? "active_nav": "" }>MOON</Link></li>
                        <li><Link to onClick={()=>getPlanet(1)} className={planet === 1 ? "active_nav" : ""}>MARS</Link></li>
                        <li><Link to onClick={()=>getPlanet(2)} className={planet === 2 ? "active_nav" : ""}>EUROPA</Link></li>
                        <li><Link to onClick={()=>getPlanet(3)} className={planet === 3 ? "active_nav" : ""}>TITAN</Link></li>
                    </ul>
                    <h2>{planets[planet].name}</h2>
                    <p>{planets[planet].description}</p> 
                    <div className="linePlanet"></div>
                    <div className="info">
                        <div className="distance">
                            <p>AVG. DISTANCE</p>
                            <h4>{planets[planet].distance}</h4>
                        </div>
                        <div className="travel">
                            <p>EST. TRAVEL TIME</p>
                            <h4>{planets[planet].travel}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination