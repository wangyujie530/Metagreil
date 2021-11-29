
import './MyNFT.css'
import React from 'react'
import dark from './assets/img/cup-dark@2x.png'
import none from './assets/img/cup-none@2x.png'
import cup from './assets/img/cup@2x.png'
import History from './assets/img/History@2x.png'
import mintnft from './assets/img/mintnft@2x.png'
import shadow from './assets/img/shadow@2x.png'
import Cheers from './assets/img/Cheers@2x.png'
import Withdrawal from './assets/img/Withdrawal@2x.png'
import { Link, } from "react-router-dom";
export default function MyNFT() {

    return (
        <div className="MyNFT_bg">
            <div className='MyNFT'>
                <div className="MyNFT_fils">
                    <div className="MyNFT_flex">
                        <div className="MyNFT_flex_one">
                            <div>Grail=0.001USDC</div>
                            <div>Total: Grail 12999</div>
                            <div>Availiable: Grail 12999</div>
                        </div>
                        <div className="MyNFT_flex_tow">  
                            
                            <Link ><img src={Withdrawal} alt="" /></Link>
                            <Link to='/Withdrawalhistory'><img src={History} alt="" /></Link>
                        </div>
                    </div>
                </div>
                <div className="text_center">Time of this round: 05:44:00</div>
                <div className="text_center_list">
                    <div>Diamond: 0</div>
                    <div>Crystal: 1</div>
                    <div>Ruby: 1</div>
                    <div>Gold: 1</div>
                    <div>Silver: 1</div>
                    <div>Bronze: 1</div>

                </div>
                <div className="MyNFT_dark_button">
                    <div className="MyNFT_dark_button_one">
                        <img src={dark} alt="" />
                        <img src={cup} alt="" />
                        <img src={dark} alt="" />
                    </div>
                    <div className="MyNFT_dark_button_click">
                        <img src={Cheers} alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    )
}
