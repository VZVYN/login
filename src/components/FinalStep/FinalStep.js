import React from 'react'
import "./FinalStep.css"
import {  useSelector } from "react-redux";

function getJSONData(valuesfirst,valuessecond){
    const data={...valuesfirst}
    data.date_of_birth=valuessecond.day+"."+valuessecond.month+"."+valuessecond.year
    data.gender=valuessecond.gender
    data.how_hear_about_us=valuessecond.how_hear_about_us;
    return data;



}
export default function FinalStep() {
    const valuesfirst = useSelector(state => state.form.firstStep.values);
    const valuessecond = useSelector(state => state.form.secondStep.values);
    
    
    

    return (
        <div className="final-step">
            <div className="final-step__img"> </div>
               <button className="final-step__btn btn-animated" onClick={()=>{console.log(JSON.stringify(getJSONData(valuesfirst,valuessecond), null, 2))}}>Go to Dashboard </button>
        </div>
    )
}
