import allText from '../textElements.json';
import Header from './header';
import Footer from './footer';
import colors from '../colors.json';


function WhatIsACSA() {
  const paragraphStyles = {
    color: colors.charcoal,
    textAlign: 'left',
    fontSize: '4vh',
    backgroundColor: colors.ivory,
    padding: '1em',
    width: '50vw',
    minWidth: '300px',
    fontFamily: 'Itim'
  };
  const headerStyles = {
    color: colors.orange,
    backgroundColor: colors.ivory,
    padding: '2vh',
    fontFamily: 'Elsie Swash Caps',
    fontSize: '6vh'
  };
  const textboxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ivory,
  };
    return (
        <div id='root' className="App" style={{backgroundColor: colors.ivory}}>
        <Header/>
        <div style={{paddingTop: '25vh',backgroundColor: colors.ivory}}>
        <h1 style={headerStyles}>{allText['csa-info'].header}</h1>
          <div style={textboxStyles}>
          <p style={paragraphStyles}>{allText['csa-info']['body-1']}</p>
          <p style={paragraphStyles}>{allText['csa-info']['body-2']}</p>
          <p style={paragraphStyles}>{allText['csa-info']['body-3']}</p>
          <p style={paragraphStyles}>{allText['csa-info']['body-4']}</p>
          <p style={paragraphStyles}>{allText['csa-info']['body-5']}</p>
          </div>
          <Footer/>
          </div>
        </div>
    );
  }
  
  export default WhatIsACSA;