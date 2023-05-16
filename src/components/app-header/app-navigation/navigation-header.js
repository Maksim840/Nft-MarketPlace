import './navigation-header.scss'
import {Link} from 'react-router-dom'
export default function Navigation_header() {
    return(
        <div className="header_line">
            <div className="header_icon">
                <img src="/images/icon.png" alt="icon" className="icon_img"/>
            </div>

            <div className="header_nav">
                <Link to="/" className="nav">Home</Link>
                <Link to="/posts" className="nav">NFT's</Link>
                <a href="#" className="nav">Collection</a>
                <a href="#" className="nav">Community</a>
            </div>

            <div className="header_auth">
                <img src="/images/Union.png" alt="" className="img_auth"/>
                <img src="/images/Union (1).png" alt="" className="img_auth"/>
                <img src="/images/ewr.png" alt="" className="img_auth img_auth3"/>
            </div>
        </div>
    )
}
