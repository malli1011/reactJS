import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}


export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userId");
    return {
        type: actionTypes.LOGOUT
    }
}

export const userLogout = (expirationTime) => {
    return dispatch => {

        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000);
    }

}

export const authRedirect = (redirectPath) => {
    return {
        type: actionTypes.AUTH_REDIRECT_PATH,
        authRedirectPath: redirectPath
    }
}

export const auththenticate = (email, password, isSignUp) => {

    return dispath => {
        dispath(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8MCDrQoQgq8bgCxmwoILdi3JSl37V7vE";
        if (!isSignUp) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8MCDrQoQgq8bgCxmwoILdi3JSl37V7vE";
        }
        axios.post(url, authData)
            .then(res => {
                console.log(res.data);
                localStorage.setItem("token", res.data.idToken);
                const expDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem("expirationDate", expDate);
                localStorage.setItem("userId", res.data.localId);
                dispath(authSuccess(res.data.idToken, res.data.localId))
                dispath(userLogout(res.data.expiresIn))
            })
            .catch(err => {
                dispath(authFail(err.response.data.error.message))
            })
    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem("expirationDate"));
            if (expirationDate <= new Date()) {
                dispatch(logout())
            }else{
                const userId=localStorage.getItem("userId");
                dispatch(authSuccess(token,userId));
                dispatch(userLogout((expirationDate.getTime() - new Date().getTime())/1000));
            }
        }

    }
}
