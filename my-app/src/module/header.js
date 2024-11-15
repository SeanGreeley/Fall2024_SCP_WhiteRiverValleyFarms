import allText from '../textElements.json';
import colors from '../colors.json'
import NavBar from './navbar';

function Header() {
    const barStyles = {
        position: 'fixed',
        top: '0',
        width: '100%',
        height: '15vh'
    }
    const textStyles = {
        color: colors.charcoal,
        backgroundColor: colors.lightGreen,
        padding: '1em',
        fontFamily: 'Jacques Francois Shadow'
    };
    return (
        <div style = {barStyles}>
            <h1 style={textStyles}>{allText.header}</h1>
            <NavBar/>
        </div>
    );
}

export default Header;