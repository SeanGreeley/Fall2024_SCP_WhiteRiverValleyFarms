import { Link } from 'react-router-dom';
import allText from '../textElements.json';

function WhatIsACSA() {
    return (
        <div id='root' className="App">
        <h1>{allText.home.title}</h1>
        <nav>
            <Link to='/'>Home</Link>  
            <Link to='/product'>Our Product</Link>
            <Link to='/CSA'>What is a CSA</Link>
            <Link to='/join'>Join Us</Link>
        </nav>
        <h1>{allText['csa-info'].header}</h1>
          <p>{allText['csa-info']['body-1']}</p>
          <p>{allText['csa-info']['body-2']}</p>
          <p>{allText['csa-info']['body-3']}</p>
          <p>{allText['csa-info']['body-4']}</p>
          <p>{allText['csa-info']['body-5']}</p>
        </div>
    );
  }
  
  export default WhatIsACSA;