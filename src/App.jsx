import "./styles.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Products from "./components/Products"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddProducts from "./components/AddProduct";
import Navbar from "./components/Navbar";


export default function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <h1>Hello Ecommerce</h1>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Products/>}/>
            <Route path="/addproducts" element={<AddProducts/>}/>
          </Routes>
        
        </div>
      </BrowserRouter>
  );
}
