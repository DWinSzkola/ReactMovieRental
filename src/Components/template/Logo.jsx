import "../../Styles/Logo.css";
const Logo = ({ size }) => {
    const fontSize = size ? size : 30;
    return (
        <div className="logo text-center" style={{ fontSize: fontSize + "px" }}>
            <span>
                Movie<span className="Rental">Rental</span>.com
            </span>
        </div>
    );
};
export default Logo;
