import allText from '../textElements.json';
import Header from './header';
import Footer from './footer';
import colors from '../colors.json';
import React from 'react';
import {useLayoutEffect, useState} from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


function JoinUs() {
  const [winWidth, winHeight] = useWindowSize();
  const [submitted, setSubmit] = useState(false);
  function handleSubmit() {
    setSubmit(true)
  }
  const headerStyles = {
    color: colors.orange,
    backgroundColor: colors.ivory,
    padding: '2vh',
    fontSize: '6vh',
    fontFamily: 'Elsie Swash Caps'
  };
  const paragraphStyles = {
    color: colors.charcoal,
    textAlign: 'left',
    fontSize: '3.5vh',
    backgroundColor: colors.ivory,
    padding: '2vh',
    width: '90%',
    minWidth: '250px',
    fontFamily: 'Itim'
  };
  const infoStyles = {
    color: colors.orange,
    marginLeft: '10%',
    textAlign: 'left',
    fontSize: '3.5vh',
    backgroundColor: colors.ivory,
    fontFamily: 'Itim'
  };
  const form = {
    marginRight: "5%",
    marginTop: '5vh',
    backgroundColor: colors.ivory,
    position:"fixed",
    border: `3px solid ${colors.orange}`,
    right:"0",
    width: "25%",
    borderRadius: "10px", /* Add rounded corners */
    boxShadow: "5px 7px 3px rgba(0, 0, 0, 0.2)", 
    padding: "2vh",
    gridColumn: "2",
    flexGrow: "2",
    gap: "3vh",
    fontFamily: 'Itim'
  };
  const mobileForm = {
    backgroundColor: colors.ivory,
    border: `3px solid ${colors.orange}`,
    width: "80%",
    marginLeft:'6%',
    borderRadius: "10px", /* Add rounded corners */
    boxShadow: "5px 7px 3px rgba(0, 0, 0, 0.2)", 
    padding: "3vh 2vh",
    gap: "20px",
    fontFamily: 'Itim'
  };
  const textStyle = {
    gridColumn: "1",
    textAlign: "left",
    padding: "2vh",
  };
  const container = {
    backgroundColor: colors.ivory,
    fontFamily: 'Itim',
    display: "grid",
    gridTemplateColumns: "66% auto", /* Adjust the ratio as needed */
    gap: "20px",
    paddingTop: '20vh'
  };
  const containerMobile = {
    backgroundColor: colors.ivory,
    fontFamily: 'Itim',
    display: "grid",
    gridTemplateColumns: "100%", /* Adjust the ratio as needed */
    gap: "20px",
    paddingTop: '20vh'
  };
  const inputLabel = {
    paddingBottom: "1%",
    gridColumn: "1",
    width: "20%",
    fontFamily: 'Itim',
    fontSize: '2.5vh',
    textAlign: "left",
    whiteSpace: 'nowrap'
  };
  const inputStyle = {
    borderRadius: "5px", 
    marginBottom: "2vh",
    gridColumn: "2",
    fontSize: '2.5vh',
    fontFamily: 'Itim',
    color: colors.charcoal,
    padding: "0.5vh",
    width: '90%',
    textAlign: "left"    
  };
  const inputMessageStyle = {
    borderRadius: "5px", 
    paddingBottom: "15%",
    width: "90%",
    gridColumn: "2",
    fontSize: '2.5vh',
    fontFamily: 'Itim',
    padding: "0.5em",
    textAlign: "left"  
  };
  const buttonStyle = {
    boxShadow: "3px 4px 4px rgba(0, 0, 0, 0.2)", 
    margin: '2vh',
    fontSize: '3vh',
    color: colors.darkGreen,
    fontFamily: 'Itim',
    width: '70%',
    padding: "5px",  
    backgroundColor: colors.lightGreen
  };
  const spacer = {
    margin: "0.5vh",
    marginBottom: "0px"
  };
  const submittedHeader = {
    backgroundColor: colors.orange,
    color: colors.ivory,
    fontFamily: 'Elsie Swash Caps',
    fontSize: '6vh',
    padding: '3vh'
  }
  const submittedText = {
    backgroundColor: colors.orange,
    color: colors.ivory,
    fontFamily: 'Itim',
    fontSize: '4vh',
    padding: '2vh'
  }
    return (
        <div id='root' className="App" style={{backgroundColor:colors.ivory}}>
        <Header/>
        <div style = {winWidth > winHeight*1.5 ? container : containerMobile}>
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
          {winWidth > winHeight*1.5 && <div style = {form}>
            {submitted === false && <div style = {spacer}>
              <p style = {inputLabel}>Email: </p>
              <input style = {inputStyle} type="email" id="email" name="email" placeholder='Email' required/><br></br>
              <p style = {inputLabel}>First Name: </p>
              <input style = {inputStyle} type="text" id="fname" name="fname" placeholder='First Name' required /><br></br>
              <p style = {inputLabel}>Last Name: </p>
              <input style = {inputStyle} type="text" id="lname" name="lname" placeholder='Last Name' required/><br></br>
              <p style = {inputLabel}>Phone Number: </p>
              <input style = {inputStyle} type="tel" id="number" name="number" placeholder='Phone Number' required/><br></br>
              <p style = {inputLabel}>Any questions? </p>
              <input style = {inputMessageStyle} type="text" id="msg" name="msg" placeholder='Message for Michael' /><br></br>
              <button style = {buttonStyle} type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
              {/*
              <input style = {buttonStyle} type="submit" value="Unsubscribe from Email List" />
              */}
            </div>}
            {submitted && <div>
              <p style={submittedHeader}>Thank you for reaching out!</p>
              <p style={submittedText}>We'll get back to you shortly.</p>
              </div>}
          </div>}
        </div>
        {winWidth <= winHeight*1.5 && <div style = {mobileForm}>
            {submitted === false && <div style = {spacer}>
              <p style = {inputLabel}>Email: </p>
              <input style = {inputStyle} type="email" id="email" name="email" placeholder='Email' required/><br></br>
              <p style = {inputLabel}>First Name: </p>
              <input style = {inputStyle} type="text" id="fname" name="fname" placeholder='First Name' required /><br></br>
              <p style = {inputLabel}>Last Name: </p>
              <input style = {inputStyle} type="text" id="lname" name="lname" placeholder='Last Name' required/><br></br>
              <p style = {inputLabel}>Phone Number: </p>
              <input style = {inputStyle} type="tel" id="number" name="number" placeholder='Phone Number' required/><br></br>
              <p style = {inputLabel}>Any questions? </p>
              <input style = {inputMessageStyle} type="text" id="msg" name="msg" placeholder='Message for Michael' /><br></br>
              <button style = {buttonStyle} type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
              {/*
              <input style = {buttonStyle} type="submit" value="Unsubscribe from Email List" />
              */}
            </div>}
            {submitted && <div>
              <p style={submittedHeader}>Thank you for reaching out!</p>
              <p style={submittedText}>We'll get back to you shortly.</p>
              </div>}
          </div>}
        <Footer/>
      </div>
    );
  }
  
  export default JoinUs;