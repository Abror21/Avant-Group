import './Building.css'
import img from '../../images/building-img.png'
import imgHang1 from '../../images/building-hang-img1.jpg'
import imgHang2 from '../../images/building-hang-img2.jpg'
import imgHang3 from '../../images/building-hang-img3.jpg'

const Building = () => {
    return (
        <div className='building'>
            <div className='container'>
                <div className='building__content'>
                    <img src={img} alt="building" />
                    <div className='building__content-wrapper'>
                        <h4>«Здание-лотос» The Lotus Building</h4>
                        <span>г.Ташкент. Шайхантахурский район.</span>
                        <hr />
                        <p>
                            По задумке австралийских архитекторов,«Здание - лотос», состоящее из трех  частей, символизирует три этапа в жизни цветка лотоса
                        </p>
                    </div>
                </div>
            </div>
            <img src={imgHang1} alt="building" className='building__hang-img1' />
            <img src={imgHang2} alt="building" className='building__hang-img2' />
            <img src={imgHang3} alt="building" className='building__hang-img3' />
        </div>
    )
}

export default Building
