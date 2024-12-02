//import logo from './logo.svg';
import Corn from '../Images/corn.png';
import Garlic from '../Images/garlic.png'
import Peas from '../Images/peas.png'
import Tomato from '../Images/TomatoPlant2.png'
import Carrot from '../Images/carrot.png'
import Peppers from '../Images/peppers.png'
import Squash from '../Images/squash.png'
import DefaultImage from '../Images/cropRow.png'
import allText from '../textElements.json';
import Header from './header';
import Footer from './footer';
import colors from '../colors.json'

function OurProduct() {
  const allImages = [Corn, Garlic, Peas, Tomato, Carrot, Peppers, Squash, DefaultImage];
  const paragraphStyles = {
    color: colors.charcoal,
    fontSize: '3vh',
    backgroundColor: colors.ivory,
    padding: '0.5vh',
    fontFamily: 'Itim'
  };
  const headerStyles = {
    color: colors.orange,
    backgroundColor: colors.ivory,
    padding: '0.5vh',
    fontSize: '4vh',
    fontFamily: 'Elsie Swash Caps'
  };
  const imgStyles ={
    width: '33vh', 
    height: '33vh', 
    objectFit: 'cover', 
    padding: '10px',
    borderRadius: '30px',
    backgroundColor: colors.ivory
  };
  const gridStyles = {
    paddingTop:'22.5vh',
    display: 'grid',
    width: '80%',
    gridTemplateColumns: 'repeat(auto-fit, minmax(44vh, 1fr))'
  }
  return (
    <div id='root' className="App" style={{backgroundColor:colors.ivory}}>
      <Header page="product"/>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <div style={gridStyles}>{allText.produce.listings.map((p,idx) => p.enabled && (<div> 
          <img src={allImages[Math.min(idx,allImages.length-1)]} style={imgStyles} alt={p.alt} title={p.alt}/>
          <h2 style={headerStyles}>{p.name}</h2>
          <p style={paragraphStyles}>{p.desc}</p>
      </div>))}</div>
      </div>
      <Footer/>
    </div>
  );
}

export default OurProduct;
