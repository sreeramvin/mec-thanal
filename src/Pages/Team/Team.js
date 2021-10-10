import './Team.css';
import staff from '../../Assets/srinivas sir.jpg';
import core1 from '../../Assets/core members/Anjali Suresh1.jpeg';import core2 from '../../Assets/core members/Sruthi J1.jpg';import core3 from '../../Assets/core members/Abhishek1.jpg';import core4 from '../../Assets/core members/Kaveri Menoki.jpg';
import core5 from '../../Assets/core members/Esther Maria1.jpeg';import core6 from '../../Assets/core members/Sachin1.jpg';import core7 from '../../Assets/core members/Ashwin Girish.jpg';import core8 from '../../Assets/core members/Aswin Augustine.png';
import core9 from '../../Assets/core members/Anjali J Parappattu1.jpeg';import core10 from '../../Assets/core members/Irene Maria Jijo1.jpg';import core11 from '../../Assets/core members/kurian sibi.jpg';import core12 from '../../Assets/core members/Dona Yeldo.jpg';
import core13 from '../../Assets/core members/Thejus Jawahar.jpg';import core14 from '../../Assets/core members/Sreeram1.jpg';import core15 from '../../Assets/core members/Varsha MC.jpg';import core16 from '../../Assets/core members/Deepthi Joseph.jpg';
import core17 from '../../Assets/core members/Navaneeth S Nair1.jpg';import core18 from '../../Assets/core members/Gopika G.jpg';import core19 from '../../Assets/core members/Jabira_Farhath.jpg';import core20 from '../../Assets/core members/Jewel AP.jpg';
import core21 from '../../Assets/core members/Anagha Narayanan.jpg';import core22 from '../../Assets/core members/Jithin Sabu.jpg';import core23 from '../../Assets/core members/Parvathy T J1.jpg';import core24 from '../../Assets/core members/Niba Jabeen Akber.jpg';

import TopSection from '../../Components/Top-section/Top-section';

