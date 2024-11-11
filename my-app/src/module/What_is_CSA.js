import { Link } from 'react-router-dom';

function WhatIsACSA() {
    return (
        <div id='root' className="App">
        <h1>White River Valley Farms</h1>
        <nav>
            <Link to='/'>Home</Link>  
            <Link to='/product'>Our Product</Link>
            <Link to='/CSA'>What is a CSA</Link>
            <Link to='/join'>Join Us</Link>
        </nav>
        <div>
          <ul>
            <li>
              <p>CSA Descripion</p>
            </li>
            <li>
              <p>Membership</p>
            </li>
            <li>
              <p>Local CSA's</p>
            </li>
          </ul>
        </div>
        <div>
          <h1>CSA Description</h1>
          <p>
          Community Supported Agriculture (CSA) is a community-focused group of people who wish to provide and/or enjoy fresh, local, seasonal food.

Typically, CSA membership benefits the entire community through the proportionate sharing of crop yield. Crop sharing allows farmers to have stability during times of scarcity and members to receive more crops during times of abundance. 
          </p>
          <h2>Membership:</h2>
          <p>
          Members are required to pick up their portion of the harvest at a designated time and place. Unclaimed shares usually get donated to a charity or food pantry. In the event a Member can’t make it, they may let someone else pick up their share for them if necessary.
          </p>
          <h3>Local CSA's</h3>
          <p>
            For example, in the Ozarks, there is a flourishing CSA community. Between the bustling farmers markets in Springfield to the humble folks at Millsap Farms, there are plenty of ways for local residents to get their hands on fresh, organic produce. 


Here at White River Valley Farms, we want to contribute toward a future where Ozarks residents have access to fresh produce grown by  good neighbors. With well-maintained cold storage and washing stations, all of our produce is handled with the love and care you’d expect from the Ozarks.
          </p>
        </div>
      </div>
    );
  }
  
  export default WhatIsACSA;