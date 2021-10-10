import {
  NEXT_STEP,
  PREV_STEP,
  ADD_PROGRESS,
  SUB_PROGRESS,
  CHEKED,
  ADD_DATA,
  
} from "./types";

export function nextForm() {
  return {
    type: NEXT_STEP,
  };
}
export function prevForm() {
  return {
    type: PREV_STEP,
  };
}
export function addProgress() {
  return {
    type: ADD_PROGRESS,
  };
}
export function subProgress() {
  return {
    type: SUB_PROGRESS,
  };
}
export function setCheked(checked) {
  return {
    type: CHEKED,
    payload:checked
  };
}

export function addData(data) {
    return {
      type: ADD_DATA,
      payload:data
    };
  }
