import allText from '../textElements.json';
import colors from '../colors.json';
import Logo from '../Images/Logo_Edit_2.png';

function Footer() {
    const styles = {
        color: colors.ivory,
        padding: '2vh',
        fontFamily: 'Itim',
        fontSize: '3vh',
    };
    const imgStyles ={
      width: 'min(40vw,50vh)',  
      objectFit: 'cover'
    };
    return (
        <div style={{backgroundColor: colors.darkGreen,marginTop: '5vh'}}>
            <img src={Logo} style={imgStyles} alt={"This is the logo for the White River Valley Farms organization."} title={"Logo"}/>
            <p style={styles}>{allText.footer}</p>
        </div>
    );
}

export default Footer;