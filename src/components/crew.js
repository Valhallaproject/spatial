import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Member1 from "../images/crew/image-douglas-hurley.png";
import Member2 from "../images/crew/image-mark-shuttleworth.png";
import Member3 from "../images/crew/image-victor-glover.png";
import Member4 from "../images/crew/image-anousheh-ansari.png";
import '../style/crew.css';

const Crew = () => {
    const [member, setMember] = useState(0)
    const members = [
        {
            name: "Douglas Hurley",
            images: Member1,
            role: "Commander",
            bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            name: "Mark Shuttleworth",
            images: Member2,
            role: "Mission Specialist",
            bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            name: "Victor Glover",
            images: Member3,
            role: "Pilot",
            bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            name: "Anousheh Ansari",
            images: Member4,
            role: "Flight Engineer",
            bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ]
    function getMembers(index){
        setMember(index)
    }

    return(
        <div className="crew">
            <Navbar/>
            <h3><span className="grey">02</span>  MEET YOUR CREW</h3>
            <div className="containerCrew">
                <div className="membersInfo">
                    <h3>{members[member].role}</h3>
                    <h2>{members[member].name}</h2>
                    <p>{members[member].bio}</p>
                    <ul className="membersItems">
                            <li><Link to onClick={()=>getMembers(0)} className={member === 0 ? "dot_nav": "" }><div className="dot"></div></Link></li>
                            <li><Link to onClick={()=>getMembers(1)} className={member === 1 ? "dot_nav" : ""}><div className="dot"></div></Link></li>
                            <li><Link to onClick={()=>getMembers(2)} className={member === 2 ? "dot_nav" : ""}><div className="dot"></div></Link></li>
                            <li><Link to onClick={()=>getMembers(3)} className={member === 3 ? "dot_nav" : ""}><div className="dot"></div></Link></li>
                        </ul>
                </div>
                <div className="membersImage">
                    <img src={members[member].images} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Crew