import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/AddCardSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");

  const dispatch = useDispatch();
  const nav = useNavigate();
  const { product } = useSelector((s) => s.addCard);
  const succesMassege = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
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
  const creadProduct = () => {
    if (
      productUrl.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === ""
    ) {
      massegeError();
    } else {
      let newProduct = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        url: productUrl,
        title: productName,
        price: productPrice,
        category: productCategory,
      };
      setProductUrl("");
      setProductName("");
      setProductPrice("");
      succesMassege();

      return dispatch(addProduct(newProduct));
    }
  };

  return (
    <div id="addCard">
      <div className="container">
        <div className="addCard">
          <input
            value={productUrl}
            onChange={(e) => setProductUrl(e.target.value)}
            type="text"
            placeholder="url"
          />
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="name"
          />
          <div className="addCard--category">
            <input
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              type="text"
              placeholder="$"
            />
            <select onChange={(e) => setProductCategory(e.target.value)}>
              <option  value="man">MAN</option>
              <option  value="woman">WOMAN</option>
              <option  value="kids">KIDS</option>
            </select>
          </div>
          <button onClick={() => creadProduct()} className="btn">
            ADD PRODUCT
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default AddCard;
