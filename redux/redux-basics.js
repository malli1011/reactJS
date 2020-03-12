const redux = require('redux'); // nodejs syntax 
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Create Reducer
const rootReducer = (state = initialState, action) => {

    if (action === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1

        };

    }
    if (action === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value

        };
    }

    return state;

}

//create store
const store = createStore(rootReducer);
console.log(store.getState());

//subscription 
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
})

//Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());



