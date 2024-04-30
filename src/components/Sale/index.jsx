import React, { useEffect } from "react";
import BuyCard from "../Buynow/BuyCard";
import { useDispatch, useSelector } from "react-redux";
import { saleProduct } from "../../redux/AddCardSlice";

const Sale = () => {
  const { sale } = useSelector((s) => s.addCard);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saleProduct());
  }, []);
  return (
    <div id="buy">
      <div className="container">
        <div className="buy">
          {sale.map((el) => (
            <BuyCard el={el} saleIcon={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
