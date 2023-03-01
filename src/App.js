
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';

function App() {
  return (
    <>
    <BrowserRouter>
   <Navbar/>

<Routes>  
  <Route path='/' element={<Home/>} /> 
<Route path="/about" element={<About/>}/>
<Route path="*" element={<NotFound/>}    />
<Route path="/blog" element={<Blog/>}/>
</Routes>

  <Footer />
  </BrowserRouter>
 

 
    </>

  );
}

export default App;
