import '../css/main.css'
import produit from '../images/image-removebg-preview (13).png'
export default function Main(){
    return(
        <div class='container'>

            <div class='heading'>
                <h1>High Quality Beauty Products for Women</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodtempor invidunt ut labore et dolore magna
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmodtempor invidunt ut labore et dolore magna

                </p>
                <button>SHOP NOW</button>
            </div>
            <div class='imgcosmetique'>
<img src={produit}/>
            </div>
        </div>
    )
}