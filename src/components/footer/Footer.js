import './Footer.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row footer__content'>
                    <div className='col-sm-2 footer__logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='col-md-4'>
                        <div className='footer__social'>
                            <p>
                                Компания OOO 'ENGINEERING' Avant Metal Group зарекомендовала себя как надежного и ответственного производителя, в продукции которой вы можете быть уверены.
                            </p>
                            <div className='footer__icons'>
                                <Link to=''>
                                    <i className="fab fa-facebook" />
                                </Link>
                                <Link to=''>
                                    <i className="fab fa-twitter" />
                                </Link>
                                <Link to=''>
                                    <i className="fab fa-instagram" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <ul className='footer__list'>
                            <li><Link className='footer__link'>About Us</Link></li>
                            <li><Link className='footer__link'>Pricing Table</Link></li>
                            <li><Link className='footer__link'>Contact Us</Link></li>
                            <li><Link className='footer__link'>Meet Our Team</Link></li>
                            <li><Link className='footer__link'>Latest News</Link></li>
                            <li><Link className='footer__link'>Case Studies</Link></li>
                            <li><Link className='footer__link'>FAQ’s</Link></li>
                            <li><Link className='footer__link'>Services</Link></li>
                            <li><Link className='footer__link'>Customer Support</Link></li>
                            <li><Link className='footer__link'>Контакты</Link></li>
                            <li><Link className='footer__link'>Обратная свзяь</Link></li>
                            <li>По вопросам партнерства+998 95 606 33 33<br /> info@avantgroup.uz</li>
                        </ul>
                    </div>
                </div>
                <hr className='footer__line'/>
                <div className='footer__rights'>
                    <p>OOO 'ENGINEERING' Avant Metal Group © 2021 Все права защищены</p>
                    <p>Условия обработки персональных данных</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
