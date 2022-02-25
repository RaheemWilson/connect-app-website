import star from '../assets/star.svg'
import starOutlined from '../assets/star-outlined.svg'
import { reviews } from '../data/review'

export const ReviewCards = () => {
    return (
        <div className="review-cards">
            {
                reviews.map((review, index) => {
                    return (
                        <div className="review-card" key={index}> 
                            <img src={require('../assets/'+review.profile)} alt="User" className='user'/>
                            <h3>{review.name}</h3>
                            <div className="rating">
                                {
                                    Array(5).fill(0).map((element, index) =>{
                                        return (
                                            <img src={index < review.rating ? star : starOutlined } 
                                                alt="Star" 
                                                key={element+index}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <p className="review">
                                {review.review}
                            </p>
                            <button className='btn'>View Review</button>
                        </div>
                    )
                })
            }
        </div>
    )
}