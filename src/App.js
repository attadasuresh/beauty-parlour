import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import Aboutus from "./Components/Aboutus";





// import Contact from "./Components/Contact";

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Aboutus" element={<Aboutus />} />

        

        {/* <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
      <Footer />

    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
