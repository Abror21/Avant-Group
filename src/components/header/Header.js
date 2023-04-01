import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Button from '../button/Button'
import './Header.css'

const Header = () => {
    return (
        <header className='header container'>
            <Link to='/' className='header__logo'>
                <img src={logo} alt="Logo" />
            </Link>
            <ul className='header__list'>
                <li className='header__item'><Link className='header__link'>О нас</Link></li>
                <li className='header__item'><Link className='header__link'>Услуги</Link></li>
                <li className='header__item'><Link className='header__link'>Производство</Link></li>
                <li className='header__item'><Link className='header__link'>Партнеры</Link></li>
                <li className='header__item'><Link className='header__link'>Наши проекты</Link></li>
            </ul>
            <div className='header__lang'>Ru <span>Uz</span></div>
            <Button title='Контакты' route='/'/>
        </header>
    )
}

export default Header
