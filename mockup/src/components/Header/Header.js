import React from 'react'

import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <input className='header__search' placeholder='Поиск...' />
      <div className='header__line'>
        <div className='header__name'>Петров В.А.</div>
        <img className='header__img' src='' alt='В.А' />
      </div>
    </header>
  )
}
