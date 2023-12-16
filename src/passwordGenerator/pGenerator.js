import React from "react";
import "./passwordGenerator.css";
import { useDispatch, useSelector } from "react-redux";
import { clickChecked, generatePassword, moveSlider } from "./pGeneratorSlice";

const PasswordGenerator = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.passwordGeneratorReducer);
  return (
    <div className="passwordGenerator">
      <div>
        {/* Text area / button copy */}
        <input className="inputPassword" value={state.password} />
        {/* <h1>{state.password}</h1> */}
        <button
          className="generateButton"
          onClick={() => dispatch(generatePassword())}>
          Generate
        </button>
      </div>
      <div className="asd">
        <div>
          <h1>{state.current}</h1>
          <input
            className="slider"
            type="range"
            min={state.min}
            max={state.max}
            value={state.current}
            onChange={(e) => dispatch(moveSlider(e))}
          />
        </div>
        <div className="checkBoxes">
          <span className="inputText">
            <input
              type="checkbox"
              value={"Uppercase"}
              onClick={(e) => dispatch(clickChecked(e))}
            />
            Uppercase
          </span>
          <span className="inputText">
            <input
              type="checkbox"
              value={"Lowercase"}
              onClick={(e) => dispatch(clickChecked(e))}
            />
            Lowercase
          </span>
          <span className="inputText">
            <input
              type="checkbox"
              value={"Numbers"}
              onClick={(e) => dispatch(clickChecked(e))}
            />
            Numbers
          </span>
          <span className="inputText">
            <input
              type="checkbox"
              value={"Symbols"}
              onClick={(e) => dispatch(clickChecked(e))}
            />
            Symbols
          </span>
        </div>
      </div>
    </div>
  );
};
export default PasswordGenerator;
