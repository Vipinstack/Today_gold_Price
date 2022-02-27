import React, { useEffect, useState } from "react";
import "./GoldPrice.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";

const GoldPrice = () => {
  const [goldprice, setGoldPrice] =useState("");
  const [prevprice, setPrevPrice] =useState("");

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-eqty218l0527mfu-io");
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
      .then(response => response.json())
      .then(result =>{return(setGoldPrice(result.price),setPrevPrice(result.prev_close_price))})
      .catch(error => console.log('error', error));
  }, []);


  return (
    <div className="wrapper">
      <div className="gold_price">
        <FontAwesomeIcon icon={faIndianRupee} className="gold_rupee_icon" />
        <span className="gold_price_text">{goldprice}</span>
        <br />
        <span className="gold">Gold Price</span>
      </div>
      <div className="gold_purchage">
        <FontAwesomeIcon icon={faIndianRupee} className="gold_rupee_icon" />
        <span className="gold_price_text">5.1L</span>
        <br />
        <span className="gold_price_purchage">Gold Purchage</span>
      </div>
      <h3 className="gold_title">Gold Price</h3>
      <div className="today">
        <span>Today</span>
        <span>{goldprice}Gram</span>
      </div>
      <div className="Yesterday">
        <span>Yesterday</span>
        <span>{prevprice}Gram</span>
      </div>
      <div className="Date">
        <span>{new Date().toDateString()}</span>
        <span>{goldprice}Gram</span>
      </div>
      <span>
      <button className="btn-ShriRam">Shri Ram Jewellers</button>
      <button className="btn-janta">Janta Jewellers</button>
      </span>
    </div>
  );
};

export default GoldPrice;
