import Footer from '../components/footer/footer';
import './App.scss'
import Header from '../components/app-header/app-navigation/navigation-header';
import App1 from '../components/app-main-page/app';
import { Routes, Route} from 'react-router-dom';
import Page2 from '../components/page2/page2';

function App() {
    
    return(
        <div>
            <Header/>
            <Routes>
                <Route index element={<App1/>}/>
                <Route path='/posts' element={<Page2 data={data}/>}/>
            </Routes>
            <Footer/>
        </div>
       
    )
}
export default App;