import React from 'react'

function Navbar() {
    return (
        <nav className='container'>
            <div className="navWrapper">
                <div className="logo">
                    <img className='imgStyle' src="" alt="" />
                </div>
                <div className="menus">
                    <ul className="menulist">
                        <li className="menuitem">Home</li>
                        <li className="menuitem">Team</li>
                        <li className="menuitem">badges</li>
                        <li className="menuitem">Events</li>
                    </ul>
                </div>
                <div className="btn">Contact us</div>
            </div>
        </nav>
    )
}

export default Navbar