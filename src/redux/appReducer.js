import { NEXT_STEP, PREV_STEP ,ADD_PROGRESS,SUB_PROGRESS,CHEKED,} from "./types";

const initialState={
    currentForm: 1,
    progress:33.333,
    checked:false,
   
    
    
}
export const appReducer=(state=initialState,action)=>{
    switch (action.type)
    {   
        case NEXT_STEP:return {...state,currentForm:state.currentForm+1}
        case PREV_STEP:return{...state,currentForm:state.currentForm-1}
        case ADD_PROGRESS:return {...state,progress:state.progress+33.333}
        case SUB_PROGRESS:return {...state,progress:state.progress-33.333}
        case CHEKED:return{...state,checked:action.payload}
    
        
        default: return state;
    }
}