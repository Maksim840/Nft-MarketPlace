import './app.scss';
import Navigation_header from '../app-header/app-navigation/navigation-header';
import Main_info from '../app-header/app-main-info/main-info';
import Navigation_Slider from '../app-slider/navigation-slider/navigation-slider';
import Discover from '../discover-el/discover';
import Catalog from '../main-catalog/main-catalog';
import Footer from '../footer/footer';


//import React, { useState, useEffect } from 'react';

function App1() {
  return (
    <div>
      <header className="container">
            <Main_info />
            <Navigation_Slider data = {data} />
            <Discover />
            <Catalog data = {data}/>
        
      </header>
    </div>
  );
}

export default App1;