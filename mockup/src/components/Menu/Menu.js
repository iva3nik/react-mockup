import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

export const Menu = () => {
  return (
    <aside className='menu'>
      <div className='menu__name'>
        <img src='' alt='Logo' className='menu__img' />
        Name Company
      </div>

      <nav className='menu__navigation'>
        <Link to='/' className='menu__link'>
          <div className='menu__circle' />
          Главная
        </Link>
        <Link to='/clients' className='menu__link'>
          <div className='menu__circle' />
          Клиенты
        </Link>
        <Link to='/employees' className='menu__link'>
          <div className='menu__circle' />
          Сотрудники
        </Link>
        <Link to='/analytics' className='menu__link'>
          <div className='menu__circle' />
          Аналитика
        </Link>
      </nav>
    </aside>
  )
}
