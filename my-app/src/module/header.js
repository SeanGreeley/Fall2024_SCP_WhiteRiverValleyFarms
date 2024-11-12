import allText from '../textElements.json';
import NavBar from './navbar';

function Header() {
    const colors = {
        'lightGreen': '#B0D990',
        'darkGreen': '#646F58',
        'ivory': '#F5F9E9',
        'charcoal': '#18070B',
        'orange': '#D7621A'
    }
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