
import PatronImg from '../../assets/Patron.png'
import ChairpersonImg from '../../assets/Chairperson.png'
import ViceImg from '../../assets/Vice.png'
import SecretaryImg from '../../assets/Secretary.png'
import TreasurerImg from '../../assets/Treasurer.png'
import SecurityImg from '../../assets/Security.png'
import UiImg from '../../assets/Uilead.png'
import WebImg from '../../assets/Web.png'
import MobileImg from '../../assets/Mobile.png'
import CloudImg from '../../assets/Cloud.png'
import PowerImg from '../../assets/Power.png'
import './Leadership.css'


function Leadership() {
  return (
    <div>
        <h1 className="title">Our Leadership Team</h1>
        <div className="leadership-container">
             
             <div className="leadership">
                 <img src={PatronImg} alt="Patron" className="img" />
                 <h3 className="text">Dr.Ndia-Patron</h3>
                 <p className="text">Dr. John Ndia serves as the esteemed Patron of MUTC, bringing a wealth of experience and guidance to the club. With a distinguished career in academia and a passion for technological advancement, Dr. Ndia provides invaluable mentorship to our members. His commitment to fostering a culture of innovation ensures that MUTC remains at the forefront of technological education.</p>
             </div>
             <div className="leadership">
                 <img src={ChairpersonImg} alt="Chairperson" className="img" />
                 <h3 className="text">Victory Njeri – Chairperson</h3>
                 <p className="text">As the Chairperson of MUTC, Victory Njeri leads with vision and dedication. Her dynamic leadership style and commitment to empowering members have been instrumental in the club's growth. Victory's enthusiasm for technology inspires others to explore new horizons and achieve their full potential.</p>
             </div>
             <div className="leadership">
                 <img src={ViceImg} alt="ViceChairperson" className="img" />
                 <h3 className="text">Allan Muhari – Vice Chairperson</h3>
                 <p className="text">Allan Muhari, the Vice Chairperson of MUTC, is known for his strategic thinking and collaborative approach. His ability to bring people together and foster teamwork has been pivotal in executing successful projects and events within the club.</p>
             </div>
             <div className= "leadership">
                 <img src={SecretaryImg} alt="Secretary" className="img" />
                 <h3 className="text">Bridget Gitonga – Secretary</h3>
                 <p className="text">Serving as the Secretary, Bridget Gitonga ensures the seamless operation of MUTC's activities. Her organizational skills and attention to detail keep the club's initiatives on track, while her approachable nature makes her a trusted point of contact for members.</p>
             </div>
             <div className="leadership">
                 <img src={TreasurerImg} alt="Treasurer" className="img"/>
                 <h3 className="text">Ruth Mutisya – Treasurer</h3>
                 <p className="text">As the Treasurer, Ruth Mutisya manages MUTC's financial affairs with precision and transparency. Her expertise in financial planning ensures that the club's resources are utilized effectively to benefit all members.</p>
             </div>
             <div className="leadership">
                 <img src={SecurityImg} alt="Security" className="img"/>
                 <h3 className="text">Webster Ifedha – Cyber Security Lead</h3>
                 <p className="text">Leading the Cyber Security track, Webster Ifedha brings a wealth of knowledge in protecting digital assets. His dedication to educating members about the importance of cybersecurity helps build a safer digital community within MUTC.</p>
             </div>
             <div className="leadership">
                 <img src={UiImg} alt="UIleader" className="img" />
                 <h3 className="text">Manase Gunga – UI/UX Lead</h3>
                 <p className="text">As the UI/UX Lead, Manase Gunga focuses on creating intuitive and engaging user experiences. His workshops and guidance help members design interfaces that are both functional and aesthetically pleasing.</p>
             </div>
             <div className="leadership">
                 <img src={WebImg} alt="WebDevelopmentLeader" className="img"/>
                 <h3 className="text">Carolyne Githenduka – Web Development Lead</h3>
                 <p className="text">Leading the Web Development track, Carolyne Githenduka empowers members to build robust and dynamic websites. Her expertise in both front-end and back-end development equips members with the skills needed to excel in the digital world.</p>
             </div>
             <div className="leadership">
                 <img src={MobileImg} alt="MobileAppDevelopmentLeader" className="img" />
                 <h3 className="text">Stanley Amunze – Mobile Apps Development Lead</h3>
                 <p className="text">As the Mobile Apps Development Lead, Stanley Amunze guides members in creating innovative mobile applications. His focus on user-centric design and functionality ensures that the apps developed meet real-world needs.</p>
             </div>
             <div className="leadership">
                 <img src={CloudImg} alt="CloudEngineeringLeader" className="img" />
                 <h3 className="text">Paul Karanja – Cloud Engineering Lead</h3>
                 <p className="text">Leading the Cloud Engineering track, Paul Karanja educates members on leveraging cloud technologies. His insights into scalable and secure cloud solutions prepare members for the evolving tech landscape.</p>
             </div>
             <div className="leadership">
                 <img src={PowerImg} alt="PowerPlatformLeader" className="img"/>
                 <h3 className="text">Evyonn Mbithe – Power Platform Lead</h3>
                 <p className="text">As the Power Platform Lead, Evyonn Mbithe introduces members to Microsoft's suite of business applications. Her guidance enables members to automate processes, analyze data, and create solutions with minimal coding.</p>
             </div>
             
                 
           
         </div>
    </div>
  )
}

export default Leadership
