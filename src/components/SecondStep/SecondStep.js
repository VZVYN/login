import React from "react";
import "./SecondStep.css";
import { validate } from "../../validate/validateSecondForm";
import ErrorField from "./ErrorFieldSecondForm";
import { useDispatch, useSelector } from "react-redux";
import { setCheked } from "../../redux/actions";
import { Field, reduxForm } from "redux-form";
 function SecondStep() {

  return (
    <form action="#" className="form-second">
      <div className="form-second__title">DATE OF BIRTH</div>
      <div className="form-second__date">
        <Field
          name="age" type="number" component={ErrorField}  
          name="day"
          label="DD"
          placeholder="DD"
        />
        <Field
          name="month" type="number" component={ErrorField}label="MM" 
        />
        <Field
          name="year" type="number"  component={ErrorField}  label="YYYY" 
        />
      </div>
      <div className="form-second__title">GENDER</div>
      <div className="form-second__date">
      <div className="form_radio_group">
	<div className="form_radio_group-item">
		<Field component="input"  id="radio-1" type="radio" name="gender" value="MALE"  />
		<label htmlFor="radio-1">MALE</label>
	</div>
	<div className="form_radio_group-item">
		<Field component="input"  id="radio-2" type="radio" name="gender" value="FEMALE"  />
		<label htmlFor ="radio-2">FEMALE</label>
	</div>
	<div className="form_radio_group-item">
		<Field id="radio-3" component="input"  type="radio" name="gender" value="UNSPECIFIED" />
		<label htmlFor="radio-3">UNSPECIFIED</label>
	</div>
	
</div>
      </div>
      <div className="form-second__title">WHERE DID YOU HEAR ABOUT IS?</div>
      <div className="form-second__date">
        <div className="select-wrapper">
          <div className="select-arrow-3"></div>
          <div className="select-arrow-3"></div>
          <Field component="select" name="how_hear_about_us">
            <option></option>
            <option>Test1</option>
            <option>Test2</option>
            <option>Test3</option>
          </Field>
        </div>
      </div>
    </form>
  );
}
export default reduxForm({
        form: "secondStep",
        validate,
        enableReinitialize : true,
        destroyOnUnmount:false
      })(SecondStep);