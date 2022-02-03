
const init = {
    perros : [],
    perro :[],
    filterDogs: [],
    temperamentos:[],

}

export default function reducer(state=init, action){
    switch (action.type){
        case "GET_DOGS":
        //console.log(state.perro)
            return {
                ...state,
                perros:action.payload,
                filterDogs:action.payload
            }
            case "DETAIL_DOG":
                
                return {
                  ...state,
                perro:action.payload,
                
                };
                
                case "NAME_DOG":
                
                return {
                    ...state,
                perros:action.payload
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

                case "FILTER_ORIGIN":
                    const allDogsCreated = state.filterDogs
                    const createdFilter = action.payload === 'created' ?
                        allDogsCreated.filter((e) => e.createdInDb)
                        : action.payload === 'api' ?
                            allDogsCreated.filter((e) => !e.createdInDb)
                            : action.payload === 'all' &&
                            allDogsCreated
                    return {
                        ...state,
                        perros: createdFilter,
        
                    } 

                    case "ORDER_BY_NAME":
                        let ordenado = action.payload === "az" ? state.perros.sort(function (a, b) {
                             if (a.name > b.name) {
                                return 1;
                            }
                            if (b.name > a.name) {
                                return -1;
                            } 
                            return 0
                            /* return a.name - b.name; */
                        }) :
                            state.perros.sort(function (a, b) {
                                if (a.name > b.name) {
                                    return -1;
                                }
                                if (b.name > a.name) {
                                    return 1
                                }
                                return 0
                            })
                        return {
                            ...state,
                            perros: ordenado
                        }    
        default:
            return state;
    }

}

