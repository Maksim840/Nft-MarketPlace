import "./main-catalog.scss";
import Cards from '../main-cards/main-nft-cards'
const Catalog = () => {
  return (
    <div className="container_catalog">
        <div className="button_container">
            <button className="but">All</button>
            <button className="but">Music</button>
            <button className="but">NFT,s</button>
            <button className="but">Art</button>
            <button className="but">Photography</button>
            <button className="but">Trading Card </button>
            <button className="but">Virtual World</button>
        </div>
        <div className="nft_cards_container">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    </div>
  );
};
export default Catalog;
