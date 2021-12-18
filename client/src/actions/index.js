import axios from 'axios';
export const GET_DOGS = "GET_DOGS"


export function getApi(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/");
        //console.log(json.data);
        dispatch({
            type: "GET_DOGS",
            playload: json.data
        })
       
    }
    
}




