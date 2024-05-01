import '../css/slide.css'
import mackup from '../images/card2.png'
import face from '../images/mackupface.png'
import body from '../images/bodycare.png'

export default function Slid(){
    return(
        
        < div class='card-area'>
            <div class='wrapper'>
                <div class='box-area'>
                    <div class='box'>
                    <img src={mackup}/>
                    <div class='overlay'>
                            <h3>Makeup</h3>
                          
                        </div>
                    </div>
                    <div class='box'>
                    <img src={face}/>
                    <div class='overlay'>
                            <h3>Face Care</h3>
                        </div>
                    </div>
                    <div class='box'>
                    <img src={body}/>
                    <div class='overlay'>
                            <h3>Body Care</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}