import '../css/best.css'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'


export default function Best(){
    return(
<div class='bestsilling' id='cesmetique'>
<div class='h1'>
<h1>Bestselling</h1>
</div>
           
<div class='imagess'>
    <div class='img1'>
    <img src={p1}/>
    <div class='p1'>
    Beauty Hydrating Cream
    </div>
    <div class='p2'>
    $99.99
    </div>
    <div class='btn-best'>
    <button>Add To Carte</button>
    </div>
    </div>
<div class='img2'>
    <div class='imgs1flex'>

    <div class='firstdivimge'>
    <img src={p2}/>
    <div class='p1'>
    Beauty Cream    </div>
    <div class='p2'>
    $27.99
    </div>
    <div class='btn-best'>
    <button>Add To Carte</button>
    </div>    </div>
    <div class='seconddivimge'>
    <img src={p3}/>
    <div class='p1'>
    Beauty Lipstick    </div>
    <div class='p2'>
    $19.99
    </div>
    <div class='btn-best'>
    <button>Add To Carte</button>
    </div>    </div>



    </div>
    <div class='imgs2flex'>

<div class='firstdivimge'>
<img src={p4}/>
<div class='p1'>
Beauty Fragrance</div>
<div class='p2'>
$59.99
</div>
<div class='btn-best'>
    <button>Add To Carte</button>
    </div></div>
<div class='seconddivimge'>
<img src={p5}/>
<div class='p1'>
Beauty Hydrating Cream
</div>
<div class='p2'>
$13.99
</div>
<div class='btn-best'>
    <button>Add To Carte</button>
    </div></div>



</div>
</div>




</div>
        </div>
    )
}