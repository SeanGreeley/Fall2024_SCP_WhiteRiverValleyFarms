import allText from '../textElements.json';
import Header from './header';
import Footer from './footer';
import colors from '../colors.json';

function JoinUs() {
  const headerStyles = {
    color: colors.orange,
    backgroundColor: colors.ivory,
    padding: '1em',
    fontSize: '6vh',
    fontFamily: 'Elsie Swash Caps'
  };
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
  const infoStyles = {
    color: colors.orange,
    paddingLeft: "30px",
    textAlign: 'left',
    fontSize: '24px',
    width: '50vw',
    backgroundColor: colors.ivory,
    fontFamily: 'Itim'
  };
  const form = {
    backgroundColor: colors.ivory,
    position:"fixed",
    border: `3px solid ${colors.orange}`,
    right:"0",
    width: "20%",
    borderRadius: "10px", /* Add rounded corners */
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", 
    padding: "20px",
    gridColumn: "2",
    flexGrow: "2",
    gridTemplateColumns: "1fr auto",
    gap: "20px"
  };
  const textStyle = {
    gridColumn: "1",
    width: "70%",
    textAlign: "left",
    padding: "50px",
  };
  const container = {
    backgroundColor: colors.ivory,
    fontFamily: 'Itim',
    display: "grid",
    gridTemplateColumns: "1fr auto", /* Adjust the ratio as needed */
    gap: "20px"
  };
  const inputLabel = {
    gridColumn: "1",
    padding: "10px",
    display: "inline-block",
    width: "100px",
    textAlign: "right"
  };
  const inputStyle = {
    gridColumn: "2",
    padding: "10px",
  };
    return (
        <div id='root' className="App">
        <Header/>
        <div style = {container}>
          <div style = {textStyle}>
            <h2 style = {headerStyles}>{allText['join-us'].header}</h2>
            <p style = {paragraphStyles}>{allText['join-us'].opening}</p>
            <p style = {paragraphStyles}>{allText['join-us']['body-1']}</p>
            <p style = {paragraphStyles}>{allText['join-us']['body-2']}</p>
            <p style = {paragraphStyles}>{allText['join-us']['body-3']}</p>
            <p style = {paragraphStyles}>{allText['join-us']['body-4']}</p>
            <p style = {paragraphStyles}>{allText['join-us'].disclaimer}</p>
            <h2 style = {headerStyles}>{allText['join-us']['form-header']}</h2>
            <p style = {paragraphStyles}>
              Our Contact Information:
            </p>
            <p style = {infoStyles}>{allText['join-us']['contact-email']}</p>
            <p style = {infoStyles}>{allText['join-us']['phone-number']}</p>
            <p style = {infoStyles}>{allText['join-us'].location}</p>
            <p style = {paragraphStyles}>{allText['join-us']['form-opening']}</p>
          </div>
          <div style = {form}>
            <p style = {inputLabel}>Email: </p>
            <p style = {inputLabel}>First Name: </p>
              <input style = {inputStyle} type="email" id="email" name="email" placeholder='Email' required/><br></br>
              <input style = {inputStyle} type="text" id="fname" name="fname" placeholder='First Name' required /><br></br>
              <input style = {inputStyle} type="text" id="lname" name="lname" placeholder='Last Name' required/><br></br>
              <input style = {inputStyle} type="tel" id="number" name="number" placeholder='Phone Number' required/><br></br>
              <input style = {inputStyle} type="text" id="msg" name="msg" placeholder='Message for Michael' /><br></br>
              <input style = {inputStyle} type="submit" value="Submit" />
              <input style = {inputStyle} type="submit" value="Unsubscribe from Email List" />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default JoinUs;