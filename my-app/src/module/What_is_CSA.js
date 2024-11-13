import allText from '../textElements.json';
import Header from './header';
import Footer from './footer';
import colors from '../colors.json';

function WhatIsACSA() {
  const paragraphStyles = {
    color: colors.charcoal,
    textAlign: 'left',
    fontSize: '24px',
    backgroundColor: colors.ivory,
    padding: '1em',
    width: '50%',
  };
  const headerStyles = {
    color: colors.orange,
    backgroundColor: colors.ivory,
    padding: '1em'
  };
  const textboxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ivory,
  };
    return (
        <div id='root' className="App" styles={{backgroundColor: colors.ivory}}>
        <Header/>
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
    );
  }
  
  export default WhatIsACSA;