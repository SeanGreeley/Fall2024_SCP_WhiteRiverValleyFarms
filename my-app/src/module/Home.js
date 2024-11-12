import { Link } from 'react-router-dom';
import HomeScreen from '../Images/home_Screen.png';
import allText from '../textElements.json';

function Home() {
  return (
    <div id='root' className="App">
      <h1>{allText.home.title}</h1>
      <nav>
        <Link to='/'>Home</Link>  
        <Link to='/product'>Our Product</Link>
        <Link to='/CSA'>What is a CSA</Link>
        <Link to='/join'>Join Us</Link>
      </nav>
      <h1>{allText.home.header}</h1>
      <p>{allText.home['body-1']}</p>
      <p>{allText.home['body-2']}</p>
      <img src={HomeScreen} style={{width:'81px', height: '61px', margin: '10px'}} alt="Farm image."/>
    </div>
  );
}

export default Home;