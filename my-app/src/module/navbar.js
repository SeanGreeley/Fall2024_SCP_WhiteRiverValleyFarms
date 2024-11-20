import {Link} from 'react-router-dom'
import colors from '../colors.json'

function NavBar() {
    const barStyles = {
        width: '100%',
        height: '6vh',
        backgroundColor: colors.darkGreen,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    const linkStyles = {
        color: colors.ivory,
        //backgroundColor: colors.darkGreen,
        fontFamily: 'Itim',
        fontSize: 'min(3vh,4vw)',
        padding: '0vh 2vw'
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