import allText from '../textElements.json';
import Header from './header';
import Footer from './footer';

function JoinUs() {
    return (
        <div id='root' className="App">
        <Header/>
        <div>
          <h2>{allText['join-us'].header}</h2>
          <p>{allText['join-us'].opening}</p>
          <p>{allText['join-us']['body-1']}</p>
          <p>{allText['join-us']['body-2']}</p>
          <p>{allText['join-us']['body-3']}</p>
          <p>{allText['join-us']['body-4']}</p>
          <p>{allText['join-us'].disclaimer}</p>
          <h2>{allText['join-us']['form-header']}</h2>
          <p>
            Our Contact Information:
          </p>
          <p>{allText['join-us']['contact-email']}</p>
          <p>{allText['join-us']['phone-number']}</p>
          <p>{allText['join-us'].location}</p>
          <p>{allText['join-us']['form-opening']}</p>
        </div>
        <div>
            <input type="email" id="email" name="email" placeholder='Email' required/><br></br>
            <input type="text" id="fname" name="fname" placeholder='First Name' required /><br></br>
            <input type="text" id="lname" name="lname" placeholder='Last Name' required/><br></br>
            <input type="tel" id="number" name="number" placeholder='Phone Number' required/><br></br>
            <input type="text" id="msg" name="msg" placeholder='Message for Michael' /><br></br>
            <input type="submit" value="Submit" />
            <input type="submit" value="Unsubscribe from Email List" />
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default JoinUs;