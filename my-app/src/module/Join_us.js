import { Link } from 'react-router-dom';

function JoinUs() {
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
          <h2>Let's Grow Together</h2>
          <p>
            Want to join White River Valley Farms? Everything you need to know is right here.
          </p>
          <p>
            We, the farm, wish to provide you with fresh, local, seasonal food and you, the member, wish to receive a portion of our harvest. White River Valley Farms runs from MONTH to MONTH. Once members have been introduced to the farm location, they are responsible for picking up their share of produce every two weeks during the growing season. Members generally receive 2 pounds of produce in each share, depending on the progression of the growing season. For the sake of privacy, details about pickup will be discussed after we’ve established contact.
          </p>
          <p>
            The produce we offer throughout the season can be viewed on the Our Produce page. Please note that the availability of produce can fluctuate depending on the season. While we are not USDA certified, White River Valley Farms uses cold-storage and washing stations to ensure all produce is fresh and safe for consumption.
          </p>
          <p>
            By joining our CSA, you agree to share in the risk of crop failure and crop surplus. In the event that a small portion of crops fail, we will reimburse you with other produce. Larger issues during the growing season may make reimbursement impossible. Nevertheless, we promise to do our best to provide you with produce on a consistent basis. In times of abundance, your share of produce will be larger. Any produce you do not need will be donated to a local food pantry.
          </p>
          <p>
            Membership fees are to be discussed once we have established contact. There is NO COST to sign up and receive a tour of our property. Membership fees fund the majority of operations at White River Valley Farms, such as purchasing seeds and maintaining equipment.

            If you are interested in receiving more information about White River Valley Farms and potentially becoming a member, please fill out the following form. We will get back to you as soon as possible.

            NOTE: Submitting this form DOES NOT obligate you to become a member, it is solely for communication purposes. Any information you provide us with will not be shared with other parties.
          </p>
          <h2>Help Us Communicate Further</h2>
          <p>
            Our Contact Information:
          </p>
          <p>
            EMAIL
          </p>
          <p>
            PHONE NUMBER
          </p>
          <p>
            Mountain Home. MO
          </p>
           <p>
            Once we get into contact with you, we’ll be more than happy to provide you with our address so we can give you a tour of our property.
          </p>
        </div>
        <div>
            <input type="text" id="fname" name="fname" placeholder='First Name' required /><br></br>
            <input type="text" id="lname" name="lname" placeholder='Last Name' required/><br></br>
            <input type="email" id="email" name="email" placeholder='Email' required/><br></br>
            <input type="tel" id="number" name="number" placeholder='Phone Number' required/><br></br>
            <input type="text" id="msg" name="msg" placeholder='Message for Michael' /><br></br>
            <input type="submit" value="Submit" />
            <input type="submit" value="Unsubscribe from Email List" />
        </div>
      </div>
    );
  }
  
  export default JoinUs;