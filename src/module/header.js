import allText from '../textElements.json';
import colors from '../colors.json'
import NavBar from './navbar';

function Header(props) {
    const barStyles = {
        position: 'fixed',
        top: '0',
        width: '100%',
        height: '13vh'
    }
    const textStyles = {
        color: colors.charcoal,
        backgroundColor: colors.lightGreen,
        padding: '4vh',
        fontFamily: 'Jacques Francois Shadow',
        fontSize: 'min(5vh,5vw)'
    };
    return (
        <div style = {barStyles}>
            <h1 style={textStyles}>{allText.header}</h1>
            {props.page === "home" && <NavBar page="home"/>}
            {props.page === "product" && <NavBar page="product"/>}
            {props.page === "csa" && <NavBar page="csa"/>}
            {props.page === "join" && <NavBar page="join"/>}
        </div>
    );
}

export default Header;