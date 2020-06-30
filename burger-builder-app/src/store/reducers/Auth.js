import * as actionTypes from '../actions/actionTypes'
import {updateState} from '../utility/utility';


const initialState = {
    token:null,
    userId:null,
    error:null,
    loading:false,
    authRedirectPath:'/'
}

const authStart = (state,action)=>{
    return updateState(state,{error:null,loading:true})
}

const authSuccess = (state,action)=>{
    const updatedState={
        token:action.idToken,
        userId:action.userId,
        error:null,
        loading:false
    }

    return updateState(state,updatedState)
}

const authFail = (state,action)=>{
    return updateState(state,{error:action.error,loading:false})
}

const logout = (state,action)=>{
    return updateState(state,{userId:null,token:null});
}

const authRedirect =(state,action)=>{
    return updateState(state,{authRedirectPath:action.authRedirectPath});
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state,action);
        case actionTypes.AUTH_SUCCESS:return authSuccess(state,action);
        case actionTypes.AUTH_FAIL:return authFail(state,action);
        case actionTypes.LOGOUT: return logout(state,action);
        case actionTypes.AUTH_REDIRECT_PATH: return authRedirect(state,action);
        default: return state;
    }
}

export default reducer;