export default function Team() {
    
        return ( 
            <div className="team">
            <TopSection />
            <div className="team-mobile">
            <h1 className="heading"> CORE TEAM 2021 </h1>  
            <div className="staff">
            <img src = { staff } className = "photo" alt="pic" />
            <p className="staff-name">Sreenivas P</p>
            <p className = "designation">STAFF IN CHARGE</p>
            </div>
            <div className="core-team">
            <div className="flex-container-main">
                <div className="flex-item">
                    <img src={ core1 } className="core-img" alt="pic"/>
                    <p className="members">
                        Anjali Suresh
                    </p>
                    <p className="designation">
                        Chairperson
                    </p>
                </div>
                <div className="flex-item">
                    <img src={ core2 } className="core-img" alt="pic"/>
                    <p className="members">
                        Sruthi J <br />
                    </p>
                    <p className="designation">
                        Vice Chairperson
                    </p>
                </div>
                <div className="flex-item">
                    <img src={ core3 } className="core-img" alt="pic"/>
                    <p className="members">
                        Abhishek Anil <br /> 
                    </p>
                    <p className="designation">
                        General Secretary
                    </p>
                </div>
            </div>
            <div className="flex-container-main">
                <div className="flex-item">
                    <img src={ core4 } className="core-img" alt="pic"/>
                    <p className="members">
                        Kaveri Menoki
                    </p>
                    <p className="designation">
                        Joint Secretary
                    </p>
                </div>
                <div className="flex-item">
                    <img src={ core7 } className="core-img" alt="pic"/>
                    <p className="members">
                        Ashwin Girish
                    </p>
                    <p className="designation">
                        Design Head
                    </p>
                </div>
                <div className="flex-item">
                    <img src={ core8 } className="core-img" alt="pic"/>
                    <p className="members">
                        Aswin Augustine
                    </p>
                    <p className="designation">
                        Treasurer
                    </p>
                </div>
            </div>
            <div className="core-members">
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core5 } className="core-img" alt="pic"/>
                            <p className="members">
                                Esther Maria <br /> 
                            </p>
                        </div>
                        
                        <div className="flex-item">
                            <img src={ core6 } className="core-img" alt="pic"/>
                            <p className="members">
                                Sachin Tom <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">'One Day One Rupee' Heads</div>
                </div>
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core9 } className="core-img" alt="pic"/>
                            <p className="members">
                                Anjali J <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core10 } className="core-img" alt="pic"/>
                            <p className="members">
                                Irene Maria <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Content Heads</div>
                </div>
            </div>
            <div className="core-members">
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core11 } className="core-img" alt="pic"/>
                            <p className="members">
                                Kurian Sibi <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core12 } className="core-img" alt="pic"/>
                            <p className="members">
                                Dona Yeldo <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Social Outreach Heads</div>
                </div>
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core13 } className="core-img" alt="pic"/>
                            <p className="members">
                                 Thejus Jawahar <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core14 } className="core-img" alt="pic"/>
                            <p className="members">
                                 Sreeram V <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Initiative Heads</div>
                </div>
            </div>
            <div className="core-members">
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core15 } className="core-img" alt="pic"/>
                            <p className="members">
                                Varsha M C <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core16 } className="core-img" alt="pic"/>
                            <p className="members">
                                Deepti Joseph <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Publicity Heads</div>
                </div>
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core17 } className="core-img" alt="pic"/>
                            <p className="members">
                                Navaneeth S <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core18 } className="core-img" alt="pic"/>
                            <p className="members">
                                Gopika G <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Online Media Heads</div>
                </div>
            </div>
            <div className="core-members">
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core19 } className="core-img" alt="pic"/>
                            <p className="members">
                                Jabira Farhath <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core20 } className="core-img" alt="pic"/>
                            <p className="members">
                                Jewel A P <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Medical Assistance</div>
                </div>
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core23 } className="core-img" alt="pic"/>
                            <p className="members">
                                Parvathy T J <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core24 } className="core-img" alt="pic"/>
                            <p className="members">
                                NIba Jabeen <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Documentation Heads </div>
                </div>
            </div>
            <div className="core-members">
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core21 } className="core-img" alt="pic"/>
                            <p className="members">
                                Anagha Narayanan <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core22 } className="core-img" alt="pic"/>
                            <p className="members">
                                Jithin Sabu <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">X MEC POC</div>
                </div>
            </div>
            
            
            </div>
            </div>
            
       
            <div className="team-web"> 
            <h1 className="heading"> CORE TEAM 2021 </h1>  
            <div className="staff">
            <img src = { staff } className = "photo" alt="pic" />
            <p className="staff-name">Sreenivas P</p>
            <p className = "designation">STAFF IN CHARGE</p>
            </div>
            <div className="core-team">
            <div className="flex-container-main">
                <div className="flex-item">
                    <img src={ core1 } className="core-img" alt="pic"/>
                    <p className="members">
                        Anjali Suresh
                    </p>
                    <p className = "designation">
                        Chairperson
                    </p>
                </div>
                <div className="flex-item">
                    <img src={ core2 } className="core-img" alt="pic"/>
                    <p className="members">
                        Sruthi J
                    </p>
                    <p className = "designation">
                        Vice Chairperson
                    </p>
                </div>
                <div className="flex-item">
                    <img src={ core3 } className="core-img" alt="pic"/>
                    <p className="members">
                        Abhishek Anil
                    </p>
                    <p className = "designation">
                        General Secretary 
                    </p>
                </div>
                <div className="flex-item">
                    <img src={ core4 } className="core-img" alt="pic"/>
                    <p className="members">
                        Kaveri Menoki
                    </p>
                    <p className = "designation">
                        Joint Secretary 
                    </p>
                </div>
            </div>
            <div className="core-members">
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core5 } className="core-img" alt="pic"/>
                            <p className="members">
                                Esther Maria <br /> 
                            </p>
                        </div>
                        <div className="flex-item">
                            <img src={ core6 } className="core-img" alt="pic"/>
                            <p className="members">
                                Sachin Tom <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">'One Day One Rupee' Heads</div>
                </div>
                <div className="flex-item">
                    <img src={ core7 } className="core-img" alt="pic"/>
                    <p className="members">
                        Ashwin Girish
                    </p>
                    <p className = "designation">
                        Design Head
                    </p>
                </div>
                <div className="flex-item">
                    <img src={ core8 } className="core-img" alt="pic"/>
                    <p className="members">
                        Aswin Augustine
                    </p>
                    <p className = "designation">
                        Treasurer
                    </p>
                </div>
            </div>
            <div className="core-members">
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core9 } className="core-img" alt="pic"/>
                            <p className="members">
                                Anjali J <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core10 } className="core-img" alt="pic"/>
                            <p className="members">
                                Irene Maria <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Content Heads</div>
                </div>
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core11 } className="core-img" alt="pic"/>
                            <p className="members">
                                Kurian Sibi <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core12 } className="core-img" alt="pic"/>
                            <p className="members">
                                Dona Yeldo <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Social Outreach Heads</div>
                </div>
            </div>
            <div className="core-members">
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core13 } className="core-img" alt="pic"/>
                            <p className="members">
                                 Thejus Jawahar <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core14 } className="core-img" alt="pic"/>
                            <p className="members">
                                 Sreeram V <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Initiatives Heads</div>
                </div>
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core15 } className="core-img" alt="pic"/>
                            <p className="members">
                                Varsha M C <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core16 } className="core-img" alt="pic"/>
                            <p className="members">
                                Deepti Joseph <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Publicity Heads</div>
                </div>
            </div>
            <div className="core-members">
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core17 } className="core-img" alt="pic"/>
                            <p className="members">
                                Navaneeth S <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core18 } className="core-img" alt="pic"/>
                            <p className="members">
                                Gopika G <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Online Media Heads</div>
                </div>
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core19 } className="core-img" alt="pic"/>
                            <p className="members">
                                Jabira Farhath <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core20 } className="core-img" alt="pic"/>
                            <p className="members">
                                Jewel A P <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Medical Assistance</div>
                </div>
            </div>
            <div className="core-members">
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core21 } className="core-img" alt="pic"/>
                            <p className="members">
                                Anagha Narayanan <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core22 } className="core-img" alt="pic"/>
                            <p className="members">
                                Jithin Sabu <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">X MEC POC</div>
                </div>
                <div className="member-pair">
                    <div className="flex-container">
                        <div className="flex-item">
                            <img src={ core23 } className="core-img" alt="pic"/>
                            <p className="members">
                                Parvathy T J <br /> 
                            </p>
                        </div>
                    
                        <div className="flex-item">
                            <img src={ core24 } className="core-img" alt="pic"/>
                            <p className="members">
                                Niba Jabeen <br /> 
                            </p>
                        </div>        
                    </div>
                    <div className="flex-item2">Documentation Heads</div>
                </div>
            </div>
            
            
            </div>
            </div>
            </div>
        )
    }