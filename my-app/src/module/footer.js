import allText from '../textElements.json';

function Footer() {
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
        padding: '1em'
    };
    return (
        <div>
            <p style={styles}>{allText.footer}</p>
        </div>
    );
}

export default Footer;