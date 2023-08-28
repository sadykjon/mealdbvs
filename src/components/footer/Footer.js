import React from 'react'

const Footer = () => {
  return (
    <div id='footer'>
      <div className='container'>
        <div className='footer'>
          <div>
            <p>© 2023 TheMealDB</p>
            <p>Proudly built in the UK</p>
          </div>
          <div>
            <img src="https://www.themealdb.com/images/logo-tcdb.png" alt="" />
            <img src="https://www.themealdb.com/images/logo-tadb.png" alt="" />
            <img src="https://www.themealdb.com/images/logo-tsdb.png" alt="" />
          </div>
          <div>
            <ul className='footer_menu'>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
