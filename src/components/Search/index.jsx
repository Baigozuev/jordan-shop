import React from "react";
import { useSelector } from "react-redux";
import BuyCard from "../Buynow/BuyCard";

const Search = () => {
  const { searchProduct } = useSelector((s) => s.addCard);
  return (
    <div className="containet">
      {searchProduct.map((el) => (
        <BuyCard el={el} />
      ))}
    </div>
  );
};

export default Search;
