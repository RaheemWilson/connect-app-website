import '../styles/footer.scss'
import AppIcon from '../assets/app-icon.svg'

export default function Footer(){
    return (
        <footer className="page-footer">
            <nav className="nav-bar">
                <div className="app-logo">
                    <img src={AppIcon} alt="App's icon" />
                    <p className="app-name">
                        Connect
                    </p>
                </div>
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
                            <button className="btn user-signup">Sign up</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    );
}