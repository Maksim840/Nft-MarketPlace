import './nft-token.scss'

export default function Nft_Token({img, name, price}) {
    
    return(
        <div className="nft_container">
            <img className="nft_img" src={img}/>
            <div className="nft_info_container">
                <p className='name'>{name}</p>
                <p className='price'>{price + "ETH"}</p>
            </div>
        </div>
    )
}
