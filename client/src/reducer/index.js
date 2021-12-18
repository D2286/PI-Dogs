import { GET_DOGS } from "../actions";



const init = {
    perros : []
}

export default function rootReducer(state=init,action){
    switch (action.type){
        case "GET_DOGS":
            console.log(action.payload)
            return {
                ...state,
                perros:action.payload
            }
        default:
            return state;
    }

}

