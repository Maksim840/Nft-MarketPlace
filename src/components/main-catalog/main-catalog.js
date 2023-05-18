import "./main-catalog.scss";
import Cards from '../main-cards/main-nft-cards'
const Catalog = ({data}) => {
  const el = data.map(item => {
    return (
        <Cards {...item}/>
    )})
  return (

    <div className="container_catalog">
        <div className="button_container">
            <button className="but">All</button>
            <button className="but">Virtual World</button>
        </div>
        <div className="nft_cards_container">
            {el}
        </div>
    </div>
  );
};
export default Catalog;
