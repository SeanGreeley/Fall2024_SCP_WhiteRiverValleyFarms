//import logo from './logo.svg';
import { Link } from 'react-router-dom';

function Product(title, description){
  return(
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

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
      <Product title='Produce Title' description='Produce Desciption'/>
    </div>
  );
}

export default OurProduct;
