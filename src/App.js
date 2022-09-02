import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Faq from "./pages/Faq";
import Product from "./pages/Product";
import ProductDisplay from "./pages/ProductDisplay";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPage>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="faq" element={<Faq />} />
            <Route path="product" element={<Product />}>
              <Route path=":id" element={<ProductDisplay />} />
            </Route>
          </Routes>
        </MainPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
