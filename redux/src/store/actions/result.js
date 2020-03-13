import * as actionTypes from './actionsTypes';
export const saveResult = (value) => {
    return{
        type: actionTypes.STORE_RESULT,
        result:value
    }
};

export const storeResult = (value) => {
    return (dispatch,getState) =>{
        setTimeout(()=>{
            const oldState = getState().ctr.counter;
            console.log(oldState)
            dispatch(saveResult(value))
        },1000);
        
    }
};


export const deleteResult = (value) => {
    return{
        type: actionTypes.DELETE_RESULT,
        resultElId:value
    }
};

