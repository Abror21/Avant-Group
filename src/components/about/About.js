import bg from '../../images/about-bg.png'
import './About.css'
import AboutInfo from './AboutInfo'
import AboutContent from './AboutContent'

const About = () => {

    return (
        <div className='container about'>
            <img src={bg} alt="backgroun" className='about__bg' />
            <h1 className='default-title about__title animate__animated animate__bounce'>Коротко <span>о нас</span></h1>
            <AboutContent />
            <AboutInfo />
        </div>
    )
}

export default About
