import React from "react";
import nike from "../../assets/img/nike.svg";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const nav = useNavigate()
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home--bottom">
            <div className="home--bottom__left">
              <h1>CHOOSE COLOR : </h1>
              <img src={nike} alt="img" />
            </div>
            <div className="home--bottom__center">
              <button onClick={() => nav("/addCard")} className="btnLeft">ADD TO CART</button>
              <button onClick={() => nav("/buynow")} className="btnRight">BUY NOW</button>
            </div>
            <div className="home--bottom__right">
              <h2>INSPIRATION</h2>
              <p>
                Inspired by the design of the latest Air Jordan game shoe,{" "}
                <br />
                the Jordan Jumpman 2021 helps up-and-coming players <br />
                level up their game.{" "}
              </p>
            </div>
          </div>
          <div className="home--price">
            <h1>134$</h1>
            <h2>JORDAN  <br />
            JUMPMAN 2021 PF</h2>
            <button>exclusive</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
