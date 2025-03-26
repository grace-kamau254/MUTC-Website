
import aboutImg from '../assets/about.png'
import './about.css'
function about() {
  return (
    <div>
      <h3>About Us</h3>
      <div className='about-container'>
      <img src={aboutImg} alt="About" className='img' />
      <p className='text'>The Murang'a University Tech Club (MUTC) is the premier technology club at Murang'a University of Technology, committed to advancing members' knowledge in programming and technology. We offer a range of events and classes throughout the week, covering topics such as programming, UI/UX design, machine learning, and more. Our mission is to cultivate a dynamic community of tech enthusiasts, empowering members through hands-on learning, collaboration, and innovation in technology. By fostering technological learning and innovation, we aim to inspire and ignite the passion for technology among our members.</p>
    </div>
    </div>
     
  )
}

export default about
