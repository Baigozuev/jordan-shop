import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import AddCard from "./components/AddCard";
import Buynow from "./components/Buynow";
import Basket from "./components/Basket";
import Sale from "./components/Sale";
import ProductDetails from "./components/ProductDetails";
import Search from "./components/Search";
import Fovarit from "./components/Fovarit";
import Man from "./components/Man";
import Woman from "./components/Woman";
import Kids from "./components/Kids";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addCard" element={<AddCard />} />
        <Route path="/buynow" element={<Buynow />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/search" element={<Search />} />
        <Route path="/fovarit" element={<Fovarit />} />
        <Route path="/man" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
