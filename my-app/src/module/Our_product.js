//import logo from './logo.svg';
import Corn from '../Images/corn.png';
import Garlic from '../Images/garlic.png'
import Peas from '../Images/peas.png'
import Tomato from '../Images/TomatoPlant2.png'
import DefaultImage from '../Images/cropRow.png'
import allText from '../textElements.json';
import Header from './header';
import Footer from './footer';
import colors from '../colors.json'

function OurProduct() {
  const allImages = [Corn, Garlic, Peas, Tomato, DefaultImage];
  const paragraphStyles = {
    color: colors.charcoal,
    fontSize: '24px',
    backgroundColor: colors.ivory,
    padding: '0.25em',
    fontFamily: 'Itim'
  };
  const headerStyles = {
    color: colors.orange,
    backgroundColor: colors.ivory,
    padding: '0.25em',
    fontSize: '4vh',
    fontFamily: 'Elsie Swash Caps'
  };
  const imgStyles ={
    width: '200px', 
    height: '200px', 
    objectFit: 'cover', 
    padding: '10px',
    backgroundColor: colors.ivory
  }
  return (
    <div id='root' className="App" style={{backgroundColor:colors.ivory}}>
      <Header/>
      <div>{allText.produce.listings.map((p,idx) => p.enabled && (<div> 
          <img src={allImages[Math.min(idx,allImages.length-1)]} style={imgStyles} alt={p.alt} title={p.alt}/>
          <h2 style={headerStyles}>{p.name}</h2>
          <p style={paragraphStyles}>{p.desc}</p>
      </div>))}</div>
      <Footer/>
    </div>
  );
}

export default OurProduct;
