export const validate = (values) => {
  const errors = {};
  if (!values?.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values?.password) {
    errors.password = "Required";
  } else if (values?.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!values?.confirmp) {
    errors.confirmp = "Required";
  } else if (values?.confirmp.length < 6) {
    errors.confirmp = "Password must be at least 6 characters";
  } else if (values?.confirmp !== values.password) {
    errors.confirmp = "Passwords do not coincide ";
  }
  return errors;
};
