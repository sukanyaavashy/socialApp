export const SET_USER_Email="SET_USER_Email";
export const SET_USER_PASSWORD="SET_USER_PASSWORD";
export const GET_USER_UID="GET_USER_UID";
export const GET_TOKEN="GET_TOKEN";
export const REMOVE_TOKEN="REMOVE_TOKEN";

export const getUserUid = uid => dispatch => {
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

export const getToken=token=>dispatch=>{
    dispatch({
        type:GET_TOKEN,
        payload:token,
    })
}

export const removeToken=() =>dispatch=>{
    dispatch({
        type:REMOVE_TOKEN,

    })
}