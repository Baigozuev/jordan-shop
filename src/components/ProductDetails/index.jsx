import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import saleImg from "../../assets/img/logo.svg";
const ProductDetails = () => {
  const nav = useNavigate();
  const { details } = useSelector((s) => s.addCard);
  const { url, title, price } = details;
  return (
    <div id="details">
      <div className="container">
        <div className="details">
          <img src={url} alt="img" />
          <div className="details--block">
            <div className="details--block__size">
              <h1>{title}</h1>
              <h3>{price} $</h3>
              <h2>Select Size</h2>
              <div className="details--block__size--block">
                <div className="details--block__size--block__blocks">
                  <h4>3.5Y</h4>
                </div>
                <div className="details--block__size--block__blocks">
                  <h4>3.5Y</h4>
                </div>
                <div className="details--block__size--block__blocks">
                  <h4>3.5Y</h4>
                </div>
                <div className="details--block__size--block__blocks">
                  <h4>3.5Y</h4>
                </div>
                <div className="details--block__size--block__blocks">
                  <h4>3.5Y</h4>
                </div>
                <div className="details--block__size--block__blocks">
                  <h4>3.5Y</h4>
                </div>
                <div className="details--block__size--block__blocks">
                  <h4>3.5Y</h4>
                </div>
                <div className="details--block__size--block__blocks">
                  <h4>3.5Y</h4>
                </div>
              </div>
              <div className="details--block__size--buttons">
                <button onClick={() => nav("/basket")} className="btn">Add to Basket</button>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
