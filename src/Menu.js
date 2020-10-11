import React from 'react'
import './Menu.css'
import menuCard from './Media/menuCard.jpg'

function Menu() {
    return (
        <div className="menu">
            <div className="menu__txt">
                <h1>Menu</h1>
                <h5>Address - Galaxy Vega, Amrapali Dream Valley, Greater Noida, Uttar Pradesh</h5>
                <h5>Contact No. - 9971068134</h5>
                <h5>Hurry UP (50% OFF on first Order)!!!</h5>
                <a className="menu__tag" href="https://www.zomato.com/ncr/wah-ji-wah-3-rohini-new-delhi" target="_blank" rel="noopener noreferrer">
                    <h5 className='menu__link'>Order Now</h5>
                </a>  
            </div>

            <div className="menu__card"> 
                <img src={menuCard} alt="menu card of BUNCH O LUNCH" />
            </div>
        </div>
    )
}

export default Menu
