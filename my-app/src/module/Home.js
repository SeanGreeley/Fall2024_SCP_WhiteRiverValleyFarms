import Header from './header';
import Footer from './footer';
import HomeScreen from '../Images/home_Screen.png';
import allText from '../textElements.json';
import colors from '../colors.json'

function Home() {
  const paragraphStyles = {
    color: colors.charcoal,
    textAlign: 'left',
    fontSize: '3.5vh',
    backgroundColor: colors.ivory,
    padding: '1em',
    minWidth: '250px',
    fontFamily: 'Itim'
  };
  const headerStyles = {
    color: colors.orange,
    backgroundColor: colors.ivory,
    padding: '2vh',
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
    display:'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(60vh, 1fr))',
    width: '90%',
    alignItems: 'center',
    paddingTop: '22.5vh'
  };
  return (
    <div id='root' className="App" style={{backgroundColor:colors.ivory}}>
      <Header page="home"/>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div id='content' style={divStyles}>
          <img src={HomeScreen} style={{width:'95%',minWidth:'150px', margin: 'min(2vh,2vw)', borderRadius: '30px'}} alt="Farm image."/>
          <div id='textbox' style={textboxStyles}>
            <h1 style={headerStyles}>{allText.home.header}</h1>
            <p style={paragraphStyles}>{allText.home['body-1']}</p>
            <p style={paragraphStyles}>{allText.home['body-2']}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;