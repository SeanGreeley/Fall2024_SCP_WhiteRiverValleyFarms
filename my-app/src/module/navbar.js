import {Link} from 'react-router-dom'
import colors from '../colors.json'

function NavBar() {
    const barStyles = {
        width: '100%',
        padding: '0.5em',
        backgroundColor: colors.darkGreen
    };
    const linkStyles = {
        color: colors.ivory,
        backgroundColor: colors.darkGreen,
        fontFamily: 'Itim',
        fontSize: '3vh',
        padding: '0.25em 1em'
    }
    return (
        <nav style={barStyles}>
            <Link to='/' style={linkStyles}>Home</Link>  
            <Link to='/product' style={linkStyles}>Our Product</Link>
            <Link to='/CSA' style={linkStyles}>What is a CSA</Link>
            <Link to='/join' style={linkStyles}>Join Us</Link>
        </nav>
    );
}

export default NavBar;