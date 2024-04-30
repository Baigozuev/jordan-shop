import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../redux/AddBasketSilce";
import { useNavigate } from "react-router-dom";

const FovaritCard = ({ el, saleIcon }) => {
  const { fovarit } = useSelector((s) => s.addFovarit);
  const { basket } = useSelector((s) => s.addBasket);
  const nav = useNavigate();
  const dispatch = useDispatch();
  let someBuy = basket.some((some) => some.id === el.id);
  let someFov = fovarit.some((some) => some.id === el.id);
  return (
    <div id="buyCard">
      <div className="conatiner">
        <div className="buyCard">
          {<img src={el.url} alt="img" />}
          <h1>{el.title}</h1>
          <div className="buyCard--rating">
            <div className="buyCard--rating__star"></div>
            <div className="buyCard--rating__star"></div>
            <div className="buyCard--rating__star"></div>
            <div className="buyCard--rating__star"></div>
            <div className="buyCard--rating__star"></div>
          </div>

          <div className="buyCard--price">
            <h2>{el.price} $</h2>
            {saleIcon ? <h3>{el.oldPrice} $</h3> : null}
            {!someBuy ? (
              <button onClick={() => dispatch(addBasket(el))}>
                add_basket
              </button>
            ) : (
              <button onClick={() => nav("/basket")}>go to basket</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FovaritCard;
