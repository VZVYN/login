import React ,{useState} from 'react'
import "./FinalStep.css"
import {  useSelector } from "react-redux";

import View from '../View/View';
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
    const [view, setView] = useState(false)
    
    //onClick={()=>{console.log(JSON.stringify(getJSONData(valuesfirst,valuessecond), null, 2))}}
    
    return (<>
        <div className="final-step">
            <div className="final-step__img"> </div>
               <button className="final-step__btn btn-animated" onClick={()=>setView(true)} >Go to Dashboard </button>
        </div>
        {view?
        (
           <View data={getJSONData(valuesfirst,valuessecond)}/>
        )
        :"" }
        </>
    )
}
