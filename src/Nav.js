import React from 'react'
import "./Nav.css"
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {
    return (
        <div className="nav">
            <MenuIcon className="nav__menu" />
            <span className="nav__all">All</span>
            <span className="nav__text">Gift Cards</span>
            <span className="nav__text">Best Seller</span>
            <span className="nav__text">Prime</span>
            <span className="nav__text">Customer Service</span>
            <span className="nav__text">New Release</span>
            <span className="nav__text">Find a Gift</span>
            <span className="nav__text">Whole Food</span>
            <span className="nav__text">AmazonBasics</span>
            <span className="nav__text">Today's Deal</span>
            <span className="nav__text">Coupons</span>
            <span className="nav__text">Free Shipping</span>
            <span className="nav__textRight">Shop holiday gift cards</span>
        </div>
    )
}

export default Nav
