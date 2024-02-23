import "./styles.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route} from "react-router-dom";


export default function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <h1>Hello Ecommerce</h1>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/products" element={<Signup/>}/>
          </Routes>
      
        </div>
      </BrowserRouter>
  );
}
