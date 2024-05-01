import About from './componants/about';
import Article from './componants/articls';
import Banner from './componants/banner';
import Best from './componants/best';
import Footer from './componants/footer';
import How from './componants/how';
import Main from './componants/main';
import Nav from './componants/nav';
import Reviews from './componants/reviews';
import Slid from './componants/slide';

function App() {
  return (
    <>
    <Nav/>
    <Main/>
        <About/>
    <Slid/>
    <How/>
    <Best/>
    <Article/>
    <Banner/>
    <Reviews/>
    <Footer/>
    </>
  );
}

export default App;
