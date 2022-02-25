import '../styles/header.scss'
import AppIcon from '../assets/app-icon.svg'
import MenuBar from '../assets/menu_black.svg'
import React, { useEffect, useState } from 'react'

export default function Header(){
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {

        const handleResize = () => {
            if(window.innerWidth < 900){
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    
    return (
        <header className="page-header">
            <nav className="nav-bar">
                <div className="app-logo">
                    <img src={AppIcon} alt="App's icon" />
                    <p className="app-name">
                        Connect
                    </p>
                </div>
                {
                    isMobile ? 
                        <img src={MenuBar} alt="Menu Bar" />
                    : (
                        <div className="nav-links">
                            <ul className="nav-options">
                                <li className="nav-option">
                                    Home
                                </li>
                                <li className="nav-option">
                                    About Us
                                </li>
                                <li className="nav-option">
                                    Explore
                                </li>
                                <li className="nav-option">
                                    <button className="btn user-login">Login</button>
                                </li>
                                <li className="nav-option">
                                    <button className="btn user-signup">Sign up</button>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </nav>
        </header>
    );
}