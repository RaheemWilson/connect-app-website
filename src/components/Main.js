import HeroImage from '../assets/hero.webp'
import AppPage from '../assets/app-page.webp'
import AppSignUp from '../assets/app-login.webp'
import AppUsers from '../assets/app-users.webp'
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import user4 from '../assets/user-4.png'
import '../styles/main.scss'
import { ReviewCards } from './ReviewCards'

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
            <div className='credibility-content'>
                <img src={AppPage} alt="Connect app preview" className='app-screen'/>
                <div className="credible-info">
                    <h2 id='credible-header'>
                        Everything you love and more.
                    </h2>
                    <p id='credible-desc'>
                        See what others are posting and saving about your favourite topics. 
                        Make new friends easily and keep in touch.
                    </p>
                    <div className='stats'>
                        <div className="user-profiles">
                            <img src={user4} alt="User profile" className="profiles" />
                            <img src={user3} alt="User profile" className="profiles" />
                            <img src={user2} alt="User profile" className="profiles" />
                            <img src={user1} alt="User profile" className="profiles" />
                        </div>
                        <p>
                            Trusted by over 1 million users
                        </p>
                    </div>
                </div>
            </div>
            <div className="register-content">
                <div className='register-info'>
                    <h2 id='register-header'>
                        Global reach, right from your pocket.
                    </h2>
                    <p id='register-desc'>
                        With people all across the world, you’re bound to meet people of different cultures and backgrounds or even right at home.
                    </p>
                    <button className='btn register-today'>Register today</button>
                </div>
                <div className="register-img">
                    <img src={AppSignUp} alt="Sign up screen of the Connect app"/>
                </div>
            </div>
            <div className="review-content">
                <h2 className='review-header'>
                    Why people choose Connect
                </h2>
                <p className="review-desc">
                    Don’t just take our word for it, find out why over <span>one million people</span> use Connect.
                </p>
                <ReviewCards></ReviewCards>
            </div>
            <div className="cta-content">
                <div className='cta-info'>
                    <h2 id='cta-header'>
                        Sign up today.
                    </h2>
                    <p id='cta-desc'>
                    Use Connect to meet people just like you. It’s 100% free.
                    </p>
                    <button className='btn cta-today'>Starting using Connect</button>
                </div>
                <div className="cta-img">
                    <img src={AppUsers} alt="Users using the Connect app"/>
                </div>
            </div>

        </div>
    );
}