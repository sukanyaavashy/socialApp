import { ONCLICKLOGIN } from "./types";

export function login(value){
    return{
    type: ONCLICKLOGIN,
    payload: value
}
}