// import { ONCLICKLOGIN } from "./types";

// export function login(value){
//     return{
//     type: ONCLICKLOGIN,
//     payload: value
// }
// }

export const SET_USER_Email="SET_USER_Email";
export const SET_USER_PASSWORD="SET_USER_PASSWORD";
export const GET_USER_UID="GET_USER_UID";

export const getUserUid=uid=>dispatch=>{
    dispatch({
        type:GET_USER_UID,
        payload:uid,
    })
}

export const setEmail= email => dispatch => {

    dispatch({
        type:SET_USER_Email,
        payload:email,
    })
};

export const setPassword = password => dispatch => {
    dispatch({
        type:SET_USER_PASSWORD,
        payload:password,
    })
};