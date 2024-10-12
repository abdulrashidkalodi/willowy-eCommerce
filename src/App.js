import { BrowserRouter,Routes, Route } from 'react-router-dom';import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/HomePage/Home';
import ProductPage from './pages/ProductsPage/ProductPage';
import Nopage from './pages/NoPage/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>{" "}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
