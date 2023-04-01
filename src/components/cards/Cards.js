import './Cards.css'
import Card from './Card'
import icon1 from '../../images/cards-img1.png'
import icon2 from '../../images/cards-img2.png'
import icon3 from '../../images/cards-img3.png'
import icon4 from '../../images/cards-img4.png'
import icon5 from '../../images/cards-img5.png'


const Cards = () => {
    return (
        <div className='container cards'>
            <div className='row '>
                <div className='col-md-6 col-lg-4'>
                    <Card icon={icon1} text='Создание 3D расчётной схемы каркаса сооружения' />
                </div>
                <div className='col-md-6 col-lg-4'>
                    <Card icon={icon2} text='Сбор постоянных и временных нагрузок, действующих на сооружение' />
                </div>
                <div className='col-md-6 col-lg-4'>
                    <Card icon={icon3} text='Разработка принципиальных узловых соединений элементов конструкции' />
                </div>
                <div className='col-md-6'>
                    <Card icon={icon4} text='Стадия расчетов, графического анализа и подбора сечений профилей' />
                </div>
                <div className='col-md-6'>
                    <Card icon={icon5} text='Выпуск комплектов чертежей проектной (стадия П) и/или рабочей документации (стадия Р) марки КМ (конструкции металлические)' />
                </div>
            </div>
        </div>
    )
}

export default Cards
