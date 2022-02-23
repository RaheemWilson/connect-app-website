import HeroImage from '../assets/hero.png'
import AppPage from '../assets/app-page.png'
import '../styles/main.scss'

export default function Main(){
    return (
        <div className="main-container">
            <div className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Connecting you across the world
                    </h1>
                    <p className="hero-info">
                        Connect aims to make it easier to interact with others. 
                        Start today to find people would love the same things as you. 
                    </p>

                    <div className="hero-ctas">
                        <button className="btn signup-cta">Sign up today</button>
                        <button className="btn learn-more">Learn more</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="User interacting with Connect"/>
                </div>
            </div>
            <div>
                <img src={AppPage} alt="Connect app preview" />
            </div>
        </div>
    );
}