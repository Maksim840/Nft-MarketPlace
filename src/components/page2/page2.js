import Discover from "../discover-el/discover";
import Catalog from "../main-catalog/main-catalog";
import './page2.scss'
import Cards from "../main-cards/main-nft-cards";

function Page2() {
    return(
        <div className="container_page2">
            <Discover/>
            <Catalog></Catalog>
        </div>
    )
}
export default Page2;