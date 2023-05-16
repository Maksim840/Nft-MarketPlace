import './navigation-slider.scss'
import Nft_Token from '../nft-token/nft-token'
const  Navigation_Slider = ({data}) => {
    const elements = data.map(item => {
        return (
            <Nft_Token {...item}/>
        )
    })

    return(
    <div className='container_slider'>
        <div class="nav_slider">
            <p class="nav_slider_info">Hot bids</p>
            <div class="view_all_button">
                <a href="#" class="view_all">View all</a>
            </div>
        </div> 

        <div className='container_cards'>
            {elements}
        </div>
    </div>
    )
}
export default Navigation_Slider
