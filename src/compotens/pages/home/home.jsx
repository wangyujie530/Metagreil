import './home.css'  
import React from 'react'; 
import banner from '../../../assets/banner@2x.png';
import Artboard2 from '../../../assets/Artboard2@2x.png';
import z from '../../../assets/z@2x.png';
import zcopy2 from '../../../assets/zcopy2@2x.png';
import zcopy from '../../../assets/zcopy@2x.png';
import Artboard from '../../../assets/Artboard@2x.png';
import ArtboardCopy from '../../../assets/ArtboardCopy@2x.png';
import event1 from '../../../assets/event1@2x.png';
import event2 from '../../../assets/event2@2x.png';
import event3 from '../../../assets/event3@2x.png';
import group1 from '../../../assets/group1@2x.png';
import group2 from '../../../assets/group2@2x.png';
import group3 from '../../../assets/group3@2x.png';
import group4 from '../../../assets/group4@2x.png'; 

function Home() { 
    return (

        <div className="home_bg">
            <div className="home_banner">
                <img src={banner} alt="" />
            </div>
            <div className='home'>
                
                <div className="home_banner_to">
                    <div className="home_banner_to_A">
                        <img className="home_banner_to_img" src={Artboard2} alt="" />
                        <span>MY CHEERS</span>
                    </div>
                    <div className="home_banner_to_A">
                        <img className="home_banner_to_img" src={Artboard} alt="" />
                        <span>MY EVENTS</span>
                    </div>
                    <div className="home_banner_to_A">
                        <img className="home_banner_to_img" src={ArtboardCopy} alt="" />
                        <span>MY GROUPS</span>
                    </div>
                </div>
                <div className="home_banner_All">
                    <div className="leftc"></div>
                    <div className="home_banner_All_s">
                        <img className="home_banner_All_img" src={z} alt="" />

                    </div>
                    <div className="home_banner_All_s">
                        <img className="home_banner_All_img" src={zcopy2} alt="" />

                    </div>
                    <div className="home_banner_All_s">
                        <img className="home_banner_All_img" src={zcopy} alt="" />

                    </div>
                    <div className="leftc"></div>

                </div>
                <div className="home_banner_data">
                    <div className="home_banner_data_D">
                        <div className="home_banner_data_div">99</div>
                        <span>ALL CHEERED CUPS (Increment)</span>
                    </div>
                    <div className="home_banner_data_D">
                        <div className="home_banner_data_div">44</div>
                        <span>ALL CHEERED CUPS</span>
                    </div>
                    <div className="home_banner_data_D">
                        <div className="home_banner_data_div">33</div>
                        <span >ALL CHEERED CUPS</span>
                    </div>
                </div>
                <div className="home_banner_events">
                    <div className="home_banner_events_A">
                        <img className="home_banner_events_IMG" src={event1} alt="" />

                    </div>
                    <div className="home_banner_events_A">
                        <img className="home_banner_events_IMG" src={event2} alt="" />
                    </div>
                    <div className="home_banner_events_A">
                        <img className="home_banner_events_IMG" src={event3} alt="" />
                    </div>
                </div>
                <div className="home_banner_groups">
                    <div className="home_banner_group1_s">
                        <img className="home_banner_group1_img" src={group1} alt="" />
                        <span className="home_banner_group1_sspan">GROUP NAME</span>
                        <span>200</span>
                    </div>
                    <div className="home_banner_group1_s">
                        <img className="home_banner_group1_img" src={group2} alt="" />
                        <span className="home_banner_group1_sspan">GROUP NAME</span>
                        <span>200</span>
                    </div>
                    <div className="home_banner_group1_s">
                        <img className="home_banner_group1_img" src={group3} alt="" />
                        <span className="home_banner_group1_sspan">GROUP NAME</span>
                        <span>200</span>
                    </div>
                    <div className="home_banner_group1_s">
                        <img className="home_banner_group1_img" src={group4} alt="" />
                        <span className="home_banner_group1_sspan">GROUP NAME</span>
                        <span>200</span>
                    </div>
                </div>
                <div className="bottonfs">
                    Grail Social Fi
                </div>
            </div>
        </div>

    )
}
export default Home