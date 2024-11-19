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
  const headerStyles = {
    color: colors.orange,
    backgroundColor: colors.ivory,
    marginLeft: '5%',
    padding: '2vh',
    fontSize: '6vh',
    fontFamily: 'Elsie Swash Caps'
  };
  const paragraphStyles = {
    color: colors.charcoal,
    textAlign: 'left',
    fontSize: '24px',
    backgroundColor: colors.ivory,
    marginLeft: '5%',
    padding: '2vh',
    width: '90%',
    minWidth: '300px',
    fontFamily: 'Itim'
  };
  const infoStyles = {
    color: colors.orange,
    marginLeft: '10%',
    textAlign: 'left',
    fontSize: '24px',
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
    minWidth: '200px',
    borderRadius: "10px", /* Add rounded corners */
    boxShadow: "5px 7px 3px rgba(0, 0, 0, 0.2)", 
    padding: "10px",
    gridColumn: "2",
    flexGrow: "2",
    gap: "20px",
    fontFamily: 'Itim'
  };
  const mobileForm = {
    marginTop: "1%",
    backgroundColor: colors.ivory,
    border: `3px solid ${colors.orange}`,
    width: "80%",
    marginLeft:'7%',
    borderRadius: "10px", /* Add rounded corners */
    boxShadow: "5px 7px 3px rgba(0, 0, 0, 0.2)", 
    padding: "20px",
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
    paddingTop: '25vh'
  };
  const inputLabel = {
    paddingBottom: "1%",
    gridColumn: "1",
    //display: "inline-block",
    width: "20%",
    textAlign: "left",
    whiteSpace: 'nowrap'
  };
  const inputStyle = {
    borderRadius: "5px", 
    marginBottom: "15px",
    gridColumn: "2",
    padding: "10px",
    width: '90%',
    textAlign: "left"    
  };
  const inputMessageStyle = {
    borderRadius: "5px", 
    paddingBottom: "25%",
    width: "90%",
    gridColumn: "2",
    padding: "10px",
    textAlign: "left"  
  };
  const buttonStyle = {
    boxShadow: "3px 4px 4px rgba(0, 0, 0, 0.2)", 
    margin: '20px',
    fontSize: '3vh',
    color: colors.darkGreen,
    width: '70%',
    padding: "5px",  
    backgroundColor: colors.lightGreen
  };
  const spacer = {
    margin: "20px",
    marginBottom: "0px"
  };
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
            <div style = {spacer}>
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
              <input style = {buttonStyle} type="submit" value="Submit" />
              {/*
              <input style = {buttonStyle} type="submit" value="Unsubscribe from Email List" />
              */}
            </div>
          </div>}
        </div>
        {winWidth <= winHeight*1.5 && <div style = {mobileForm}>
            <div style = {spacer}>
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
              <input style = {buttonStyle} type="submit" value="Submit" />
              {/*
              <input style = {buttonStyle} type="submit" value="Unsubscribe from Email List" />
              */}
            </div>
          </div>}
        <Footer/>
      </div>
    );
  }
  
  export default JoinUs;