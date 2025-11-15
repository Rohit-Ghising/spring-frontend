// import { API_BASE_URL } from "../../config/api"
// import axios from "axios";
// import { GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "./ActionType";

// export const loginUser =(loginData)=async(dispatch)=>{
//   try {
//     const {data} = await axios.post(`${API_BASE_URL}/auth/signin`,loginData)
//     console.log("loggedin ",data)
//     if(data.jwt){
//       localStorage.setItem("jwt",data.jwt)
//     }
//     dispatch({type:LOGIN_USER_SUCCESS,payload:data.jwt})
    
//   } catch (error

    
//   ) {
//     console.log("Error",error)
//     dispatch({type:LOGIN_USER_FAILURE,payload:error.message})
    
//   }
// }


// export const registerUser =(registerData)=async(dispatch)=>{
//   try {
//     const {data} = await axios.post(`${API_BASE_URL}/auth/signup`,registerData)
//     console.log('regustered',data)
//     if(data.jwt){
//       localStorage.setItem("jwt",data.jwt)
//     }
//     dispatch({type:REGISTER_USER_SUCCESS,payload:data.jwt})

    
//   } catch (error

    
//   ) {
//     console.log("Error",error)
//     dispatch({type:REGISTER_USER_FAILURE,payload:error.message})
    
//   }
// }

// export const getUserProfile =(jwt)=async(dispatch)=>{
//   try {
   
//     dispatch({type:GET_USER_PROFILE_SUCCESS,payload:data})
    
//   } catch (error

    
//   ) {
//     console.log("Error",error)
//     dispatch({type:GET_USER_PROFILE_FAILURE,payload:error.message})
    
//   }
// }
import { api, API_BASE_URL } from "../../config/api";
import axios from "axios";
import {
  FIND_USER_BY_ID_FAILURE,
  FIND_USER_BY_ID_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS
} from "./ActionType";


export const loginUser = (loginData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);
    console.log("loggedin ", data);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }

    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("Error", error);
    dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
  }
};

export const registerUser = (registerData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData);
    console.log("registered", data);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("Error", error);
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
  }
};

export const getUserProfile = (jwt) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });

    dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error", error);
    dispatch({ type: GET_USER_PROFILE_FAILURE, payload: error.message });
  }
};
export const findUserById= (userId)=>async(dispatch)=>{
  try {
    const {data} = await api.get(`/api/users/${userId}`)
    dispatch({type:FIND_USER_BY_ID_SUCCESS,payload:data})
    
  } catch (error) {
    console.log("error")
    dispatch({type:FIND_USER_BY_ID_FAILURE,payload:error.message})
    
  }
}
export const updateUserProfile= (reqData)=>async(dispatch)=>{
  try {
    const {data} = await api.put(`/api/users/update/`,reqData)
    dispatch({type:UPDATE_USER_SUCCESS,payload:data})
    
  } catch (error) {
    console.log("error")
    dispatch({type:UPDATE_USER_FAILURE,payload:error.message})
    
  }
}





export const logout = () => async (dispatch) => {
  
    localStorage.removeItem("jwt")
    dispatch({type:LOGOUT,payload:null})
    
   

};



