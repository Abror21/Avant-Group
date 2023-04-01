import { Button } from 'react-bootstrap'
import './Development.css'
import img from '../../images/development-img.png'

const Development = () => {
    return (
        <div className='container development'>
            <div className='row'>
                <div className='col-lg-5'>
                    <div className='development__left'>
                        <h3 className='default-title'>Разработка <span>чертежей КМ и КМД</span></h3>
                        <p>
                            Исходным документом для проектирования любого здания илисооружения является задание на проектирование, составленноезаказчиком.
                        </p>
                        <Button variant='danger' className='intro__btn' style={{width: 'max-content'}}>Задание на проектирование</Button>
                    </div>
                </div>
                <div className='col-lg-2'></div>
                <div className='col-lg-5'>
                    <div className='development__right'>
                        <img src={img} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Development;