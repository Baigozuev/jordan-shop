import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { deleteBasket } from "../../redux/AddBasketSilce";
import logo from "../../assets/img/logo.svg";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import succes from "../../assets/img/succes.png";
import { basket } from "../../assets/img/empty_cart basket.png";

// -1002098451884
const Basket = () => {
  const [modal, setModal] = useState(false);
  const [modalBlock, setModalBlock] = useState(false);
  const [modalText, setModalText] = useState(true);
  const [modalBottom, setModalBottom] = useState(false);
  const [modalSucces, setModalSucces] = useState(false);
  const [productNema, setProductNema] = useState("");
  const [productAddress, setProductAddress] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const { basket } = useSelector((s) => s.addBasket);
  const dispatch = useDispatch();

  let TotalPrice = basket.reduce((acc, el) => {
    return acc + +el.price;
  }, 0);

  const massegeError = () => {
    toast.error("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const resetState = () => {
    setModalText(true);
    setModalBottom(false);
    setModalSucces(false);
  };
  function formSobmitTelegram() {
    if (
      productNema.trim() === "" ||
      productAddress.trim() === "" ||
      productPrice.trim() === ""
    ) {
      massegeError();
    }

    const my_id = `-1002098451884`;
    const token = `7056275113:AAGhLuLK7a0VPhhxvJDxgvzJPJ0zVnfhbOM`;
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`;

    const newUser = {
      chat_id: my_id,
      parse_model: "html",
      text: `novie zakaz \n
      nema: ${productNema}
      address: ${productAddress}
      nomPhone: ${productPrice}`,
    };
    setProductNema("");
    setProductAddress("");
    setProductPrice("");
    setModalBlock(true);
    setModalText(false);
    setModalBottom(true);
    setTimeout(() => {
      setModalBottom(false);
      setModalSucces(true);
      axios.post(url_api, newUser);
    }, 2000);
  }
  useEffect(() => {
    resetState();
  }, [modalBlock]);
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--block">
            {basket.map((el) => (
              <div className="basket--block__bloks">
                <a onClick={() => dispatch(deleteBasket(el))}>
                  <RiDeleteBin7Fill />
                </a>
                <img src={el.url} alt="img" />
                <div className="basket--block__bloks--text">
                  <h1 className="h1">{el.title}</h1>
                  <div className="buyCard--rating">
                    <div className="buyCard--rating__star"></div>
                    <div className="buyCard--rating__star"></div>
                    <div className="buyCard--rating__star"></div>
                    <div className="buyCard--rating__star"></div>
                    <div className="buyCard--rating__star"></div>
                  </div>

                  <h2>{el.price} $</h2>
                  <div className="basket--block__bloks--text__btns">
                    <button className="plus">+</button>
                    <h1>1</h1>
                    <button className="minus">-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="totalPrice">
            <h1 className="total">
              Total Price: <span>{TotalPrice} $</span>
            </h1>
            <a className="icon">
              <FiEdit />
            </a>
          </div>
          <div className="to">
            <a className="icon" onClick={() => setModal(!modal)}>
              <FiEdit />
            </a>
          </div>
          {modal ? (
            <>
              <div className="basket--bg" onClick={() => setModal(false)}></div>
              <div className="basket--modal">
                {!modalBlock ? (
                  <>
                    <img src={logo} alt="img" />
                    <input
                      value={productNema}
                      onChange={(e) => setProductNema(e.target.value)}
                      type="text"
                      className="productNema"
                      placeholder="productNema"
                    />
                    <input
                      value={productAddress}
                      onChange={(e) => setProductAddress(e.target.value)}
                      type="text"
                      className="productAddress"
                      placeholder="productAddress"
                    />
                    <input
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      type="price"
                      className="productPrice"
                      placeholder="productPrice"
                    />
                    <button
                      className="potverdit"
                      onClick={() => setModalBlock(true)}
                    >
                      potverdit
                    </button>
                  </>
                ) : (
                  <>
                    {modalText ? (
                      <>
                        <h1>Potverdit dannye!!</h1>
                        {productNema ? (
                          <h3>
                            {productNema}, {productAddress}, {productPrice}
                          </h3>
                        ) : null}
                        <button
                          className="potverj"
                          onClick={() => formSobmitTelegram()}
                        >
                          potverjdaiu
                        </button>
                      </>
                    ) : null}
                  </>
                )}
                <>
                  {modalBottom ? <h5>Podajdite ...</h5> : null}

                  {modalSucces ? (
                    <img src={succes} alt="img" className="url" />
                  ) : null}
                </>

                <ToastContainer />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Basket;
