import React from "react";
import { useSelector } from "react-redux";
import FovaritCard from "../FovaridCard";

const Fovarit = () => {
  const { fovarit } = useSelector((s) => s.addFovarit);
  return (
    <div id="fovarit">
      <div className="container">
        <div className="fovarit">
          {fovarit.map((el) => (
            <FovaritCard el={el} />
          ))}
       
        </div>
      </div>
    </div>
  );
};

export default Fovarit;
