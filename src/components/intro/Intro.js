import { Button } from 'react-bootstrap'
import Header from '../header/Header'
import './Intro.css'
import sizeImg from '../../images/intro-size-img.png'
import smileIcon from '../../images/smile-icon.webp'
import IntroItem from './IntroItem'

const Intro = () => {
    return (
        <div className='intro'>
            <Header />
            <div className='container'>
                <div className='intro__content'>
                    <h1 className='intro__title'>Высокотехнологичные решения в области металлоконструкций и стройматериалов</h1>
                    <p className='intro__subtitle'>
                        Компания OOO 'ENGINEERING' AvantGroup зарекомендовала себя как AvantGroup зарекомендовала себя в которой вы можете быть уверены.
                    </p>
                    <Button variant='danger' className='intro__btn animate__animated animate__flash'>Подробнее о производстве &rarr;</Button>
                </div>
                <div className='intro__info'>
                    <IntroItem
                        img={smileIcon}
                        title='30 000 т.'
                        subtitle='Производственная мощность'
                    />
                    <IntroItem
                        img={sizeImg}
                        title='22 000'
                        subtitle='квадратных метров'
                        text='Площадь производственного комплекса составляет более 22 тысяч квадратных метров.'
                    />
                    <IntroItem
                        img={sizeImg}
                        title='250'
                        subtitle='человек'
                        text='Штат сотрудников насчитывает250человек.'
                    />
                </div>
            </div>
        </div>
    )
}

export default Intro
