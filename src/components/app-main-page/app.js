import './app.scss';
import Navigation_header from '../app-header/app-navigation/navigation-header';
import Main_info from '../app-header/app-main-info/main-info';
import Navigation_Slider from '../app-slider/navigation-slider/navigation-slider';
import Discover from '../discover-el/discover';
import Catalog from '../main-catalog/main-catalog';
import Footer from '../footer/footer';
//import React, { useState, useEffect } from 'react';

function App1() {
    const data = [
        {img:"/images/Nft1.png", name: "Lucky_watcher", price: "32"},
        {img:"/images/Nft2.png", name: "#46 HORRER", price: "15"},
        {img:"/images/Nft3.png", name: "Hooligan", price: "72"},
        {img:"/images/Nft4.png", name: "Nano Portrait 32", price: "322"},
        // {img:"/images/Nft5.png", name: "Aarmj", price: "4.2"},
        // {img:"/images/Nft6.png", name: "Opaner", price: "1.9"},
        // {img:"/images/Nft7.png", name: "Fergi", price: "6"},
        // {img:"/images/Nft8.png", name: "ohhoooT322", price: "10"},
    ]
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/api')
//       .then(response => response.json())
//       .then(data => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch(error => console.error(error));
//   }, []);

//   const apiUrl = process.env.REACT_APP_API_URL || '';

//   fetch(`${apiUrl}/api`)
//     .then(response => response.json())
//     .then(data => {
//       // Обработка полученных данных
//       console.log(data);
//     })
//     .catch(error => console.error(error));

  return (
    <div>
      <header className="container">
        
        
            <Main_info />
            <Navigation_Slider data={data} />
            <Discover />
            <Catalog data={data} />
        
      </header>
    </div>
  );
}

export default App1;