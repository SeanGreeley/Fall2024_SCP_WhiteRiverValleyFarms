//import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Corn from '../Images/corn.png';
import Garlic from '../Images/garlic.png'
import Peas from '../Images/peas.png'
import Tomato from '../Images/TomatoPlant2.png'
import allText from '../textElements.json';

function OurProduct() {
  const allImages = [Corn, Garlic, Peas, Tomato];
  return (
    <div id='root' className="App">
      <h1>{allText.home.title}</h1>
      <nav>
        <Link to='/'>Home</Link>  
        <Link to='/product'>Our Product</Link>
        <Link to='/CSA'>What is a CSA</Link>
        <Link to='/join'>Join Us</Link>
      </nav>
      <div>{allText.produce.listings.map((p,idx) => p.enabled && (<div> 
          <img src={allImages[idx]} style={{width: '200px', height: '200px', objectFit: 'cover', margin: '10px'}} alt={p.alt} title={p.alt}/>
          <h2>{p.name}</h2>
          <p>{p.desc}</p>
      </div>))}</div>
    </div>
  );
}

export default OurProduct;
