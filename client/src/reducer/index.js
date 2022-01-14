
const init = {
    perros : [],
    perro :[],
    temperamentos:[]
}

export default function reducer(state=init, action){
    switch (action.type){
        case "GET_DOGS":
        //console.log(state.perro)
            return {
                ...state,
                perros:action.payload
            }
            case "DETAIL_DOG":
                return {
                  ...state,
                perro:action.payload
                };
                case "NAME_DOG":

                return {
                    ...state,
                perro:action.payload
                };
                case "GET_TEMPERAMENTS":
                //console.log(action.payload)
                return {
                    ...state,
                temperamentos:action.payload
                };  
                case "CREATE_DOGS":
               
                    return {
                        ...state,}
                    //temperamentos:action.payload
                
        default:
            return state;
    }

}

