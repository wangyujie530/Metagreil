 
import './Withdrawalhistory.css'
import { Link, } from "react-router-dom";
export default function Withdrawalhistory() {
    return (
        <div className="Withdrawalhistory_BG">
            <div className="Withdrawalhistory">
               
                <div className="Withdrawalhistory_aone"> 
                <Link to='/MyNFT'>
                    Withdrawal History
                </Link></div>
                <div className="Withdrawalhistory_atow">
                    <div className="fonsi_list">
                        <div>Grail</div>
                        <div>100,000</div>
                        <div>2021-10-21</div>
                        <div>0xs9281453813574138548</div>
                    </div>
                </div>
                
           </div>
       </div>
    )
}