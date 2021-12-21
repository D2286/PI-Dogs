import axios from 'axios';

export function getApi(){
    return async (dispatch)=>{
        var json= await axios.get('http://localhost:3001/');
        //console.log(json.data);
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}




