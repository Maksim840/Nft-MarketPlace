import "./main-nft-cards.scss";

const Cards = ({img, name, price}) => {
  return (
    <div className="cards_cont">
      <img className="nft_img" src={img}/>
      <p className='name'>{name}</p>
      <p className='price'>{price}</p>
      <button className="card_button">See details</button>
    </div>
  );
};
export default Cards;
