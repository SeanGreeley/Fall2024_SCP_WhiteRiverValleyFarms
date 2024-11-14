import {Link} from 'react-router-dom'
import colors from '../colors.json'

function NavBar() {
    const styles = {
        color: colors.ivory,
        backgroundColor: colors.darkGreen,
        padding: '0.5em',
        fontFamily: 'Itim',
        fontSize: '3vh'
    };
    return (
        <nav style={styles}>
            <Link to='/' style={styles}>Home</Link>  
            <Link to='/product' style={styles}>Our Product</Link>
            <Link to='/CSA' style={styles}>What is a CSA</Link>
            <Link to='/join' style={styles}>Join Us</Link>
        </nav>
    );
}

export default NavBar;