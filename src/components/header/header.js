import LogoIcon from "../../common/icons/logo.icon";
import './header.scss'

function Header(){
    return (
        <div id="header">
            <LogoIcon></LogoIcon>
            <div id="message">Transportation System</div>            
        </div>
        
    )
}

export default Header

