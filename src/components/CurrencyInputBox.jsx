import React, { useEffect, useState } from "react";
import styles from "./CurrencyInputBox.module.css";

export default function CurrencyInputBox(props) {
  const {
    dispAmmount,
    setDispAmmount,
    dispcurrencyType,
    setToCuurencyType,
    label,
    setCuurencyType,
    currencyOptions
  } = props;

  function handleChange(e) {
    setDispAmmount(e.target.value);
  }
  function handlechangeCurrecnyType(e) {
    if (label == "From") setCuurencyType(e.target.value);
    else setToCuurencyType(e.target.value);
  }



  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardLeft}>
          <label>{label} : {dispcurrencyType}</label>
          <input
            value={dispAmmount}
            onChange={handleChange}
            type="number"
            placeholder="Enter Amount"
          />
        </div>
        <div className={styles.cardRight}>
          <div>
            <span>Currency Type</span>
          </div>
          <div>
            <select
              className={styles.currselect}
              value={dispcurrencyType} 
              onChange={handlechangeCurrecnyType}
            >
              {currencyOptions.map((crr) => (
                <option key={crr} value={crr}>
                  {crr}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
