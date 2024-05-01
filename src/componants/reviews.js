import avatar from '../images/image-removebg-preview (22).png'
import '../css/reviews.css'
export default function Reviews(){
    return(
        <div class='reviews' id='reviews'>
            <div class='reviews-heading'>
                <h1>What Our Customers Are Saying</h1>
            </div>
            <div class='reviews-card'>
                <div class='cards'>
                    <h1>realy love the product and fast delivry</h1>
                    <p>After trying out several cosmetic products,  I'm truly impressed and will definitely be a returning customer.</p>
                    <div class='icons-reviews'>
                        <div class='imgs'>
                        <img src={avatar}/>
                        </div>
                        <div class='clientname'>
                        <h3>JANE DOE</h3>
                        </div>
                    </div>
                </div>
                <div class='cards'>
                <h1>Impressed by the Quality and Speedy Delivery</h1>
<p>After trying out several cosmetic products,  I'm truly impressed and will definitely be a returning customer.</p>
                    <div class='icons-reviews'>
                        <div class='imgs'>
                        <img src={avatar}/>
                        </div>
                        <div class='clientname'>
                        <h3>JANE DOE</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}