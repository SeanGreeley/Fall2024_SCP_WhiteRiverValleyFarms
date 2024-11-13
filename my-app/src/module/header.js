import allText from '../textElements.json';
import colors from '../colors.json'
import NavBar from './navbar';

function Header() {
    const styles = {
        color: colors.darkGreen,
        backgroundColor: colors.lightGreen,
        padding: '1em'
    };
    return (
        <div>
            <h1 style={styles}>{allText.header}</h1>
            <NavBar/>
        </div>
    );
}

export default Header;