//import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Corn from '../Images/corn.png';
import Garlic from '../Images/garlic.png'
import Peas from '../Images/peas.png'
import Tomato from '../Images/TomatoPlant2.png'
import allText from '../textElements.json';

function OurProduct() {
  return (
    <div id='root' className="App">
      <h1>{allText.home.title}</h1>
      <nav>
        <Link to='/'>Home</Link>  
        <Link to='/product'>Our Product</Link>
        <Link to='/CSA'>What is a CSA</Link>
        <Link to='/join'>Join Us</Link>
      </nav>
      <p>Corn</p>
      <p>Product Harvest Period</p>
      <img src={Corn} style={{width:'69px', height: '91px', margin: '10px'}} alt="Fresh Corn in Wheel Barral."/>
      <p>Garlic</p>
      <p>Product Harvest Period</p>
      <img src={Garlic} style={{width:'73px', height: '98px', margin: '10px'}} alt="Many Galic bulbs on table."/>
      <p>Peas</p>
      <p>Product Harvest Period</p>
      <img src={Peas} style={{width:'72px', height: '97px', margin: '10px'}} alt="Many Galic bulbs on table."/>
      <p>Tomato</p>
      <p>Product Harvest Period</p>
      <img src={Tomato} style={{width:'73px', height: '99px', margin: '10px'}} alt="Many Galic bulbs on table."/>
    </div>
  );
}

export default OurProduct;
