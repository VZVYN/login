import React from "react";
import "./FooterNav.css";
import { useDispatch, useSelector } from "react-redux";
import { addData, addProgress, nextForm, prevForm, setCheked, setChekedFirst, subProgress } from "../../redux/actions";
export default function FooterNav() {
  const currentForm = useSelector((state) => state.app.currentForm);
  const dispatch = useDispatch();
  
  const checked = useSelector(state => state.app.checked);
 
  return (
    <div>
      <div className="footer">
        <button
          style={currentForm === 1 ? { opacity: 0 } : { opacity: 1 }}
          onClick={() => {
            dispatch(prevForm());
            dispatch(subProgress());
           
          }}
          className="footer__past"
        >
          Back
        </button>
        {(checked === false)? (
          <button href="#" disabled style={{background:"none"}} className="footer__next">
            Next
          </button>
        ) 
        :
        (
          <button
            href="#"
            onClick={() => {
              dispatch(nextForm());
              dispatch(addProgress());
              dispatch(setCheked(false))
            }}
            className="footer__next" > Next</button>
        )}
      </div>
    </div>
  );
}
