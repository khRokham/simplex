import React from 'react'

const Navbar = () => {
    return (
        <div className="navBar-wrapper">
            <div className="logo">simplex</div>
            <ul className="nav">
                <li className="list-item"><a href= "#">Home</a></li>
                <li className="list-item"><a href= "#">Services</a></li>
                <li className="list-item"><a href= "#">Pricing</a></li>
                <li className="list-item"><a href= "#">Contact-Us</a></li>
                <li className="list-item"><a href= "#">About-Us</a></li>
            </ul>
        </div>
    )
}

export default Navbar
