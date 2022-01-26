import React, { useState } from 'react'

import './FilterBlock.css'

export const FilterBlock = () => {
  const [isShown, setIsShown] = useState(false)

  const handleShowFilter = () => {
    setIsShown(!isShown)
  }

  return (
    <section className='filter'>
      <div className='filter__content'>
        <div className='filter__line'>
          <h1 className='filter__title'>Filter block</h1>
          <div className='filter__icon' onClick={handleShowFilter} />
        </div>
        {isShown ? (
          <form className='form'>
            <input className='form__input' type='date' placeholder='Дата от' />
            <input className='form__input' type='date' placeholder='Дата до' />
            <input className='form__input' type='date' placeholder='Дата от' />
            <input className='form__input' type='date' placeholder='Дата до' />
            <input className='form__input' type='text' placeholder='Имя клиента' />
            <input className='form__input' type='tel' placeholder='Телефон' />
            <input className='form__input' type='text' placeholder='Имя клиента' />
            <input className='form__input' type='tel' placeholder='Телефон' />
          </form>
        ) : null}
      </div>
      <main className='filter__main-content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati
        qui, magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati
        qui, magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati
        qui, magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati
        qui, magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati
        qui, magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati
        qui, magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati
        qui, magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati
        qui, magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati
        qui, magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati
        qui, magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Error necessitatibus itaque, provident quis obcaecati qui,
        magnam quidem libero voluptas magni natus, eos ullam dolorem ipsum quod nesciunt nisi doloremque odio.
      </main>
    </section>
  )
}
