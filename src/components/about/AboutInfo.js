import './AboutInfo.css'
import AboutItem from './AboutItem'

const AboutInfo = () => {
    return (
        <div className='about__info'>
            <h3 className='default-title about__info-title animate__animated animate__swing'>Главный двигатель нашей компании <span>– высокий уровень мотивации.</span></h3>
            <div className='row'>
                <div className='col-12 col-sm-6 col-lg-4'>
                    <AboutItem
                        title='30 000 т.'
                        subtitle='производственной мощности'
                    />
                </div>
                <div className='col-12 col-sm-6 col-lg-4'>
                    <AboutItem
                        title='22 000'
                        subtitle='квадратных метров'
                        text='Площадь производственного комплекса составляет более 22 тысяч квадратных метров.'
                    />
                </div>
                <div className='col-12 col-sm-6 col-lg-4'>
                    <AboutItem
                        title='250'
                        subtitle='человек'
                        text='Штат сотрудников насчитывает 250человек.'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutInfo
