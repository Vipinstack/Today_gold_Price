import React, { useEffect, useState } from "react";
import "./TodayPrice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
// import Footer from "../Footer/Footer";

const TodayPrice = () => {
  const[rupee, setRupee] = useState("");
  const[gram, setGram] = useState("");
  // const[pricegram, setPriceGram] = useState("");
  // const[gramprice, setGramPrice] = useState("");


  useEffect(() => {
   console.log((rupee/141930.08));
   console.log((gram * 141930.8));
  }, [rupee, gram]);

  return (
    <div className="Today_price">
      <h1>Today Price</h1>
      <img
        src="https://i.postimg.cc/mksjJJXC/download.jpg"
        className="img"
        alt=""
      />
      <p className="amout">Investment Amount</p>
      <p className="indian_rupee_icon">
        <FontAwesomeIcon icon={faIndianRupee} />
      </p>
        <input value={rupee} type="number" className="input_type_rupee" onChange={(e)=>setRupee(e.target.value)}  />
    
      <hr className="hr_line" />
      <span className="icon_color">
        +<FontAwesomeIcon icon={faIndianRupee} className="icon" />
        500 &nbsp;&nbsp;&nbsp;&nbsp;+
        <FontAwesomeIcon icon={faIndianRupee} className="icon" />
        1000 &nbsp;&nbsp;&nbsp;&nbsp;+
        <FontAwesomeIcon icon={faIndianRupee} className="icon" />
        1500 &nbsp;&nbsp;&nbsp;&nbsp;+
        <FontAwesomeIcon icon={faIndianRupee} className="icon" />
        2000 &nbsp;&nbsp;&nbsp;&nbsp;
      </span>

      <div>

        <input value={gram}  type="number" className="input_type" onChange={(e)=>setGram(e.target.value)}  />
        <span className="grm">Gram</span>





      <hr className="next_hr_line" />
      </div>
      <span className="imgs">
      <img
        src="https://i.postimg.cc/mksjJJXC/download.jpg"
        alt=""
        className="img_repeat"
      />
      <img
        src="https://i.postimg.cc/mksjJJXC/download.jpg"
        alt=""
        className="img_repeat1"

      />
      <img
        src="https://i.postimg.cc/mksjJJXC/download.jpg"
        alt=""
        className="img_repeat2"

      />
      <img
        src="https://i.postimg.cc/mksjJJXC/download.jpg"
        alt=""
        className="img_repeat3"

      />
      </span>
      </div>
  );
};

export default TodayPrice;
