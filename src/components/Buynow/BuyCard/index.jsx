import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../../redux/AddBasketSilce";
import { useNavigate } from "react-router-dom";
import saleImg from "../../../assets/img/sale.webp";
import { productDeatils } from "../../../redux/AddCardSlice";
import { MdOutlineFavorite } from "react-icons/md";
import { addFovarit } from "../../../redux/AddFovaritSilece";

const BuyCard = ({ el, saleIcon }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { fovarit } = useSelector((s) => s.addFovarit);
  const { basket } = useSelector((s) => s.addBasket);
  let someBuy = basket.some((some) => some.id === el.id);
  let someFov = fovarit.some((some) => some.id === el.id);

  return (
    <div className="buyCard" >
      {saleIcon ? <img src={saleImg} alt="img" className="saleImg" /> : null}
      <Zoom>
        <img src={el.url} alt="img" />
      </Zoom>
      <div className="buyCard--text">
        <h1
          onClick={() => {
            dispatch(productDeatils(el));
            nav("/productDetails");
          }}
        >
          {el.title}
        </h1>
        {el.category ? <h4># {el.category}</h4> : null}
      </div>
      <div className="buyCard--rating">
        <div className="buyCard--rating__star"></div>
        <div className="buyCard--rating__star"></div>
        <div className="buyCard--rating__star"></div>
        <div className="buyCard--rating__star"></div>
        <div className="buyCard--rating__star"></div>
      </div>
      <div className="buyCard--icons">
        <a
          onClick={() => dispatch(addFovarit(el))}
          style={{
            color: someFov ? "red" : "white",
          }}
        >
          <MdOutlineFavorite />
        </a>
      </div>
      <div className="buyCard--price">
        <h2>{el.price} $</h2>
        {saleIcon ? <h3>{el.oldPrice} $</h3> : null}
        {!someBuy ? (
          <button onClick={() => dispatch(addBasket(el))}>add_basket</button>
        ) : (
          <button onClick={() => nav("/basket")}>go to basket</button>
        )}
      </div>
    </div>
  );
};

export default BuyCard;
