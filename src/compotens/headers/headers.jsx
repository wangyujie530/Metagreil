import "./headers.css"
import React from 'react' 
import logo from './asstas/logo@2x.png'
import { Link, } from "react-router-dom";  
export default function Headers(props) {
     
       
    return (
        <div className='headetr_A'>
            <div className="headetr">
                <div className="images">
                    <Link to='/'><img src={logo} alt="" /></Link>

                </div>
                <div className="fonsize">
                    <Link to='/MyNFT'><span>Grail</span></Link>

                    <Link to='/Whitepaper'><span>Whitepaper</span></Link>
                    <span>GrilStart</span>
                </div>
            </div>
        </div>
    )
}