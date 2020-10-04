import React from 'react'
import './Menu.css'
import menuCard from './Media/menuCard.jpg'

function Menu() {
    return (
        <div className="menu">
            <div className="menu__img">
                <h1>Menu</h1>
                <h5>Address - C-49, Anoop Nagar, Uttam Nagar, New Delhi- 110059</h5>
                <h5>Contact No. - 8882717172</h5>
                <h5>Hurry UP (50% OFF on first Order)!!!</h5>
                <a className="menu__img" href="https://www.zomato.com/ncr/wah-ji-wah-3-rohini-new-delhi" target="_blank" rel="noopener noreferrer">
                    <h5 className='menu__link'>Order Now</h5>
                </a>
                
            </div>

            <div className="menu__card"> 
                <img src={menuCard} />
            </div>
        </div>
    )
}

export default Menu
