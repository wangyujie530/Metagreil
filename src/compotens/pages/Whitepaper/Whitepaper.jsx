import "./Whitepaper.css";
import banner from "../../../assets/banner@2x.png";
import React, { useState, useEffect } from 'react' 
export default function Whitepaper() {
    
    const [keyindex, setkeyindex] = useState(0)
    return (
        <div className="Whitepaper_BG">
            <div className="Whitepaper">
                <div className="Whitepaper_left">  
                    <div onClick={() => { 
                        setkeyindex(0)
                    }}>Background0</div>
                    <div onClick={() => {
                        setkeyindex(1) 
                    }}>Background</div>
                    <div onClick={() => { 
                        setkeyindex(2)
                    }}>Background</div>
                    <div onClick={() => {
                        setkeyindex(3)
                    }}>Background</div>
                    <div onClick={() => {
                        setkeyindex(4)
                    }}>Background</div>
                </div>
                <div className="Whitepaper_right">
                    {
                       keyindex === 0?<div>
                            <img src={banner} alt="" />
                            <p>111The darter parked his car where it wouldn’t be visible from the bait site. “Deer don’t like abrupt change,” Dane Stevens, a wildlife biologist who was leading the team, explained. “You don’t want to change the carpeting the day that it’s supposed to come to the house.” Stevens was working on behalf of White Buffalo, an unusual conservation nonprofit that the city had contracted for the sterilization project in 2016. It had been a difficult summer, Stevens told me, with lots of rain and ever-shifting winds. The former meant abundant natural food, making the bait corn less interesting. The latter meant that, even when deer did come, Stevens couldn’t always send in one of his darters. To be allowed in the city, the dart guns carry approximately the firepower of a paintball gun and aren’t legally considered guns at all. The shooters had to get within twenty yards of their targets to make a hit; if the wind changed and snitched on them, the animal could end up permanently wary. </p>
                            <p> At Fresh Kills, the wind had finally stabilized, and the team’s game camera had shown a young buck eating the bait corn at the same time every evening for a week. The darter was in place well before the buck was due to arrive. He erected a camouflaged tent that would serve as a blind and readied his darts, which carried a payload of xylazine and Telazol, as well as a VHF transmitter. The yearling, graceful and dark-eyed and still so young that it was living alongside its mother—“Think of it as a teen-ager who’s about to get kicked out of the house,” Stevens said—approached the corn on schedule, and the darter took aim at the large muscles of one of the animal’s thighs. The shot was good. Because of the need to stay silent, the protocol was for the darter to send a message to Stevens by WhatsApp. The message started the clock on a tightly choreographed operation.</p>
                        </div> : <div>
                                <p>000The darter parked his car where it wouldn’t be visible from the bait site. “Deer don’t like abrupt change,” Dane Stevens, a wildlife biologist who was leading the team, explained. “You don’t want to change the carpeting the day that it’s supposed to come to the house.” Stevens was working on behalf of White Buffalo, an unusual conservation nonprofit that the city had contracted for the sterilization project in 2016. It had been a difficult summer, Stevens told me, with lots of rain and ever-shifting winds. The former meant abundant natural food, making the bait corn less interesting. The latter meant that, even when deer did come, Stevens couldn’t always send in one of his darters. To be allowed in the city, the dart guns carry approximately the firepower of a paintball gun and aren’t legally considered guns at all. The shooters had to get within twenty yards of their targets to make a hit; if the wind changed and snitched on them, the animal could end up permanently wary. </p>
                            <img src={banner} alt="" />
                           
                            <p> At Fresh Kills, the wind had finally stabilized, and the team’s game camera had shown a young buck eating the bait corn at the same time every evening for a week. The darter was in place well before the buck was due to arrive. He erected a camouflaged tent that would serve as a blind and readied his darts, which carried a payload of xylazine and Telazol, as well as a VHF transmitter. The yearling, graceful and dark-eyed and still so young that it was living alongside its mother—“Think of it as a teen-ager who’s about to get kicked out of the house,” Stevens said—approached the corn on schedule, and the darter took aim at the large muscles of one of the animal’s thighs. The shot was good. Because of the need to stay silent, the protocol was for the darter to send a message to Stevens by WhatsApp. The message started the clock on a tightly choreographed operation.</p>
                        </div>
                    }
                </div>
            </div>
            <div className="konbai"> 
            </div>
        </div>
    )
}