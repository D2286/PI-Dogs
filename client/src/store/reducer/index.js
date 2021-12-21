
const init = {
    perros : []
}

export default function reducer(state=init, action){
    switch (action.type){
        case "GET_DOGS":
        console.log(state.perros)
            return {
                ...state,
                perros:action.payload
            }
        default:
            return state;
    }

}

