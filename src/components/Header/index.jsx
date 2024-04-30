import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiBasketFill } from "react-icons/pi";
import { MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { searchPro } from "../../redux/AddCardSlice";
import { CgDarkMode } from "react-icons/cg";
import { isDone } from "../../redux/DarkModSlice";

const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [searchProduct, setSearchProduct] = useState("");
  const [search, setSearch] = useState(false);
  const { fovarit } = useSelector((s) => s.addFovarit);
  const { basket } = useSelector((s) => s.addBasket);
  const enterSearch = (e) => {
    if (e.key === "Enter") {
      nav(`/search`);
    }
  };
  useEffect(() => {
    dispatch(searchPro(searchProduct));
  }, []);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="img" onClick={() => nav("/buynow")} />
          <div className="header--nav">
            <Link to={"/"}>HOME</Link>
            <Link to={"/man"}>MAN</Link>
            <Link to={"/woman"}>WOMAN</Link>
            <Link to={"kids"}>KIDS</Link>
            <Link to={"/sale"}>SALE</Link>
          </div>
          <div className="header--icon">
            <div className="search">
              <input
                type="text"
                placeholder="search"
                onKeyDown={(e) => enterSearch(e)}
                onChange={(e) => setSearchProduct(e.target.value)}
                style={{
                  transform: search ? "translateY(0px)" : "translateY(-100px)",
                }}
              />
              <a onClick={() => setSearch(!search)}>
                <CiSearch />
              </a>
            </div>
            <a onClick={() => nav("/fovarit")}>
              {fovarit.length ? <span>{fovarit.length}</span> : null}
              <MdOutlineFavorite />
            </a>
            <Link to={"/basket"}>
              {" "}
              {basket.length ? <span>{basket.length}</span> : null}
              <PiBasketFill />
            </Link>
            <a onClick={() =>dispatch(isDone()) }>
              <CgDarkMode />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
