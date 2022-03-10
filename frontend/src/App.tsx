import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Form from "./feature/Form";
import Home from "./feature/Home";

export default function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/form/:id" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}
