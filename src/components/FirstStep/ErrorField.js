import React from 'react'
import { validate } from "../../validate/validatefirstForm";
import { useDispatch, useSelector } from "react-redux";
import { setCheked } from "../../redux/actions";
export default function ErrorField({ input, label, type, meta: { touched, error, warning } }) {
  const dispatch = useDispatch();
  const firstStepData = useSelector(state => state.form?.firstStep);
  dispatch(setCheked(Object.keys(validate(firstStepData.values)).length===0))
  return(
        <div>
          <label>{label}</label>
          <div>
            <input className="form__text" {...input} placeholder={label} type={type}/>
            {touched && ((error && <span className="span-error-first">{error}</span>) || (warning && <span >{warning}</span>))}
          </div>
        </div>
      )
}
