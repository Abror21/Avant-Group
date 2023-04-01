import Button from '../button/Button'
import img1 from '../../images/about-img-1.png'
import img2 from '../../images/about-img-2.png'
import './AboutContent.css'

const AboutContent = () => {
    return (
        <div className='about__content'>
            <img src={img1} alt="image" className='about_img1' />
            <div>
                <h3 className='about__content-title'>
                    Мы стремимся к тому, чтобы все наши решения и технологии были максимально полезны на практике и делали жизнь лучше
                </h3>
                <p className='about__content-text'>
                    OOO 'ENGINEERING' Avant Metal Group - компания, которая зарекомендовала себя как надежного и ответственного производителя. Также, тесно сотрудничает с различными локальными и лидирующими зарубежными компаниями в таких странах как Корея, Турция, Китай, Россия.
                </p>
                <Button title='Подробнее' route='/' />
            </div>
            <img src={img2} alt="image" className='about__img2' />
        </div>
    )
}

export default AboutContent
