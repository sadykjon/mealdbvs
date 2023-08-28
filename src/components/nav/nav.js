import React from 'react'

function Nav() {
  return (
    <div>
      <div className="container">
        <div className='welcomeToMeal'>
            <div className='soup_header'>
                <img src='https://www.themealdb.com/images/meal-icon.png' />
            </div>
            <div className='text_header'>
                <h1>Welcome to TheMealDB</h1>
                <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
                <p>We also offer a <a href='#' className='brown'>free JSON API</a> for anyone wanting to use it, with additional features for subscribers.</p>
                <button className='btn_header'>
                  <img className='paypal_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1200px-PayPal_logo.svg.png" alt="" />
                  <span>Подписаться</span>
                </button>
                <p>Click to Support £3 per month (cancel anytime)</p>
                <p>Currently 76 supporters</p>
            </div>
            <div className='soup_header'>
                <img src='https://www.themealdb.com/images/meal-icon.png' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
