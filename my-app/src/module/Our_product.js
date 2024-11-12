//import logo from './logo.svg';
import Corn from '../Images/corn.png';
import Garlic from '../Images/garlic.png'
import Peas from '../Images/peas.png'
import Tomato from '../Images/TomatoPlant2.png'
import DefaultImage from '../Images/cropRow.png'
import allText from '../textElements.json';
import Header from './header';
import Footer from './footer';

function OurProduct() {
  const allImages = [Corn, Garlic, Peas, Tomato, DefaultImage];
  return (
    <div id='root' className="App">
      <Header/>
      <div>{allText.produce.listings.map((p,idx) => p.enabled && (<div> 
          <img src={allImages[Math.min(idx,allImages.length-1)]} style={{width: '200px', height: '200px', objectFit: 'cover', margin: '10px'}} alt={p.alt} title={p.alt}/>
          <h2>{p.name}</h2>
          <p>{p.desc}</p>
      </div>))}</div>
      <Footer/>
    </div>
  );
}

export default OurProduct;
