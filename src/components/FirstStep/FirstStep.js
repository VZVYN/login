import React from "react";
import "./FirstStep.css";
import ErrorField from "./ErrorField";
import { Field, reduxForm } from "redux-form";
import { validate } from "../../validate/validatefirstForm";
function FirstStep() {
  return (
    <form >
      <div className="form" >
        <div className="form__logo">EMAIL IS REQUIRED</div>
        <Field destroyOnUnmount={false} name="email" type="email" component={ErrorField} />
        <div className="form__logo" forhtml="name">
          PASSWORD
        </div>
        <Field
          component="input"
          component={ErrorField}
          type="password"
          name="password"
        />
        <div className="form__logo" forhtml="name">
          CONFIRM PASSWORD
        </div>
        <Field
      
          component="input"
          component={ErrorField}
          type="password"
          name="confirmp"
        />
      </div>
    </form>
  );
}

export default reduxForm({
  form: "firstStep",
  validate,
  enableReinitialize : true,
  destroyOnUnmount:false
})(FirstStep);
