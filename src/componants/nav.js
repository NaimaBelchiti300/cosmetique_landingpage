import insta from '../images/icons8-instagram-50.png'
import fb from '../images/icons8-facebook-24.png'
import {useState,useEffect} from 'react'
import menu from '../images/icons8-menu-24 (1).png'
import '../css/nav.css'
export default function Nav(){
    const [menuburger,setmenuburger]=useState(false)
    const [navfixed,setnavfixed]=useState(false)

    const menuburgerfunction=()=>{
        setmenuburger(!menuburger);
        
}
    
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth',block: 'start'});
        setmenuburger(false); // Close the menu after scrolling
    }
};


useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  // console.log(scrollPosition);
      if (scrollPosition > 100) {
        setnavfixed(true);
    } else {
        setnavfixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return(
        <nav className={navfixed ? 'nav-fixed' : ''}>
        <div class='logo'>
            <a>LOGO</a>
            <img src={menu} onClick={menuburgerfunction}/>
        </div>
            <ul className={menuburger ? "menu" : ""}>
                <li><a style={{cursor:'pointer'}} onClick={() => scrollToSection('about')}    >About</a></li>
                <li><a style={{cursor:'pointer'}} onClick={() => scrollToSection('cesmetique')}    > Cosmetics</a></li>
                <li><a style={{cursor:'pointer'}}onClick={() => scrollToSection('blog')}    >Blog</a></li>
                <li><a style={{cursor:'pointer'}}onClick={() => scrollToSection('reviews')}   >Reviews</a></li>
            </ul>
            <div class='icon'>
                <a><img src={insta} class='insta'/></a>
                <a><img src={fb}/></a>

            </div>
        </nav>
    )
}