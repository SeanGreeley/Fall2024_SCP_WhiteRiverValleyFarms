import Header from './header';
import Footer from './footer';
import HomeScreen from '../Images/home_Screen.png';
import allText from '../textElements.json';

function Home() {
  return (
    <div id='root' className="App">
      <Header/>
      <h1>{allText.home.header}</h1>
      <p>{allText.home['body-1']}</p>
      <p>{allText.home['body-2']}</p>
      <img src={HomeScreen} style={{width:'81px', height: '61px', margin: '10px'}} alt="Farm image."/>
      <Footer/>
    </div>
  );
}

export default Home;