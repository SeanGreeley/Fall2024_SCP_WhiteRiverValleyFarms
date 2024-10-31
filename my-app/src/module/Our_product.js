//import logo from './logo.svg';
import { Link } from 'react-router-dom';

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
      <p>hello we are in the our product page</p>
    </div>
  );
}

export default OurProduct;
