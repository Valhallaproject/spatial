import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Material1 from '../images/technology/image-launch-vehicle-portrait.jpg';
import Material4 from '../images/technology/image-launch-vehicle-landscape.jpg';
import Material2 from '../images/technology/image-spaceport-portrait.jpg';
import Material5 from '../images/technology/image-spaceport-landscape.jpg';
import Material3 from '../images/technology/image-space-capsule-portrait.jpg';
import Material6 from '../images/technology/image-space-capsule-landscape.jpg';
import Navbar from './navbar';
import '../style/technology.css'


const Technology = () => {
    const [material, setMaterial] = useState(0);
    const materials = [
        {
            name: "Launch vehicle",
            imagesPC: Material1,
            images: Material4,
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            name: "Spaceport",
            imagesPC: Material2,
            images: Material5,
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        { 
            name: "Space capsule",
            imagesPC: Material3,
            images: Material6,
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]
    
    function getMaterials(index){
        setMaterial(index)
    }
    return(
        <div className="technology">
            <Navbar/>
            <h3><span className="grey">03</span>  SPACE LAUNCH 101</h3>
            <div className="containerTechnology">
                <div className="infoTechnology">
                    <ul className="materialsItems">
                        <li><Link to onClick={()=>getMaterials(0)} className={material === 0 ? "active_item": "" }>1</Link></li>
                        <li><Link to onClick={()=>getMaterials(1)} className={material === 1 ? "active_item" : ""}>2</Link></li>
                        <li><Link to onClick={()=>getMaterials(2)} className={material === 2 ? "active_item" : ""}>3</Link></li>
                    </ul>
                    <div className="materialsInfo">
                        <h4>THE TERMINOLOGY ...</h4>
                        <h2>{materials[material].name}</h2>
                        <p>{materials[material].description}</p>

                    </div>
                </div>
                <div className="materialsImage">
                    <picture>
                        <source
                            media="(min-width: 1000px)"
                            srcSet={materials[material].imagesPC}
                        />
                        <img src={materials[material].images} alt=""/>
                    </picture>
                </div>
            </div>

        </div>
    );
}

export default Technology