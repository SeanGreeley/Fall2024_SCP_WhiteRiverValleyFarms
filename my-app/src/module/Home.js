import { Link } from 'react-router-dom';
import HomeScreen from '../Images/home_Screen.png';

function Home() {
  return (
    <div id='root' className="App">
      <h1>White River Valley Farms</h1>
      <nav>
        <Link to='/'>Home</Link>  
        <Link to='/product'>Our Product</Link>
        <Link to='/CSA'>What is a CSA</Link>
        <Link to='/join'>Join Us</Link>
      </nav>
      <h1>Let's Grow Together</h1>
      <p>White River Valley Farms is a humble Community Supported Agriculture (CSA) project led by Ozarks resident Michael Maniatis. After growing up in the northwestern United States and moving around the country as a young adult, Michael fell in love with the Ozarks and found himself wanting to give back to his new home. Inspired by the likes of Millsap Farms and fueled by a newfound appreciation for local agriculture, Michael founded White River Valley Farms to grow and share local, fresh produce.</p>
      <p>The mission of White River Valley Farms is simple: helping the Ozarks grow together. Nothing brings a community together quite like local agriculture. Our CSA wants to contribute to the Ozarks with quality produce and neighborly love.</p>
      <img src={HomeScreen} style={{width:'81px', height: '61px', margin: '10px'}} alt="Farm image."/>
    </div>
  );
}

export default Home;