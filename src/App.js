
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product-catalog' element={<ProductCatalog/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
