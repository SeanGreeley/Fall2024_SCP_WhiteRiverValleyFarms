import allText from '../textElements.json';
import colors from '../colors.json'

function Footer() {
    const styles = {
        color: colors.ivory,
        backgroundColor: colors.darkGreen,
        padding: '1em',
        fontFamily: 'Itim'
    };
    return (
        <div>
            <p style={styles}>{allText.footer}</p>
        </div>
    );
}

export default Footer;