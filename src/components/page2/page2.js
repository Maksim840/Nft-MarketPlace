import Discover from "../discover-el/discover";
import './page2.scss'
import Cards from "../main-cards/main-nft-cards";

function Page2({data}) {

    const el = data.map(item => {
        return (
            <Cards {...item}/>
        )})

    return(
        <div className="container_page2">
            <Discover/>
             <div className="nft_cards_container">{el}</div>
        </div>
    )
}
export default Page2;