import allText from '../textElements.json';
import Header from './header';
import Footer from './footer';

function WhatIsACSA() {
    return (
        <div id='root' className="App">
        <Header/>
        <h1>{allText['csa-info'].header}</h1>
          <p>{allText['csa-info']['body-1']}</p>
          <p>{allText['csa-info']['body-2']}</p>
          <p>{allText['csa-info']['body-3']}</p>
          <p>{allText['csa-info']['body-4']}</p>
          <p>{allText['csa-info']['body-5']}</p>
          <Footer/>
        </div>
    );
  }
  
  export default WhatIsACSA;