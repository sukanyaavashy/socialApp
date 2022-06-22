// import { ONCLICKLOGIN } from "./types";


// const intialState = {
//     token: ""
// }

// export function tokenReducer(state=intialState,action){
//     switch (action.type) {
//         case ONCLICKLOGIN:

//             return{
//                 ...state,
//                 token:action.payload
//             }

//         default:
//             return state
//     }
// }


import { SET_USER_PASSWORD,SET_USER_Email,GET_USER_UID } from "./actions";

const initialState={
    email:"",
    password:"",
    uid:"",
}

function userReducer(state=initialState,action){
    switch(action.type){
        case SET_USER_Email:
            return {...state,email:action.payload};
        case SET_USER_PASSWORD:
            return {...state,password:action.payload};
        case GET_USER_UID:
            return {...state,uid:action.payload}
        default:
            return state;
    }

}

export default userReducer;