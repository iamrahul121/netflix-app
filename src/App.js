import './App.scss';
import './responsive.scss';
import Banner from './components/Banner';
import Header from './components/Header';
import Lists from './components/Lists';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element ={<Header/>} />
    <Route path='/login' element ={<Login/>} />
    <Route path='/register' element ={<Login/>} />
    <Route path='/dashboard' element ={<> 
    <Banner/>
     <Lists title = "Populars" param="popular"/> 
     <Lists title = "Top Rated" param="top_rated"/> 
     <Lists title = "Trending Now" param="trending" /> 
     <Lists title = "Netflix Originals" param="originals"/> 
     <Lists title = "Upcoming" param="upcoming"/> 
    </>} />s
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
