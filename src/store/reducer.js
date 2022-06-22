import { ONCLICKLOGIN } from "./types";


const intialState = {
    token: ""
}

export function tokenReducer(state=intialState,action){
    switch (action.type) {
        case ONCLICKLOGIN:

            return{
                ...state,
                token:action.payload
            }

        default:
            return state
    }
}