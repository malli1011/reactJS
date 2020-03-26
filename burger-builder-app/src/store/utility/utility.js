export const updateState=(oldObj,updateObj)=>{
    return{
        ...oldObj,
        ...updateObj
    }
}