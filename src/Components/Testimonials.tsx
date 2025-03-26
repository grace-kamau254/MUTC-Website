
import './testimonials.css'
import MaryImg from '../assets/Mary.png'
import JamesImg from '../assets/James.png'
import PeterImg from '../assets/Peter.png'
import SarahImg from '../assets/Sarah.png'
import KevinImg from '../assets/Kevin.png'    
import LindaImg from '../assets/Linda.png'

function Testimonials() {
  return (
    <div>
      <h1 className="title">What Our Beneficiaries Says</h1>
       <div className='testimonials-container'>
      
      <div className='testimonials'>
        <img src={MaryImg} alt="Mary" className='img' />
        <h6 className='text'>Mary Wambui, Software Engineering Major, Class of 2024</h6>
        <p>⭐⭐⭐⭐⭐</p>
        <p className='text'>MUTC has been instrumental in bridging the gap between theoretical knowledge and practical application. The collaborative environment and diverse tracks have allowed me to explore various tech domains, ultimately guiding me toward my passion.</p>
      </div>
      <div className='testimonials'>
        <img src={JamesImg} alt="James" className='img' />
        <h6 className='text'>James Otieno, Information Systems Student, Class of 2023</h6>
        <p>⭐⭐⭐⭐⭐</p>
        <p className='text'>The mentorship and resources provided by MUTC have been invaluable. Engaging in hands-on projects and learning from industry experts have significantly enhanced my problem-solving skills and prepared me for the tech industry.</p>
      </div>
      <div className='testimonials'>
        <img src={LindaImg} alt="Linda" className='img' />
        <h6 className='text'>Linda Achieng, Data Science Enthusiast, Class of 2025</h6>
        <p>⭐⭐⭐⭐⭐</p>
        <p className='text'>Being part of MUTC has opened up numerous opportunities for networking and professional growth. The club's commitment to fostering innovation and continuous learning has been a cornerstone of my university experience.</p>
      </div>
      <div className='testimonials'>
        <img src={PeterImg} alt="Peter" className='img' />
        <h6 className='text'>Peter Omondi, Cloud Computing Student, Class of 2024</h6>
        <p>⭐⭐⭐⭐⭐</p>
        <p className='text'>MUTC's diverse range of tracks allowed me to discover my interest in cloud engineering. The supportive community and expert-led sessions have been pivotal in my personal and professional development.</p>
      </div>
      <div className='testimonials'>
        <img src={SarahImg} alt="Sarah" className='img' />
        <h6 className='text'>Sarah Mwikali, Cyber Security Major, Class of 2023</h6>
        <p>⭐⭐⭐⭐⭐</p>
        <p className='text'>The hands-on workshops and collaborative projects at MUTC have not only enhanced my technical skills but also fostered a sense of community and belonging. It's been a transformative experience</p>
      </div>
      <div className='testimonials'>
        <img src={KevinImg} alt='Kevin' className='img'  />
        <h6 className='text'>Kevin Omondi, Mobile App Development Student, Class of 2025</h6>
        <p>⭐⭐⭐⭐⭐</p>
        <p className='text'>MUTC has provided a platform to apply classroom knowledge to real-world scenarios. The exposure to various tech disciplines has broadened my horizons and prepared me for a dynamic career in technology.</p>
      </div>
      
</div>
      </div>
  
  )
}

export default Testimonials
