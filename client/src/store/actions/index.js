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


export function getDetail(id) {
    return async (dispatch) => {
      const json = await axios.get(`http://localhost:3001/dogs/${id}`);
      
      return dispatch({
        type: "DETAIL_DOG",
        payload: json.data
      });
    };
  }


  export function Get_Temps() {
    return async (dispatch) => {
      const json = await axios.get("http://localhost:3001/tempes");
      //console.log(json.data)
      return dispatch({
        type: "GET_TEMPERAMENTS",
        payload: json.data
      });
    };
  }  

  export function CreateDogs(payload) {
    return async (dispatch) => {
      const json = await axios.post("http://localhost:3001/", payload);
      console.log(json.data)
      return dispatch({
        type: "CREATE_DOGS",
        payload: json.data
      });
    };
  }  
  export function Name_Detail(name) {
    return async (dispatch) => {
      const json = await axios.get(`http://localhost:3001/?name=` + name);
      //console.log(json.data)
      return dispatch({
        type: "NAME_DOG",
        payload: json.data
      });
    };
  }