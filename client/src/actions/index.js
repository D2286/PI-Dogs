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
  return async function (dispatch) {
      try {
          var json = await axios.get('http://localhost:3001/' + id);
          console.log(json.data)
          return dispatch({
              type: "DETAIL_DOG",
              payload: json.data
          })
      } catch (err) {
          console.log(err)
      }
  }
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
    return async function (dispatch) {
      const json = await axios.post("http://localhost:3001/", payload);
      //console.log(json)
      return json;
    };
  }  
  export function nameDetail(name) {
    return async (dispatch) => {
      const json = await axios.get(`http://localhost:3001/?name=` + name);
      return dispatch({
        type: "NAME_DOG",
        payload: json.data
      });
    };
  }

  export function filterOrigin(payload) {
    return {
        
        type: "FILTER_ORIGIN",
        payload,
      }
  }

  export function orderByName(payload) {
    return {
        
        type: "ORDER_BY_NAME",
        payload
      }
  }