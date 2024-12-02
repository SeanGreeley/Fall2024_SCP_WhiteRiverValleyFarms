import {Link} from 'react-router-dom'
import colors from '../colors.json'

function NavBar(props) {
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
    const linkStylesSelected = {
        color: colors.lightGreen,
        //backgroundColor: colors.darkGreen,
        fontFamily: 'Itim',
        fontSize: 'min(3vh,4vw)',
        padding: '0vh 2vw'
    }
    return (
        <nav style={barStyles}>
            <Link to='/' style={props.page === "home" ? linkStylesSelected : linkStyles}>Home</Link>  
            <Link to='/product' style={props.page === "product" ? linkStylesSelected : linkStyles}>Our Product</Link>
            <Link to='/CSA' style={props.page === "csa" ? linkStylesSelected : linkStyles}>What is a CSA</Link>
            <Link to='/join' style={props.page === "join" ? linkStylesSelected : linkStyles}>Join Us</Link>
        </nav>
    );
}

export default NavBar;