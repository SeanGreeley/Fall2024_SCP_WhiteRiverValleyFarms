import allText from '../textElements.json';
import colors from '../colors.json';
import Logo from '../Images/Logo_Edit_2.png';

function Footer() {
    const styles = {
        color: colors.ivory,
        backgroundColor: colors.darkGreen,
        padding: '1em',
        fontFamily: 'Itim',
        fontSize: '3vh',
        marginTop: '5vh'
    };
    const imgStyles ={
      width: '400px', 
      height: '200px', 
      objectFit: 'cover', 
      padding: '10px',
    };
    return (
        <div>
            <p style={styles}>{allText.footer}
                <img src={Logo} style={imgStyles} alt={"This is the logo for the White River Valley Farms organization."} title={"Logo"}/>
            </p>
        </div>
    );
}

export default Footer;