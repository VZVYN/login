
function getYear(day,month,year){
    const now = new Date(); 
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
    const dob = new Date(year, month, day); 
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); 
    let age; 
age = today.getFullYear() - dob.getFullYear();

if (today < dobnow) {
  age = age-1;
}
return age;
}
export const validate = (values) => {
    const errors = {};
    let years;
    if(values?.day&&values?.month&&values?.year){
        years=getYear(Number(values?.day),Number(values?.month),Number(values?.year))
        if(years<18)
       
        errors.day="Sorry, you must be at least 18 years old"
    }
    if (!values?.day) {
        errors.day="Required"
    }else if(Number(values?.day)>31||Number(values?.day)<1){
        errors.day=" 31 ≥ DD ≥ 1."
    }
    if (!values?.month) {
        errors.month="Required"
    }else if(Number(values?.month)>12||Number(values?.month)<1){
        errors.month="12 ≥ MM ≥ 1."
    }else if(values?.month[0]==="0"){
        errors.month="12 ≥ MM ≥ 1."
    }
    if (!values?.year) {
        errors.year="Required"
    }else  if(Number(values?.year)>2021||Number(values?.year)<1940){
        errors.year="invalid number"
    }
    if(!values?.gender){
        errors.gener="No Gender"
    }
    if(!values?.how_hear_about_us){
        errors.how_hear_about_us="no sellected"
    }
    
    return errors;
  };
 