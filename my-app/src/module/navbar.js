import {Link} from 'react-router-dom'

function NavBar() {
    const colors = {
        'lightGreen': '#B0D990',
        'darkGreen': '#646F58',
        'ivory': '#F5F9E9',
        'charcoal': '#18070B',
        'orange': '#D7621A'
    }
    const styles = {
        color: colors.ivory,
        backgroundColor: colors.darkGreen,
        padding: '0.5em'
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