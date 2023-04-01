import './Equipment.css'
import img from '../../images/equipment-img.png'

const Equipment = () => {
    return (
        <div className='container equipment'>
            <div className='row'>
                <div className='col-lg-7 equipment__left'>
                    <img src={img} alt="" />
                </div>
                <div className='col-lg-5 equipment__right'>
                    <h3 className='default-title equipment__title'>Оборудования <span>мировых лидеров</span></h3>
                    <p>
                        На площади комплекса размещено оборудованиемировыхлидеров в области металлообработки, такихкак:
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Equipment
