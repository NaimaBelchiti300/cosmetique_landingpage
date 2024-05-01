import '../css/article.css'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'


export default function Article(){
    return(
<div class='container-articles' id='blog'>
<div class='article'>
<div class='article-heading'>
    <h1>News Articles</h1>
</div>
<div class='btn-article'>
    <button class='btn'>CHECK OUR BLOG</button>
</div>


        </div>
        <div class='articles-cards'>
        <div class='card'>
            <img src={card1}/>
            <div class='card-p1'>
                <p>         Best Beauty Products to try this 2021
</p>
            </div>
            <div class='card-p2'>
            October 4, 2021
    
            </div>
        </div>


        <div class='card'>
            <img src={card2}/>
            <div class='card-p1'>
                <p>            Moisturizer for Dry and Cold Season
</p>
            </div>
            <div class='card-p2'>
            October 4, 2021
    
            </div>
        </div>

        <div class='card'>
            <img src={card3}/>
            <div class='card-p1'>
         <p>   Products Every Woman Should Have on their Bag        </p>    </div>
            <div class='card-p2'>
            October 4, 2021
    
            </div>
        </div>
    </div>
</div>
    )
}