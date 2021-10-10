import React from 'react'
import { validate } from "../../validate/validateSecondForm";
import { useDispatch, useSelector } from "react-redux";
import { setCheked } from "../../redux/actions";
export default function ErrorField({ input, label, type, meta: { touched, error } }) {
    const dispatch = useDispatch();
    const secondStepData = useSelector(state => state.form?.secondStep);
    dispatch(setCheked(Object.keys(validate(secondStepData.values)).length===0))
    return(
        <div>
            <input  className={`form-second__data-item form-second__data-item-${label}`} placeholder={label}{...input}  type={type}/>
            {touched && ((error && <span className="span-error">{error}</span> ))}
         
        </div>
      )
}

