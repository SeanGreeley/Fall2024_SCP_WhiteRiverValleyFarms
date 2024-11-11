//import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Corn from '../Images/corn.png';
import Garlic from '../Images/garlic.png'

function OurProduct() {
  return (
    <div id='root' className="App">
      <h1>White River Valley Farms</h1>
      <nav>
        <Link to='/'>Home</Link>  
        <Link to='/product'>Our Product</Link>
        <Link to='/join'>Join Us</Link>
        <Link to='/CSA'>What is a CSA</Link>
      </nav>
      <p>Corn</p>
      <p>Product Harvest Period</p>
      <img scr={Corn} style={{width:'69px', height: '91px', margin: '10px'}} alt="Fresh Corn in Wheel Barral."/>
      <p>Garlic</p>
      <p>Product Harvest Period</p>
      <img scr={Garlic} style={{width:'73px', height: '98px', margin: '10px'}} alt="Many Galic bulbs on table."/>
    </div>
  );
}

export default OurProduct;
