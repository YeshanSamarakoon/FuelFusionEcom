import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Cart from "./Pages/Cart";
import ProductN from "./Pages/Product";
import bg from './assets/bg.png'
import Login from "./Pages/Login";

export default function App() {
  return (
   <main className="text-tertiary">
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Sports" element={<Category category={"Sports"} banner={bg}/>}/>
          <Route path="/Relaxation" element={<Category category={"Organic"} banner={bg} />}/>
          <Route path="/Natural energy" element={<Category category={"Relaxation drink"} banner={bg}/>}/>
          <Route path="/product/:proId" element={<ProductN/>}/>
            <Route path=":productId" element={<ProductN/>}/>

           <Route path="/cart" element={<Cart/>}/>
           <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter> 
   </main>
  )
} 