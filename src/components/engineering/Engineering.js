import './Engineering.css'
import img1 from '../../images/engineering-img1.png'
import img2 from '../../images/engineering-img2.png'

const Engineering = () => {
    return (
        <div className='container engineering'>
            <div className='row'>
                <div className='col-sm-6 col-lg-3'>
                    <img src={img1} alt="image" className='engineering__img1' />
                </div>
                <div className='col-sm-6 col-lg-5'>
                    <p className='engineering__text'>
                        Компания OOO 'ENGINEERING' Avant Metal Group зарекомендовала себя какнадежного и ответственного производителя, в продукциикоторого вы можете быть уверены.
                    </p>
                </div>
                <div className='col-sm-6 col-lg-3'>
                    <img src={img2} alt="image" className='engineering__img2'/>
                </div>
            </div>
        </div>
    )
}

export default Engineering;