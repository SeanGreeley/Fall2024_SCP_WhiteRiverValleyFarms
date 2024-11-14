import Header from './header';
import Footer from './footer';
import HomeScreen from '../Images/home_Screen.png';
import allText from '../textElements.json';
import colors from '../colors.json'

function Home() {
  const paragraphStyles = {
    color: colors.charcoal,
    textAlign: 'left',
    fontSize: '24px',
    backgroundColor: colors.ivory,
    padding: '1em',
    width: '50vw',
    minWidth: '300px',
    fontFamily: 'Itim'
  };
  const headerStyles = {
    color: colors.orange,
    backgroundColor: colors.ivory,
    padding: '1em',
    fontSize: '6vh',
    fontFamily: 'Elsie Swash Caps'
  };
  const textboxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ivory,
  };
  const divStyles = {
    backgroundColor: colors.ivory,
    display:'flex',
    flexDirection:'row'
  };
  return (
    <div id='root' className="App">
      <Header/>
      <div id='content' style={divStyles}>
        <div id='textbox' style={textboxStyles}>
          <h1 style={headerStyles}>{allText.home.header}</h1>
          <p style={paragraphStyles}>{allText.home['body-1']}</p>
          <p style={paragraphStyles}>{allText.home['body-2']}</p>
        </div>
        <img src={HomeScreen} style={{width:'40vw',height:'30vw', margin: '2em'}} alt="Farm image."/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;