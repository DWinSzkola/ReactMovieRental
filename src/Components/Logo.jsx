import "../Styles/Logo.css"
const Logo = (props) =>{
    const size = props.size;
    const fontSize =  size ? size : 30
    return<div className='logo'  style={{fontSize: fontSize+"px"}}>
        <span>Movie<span className='Rental'>Rental</span>.com</span>
        </div>
}
export default Logo;