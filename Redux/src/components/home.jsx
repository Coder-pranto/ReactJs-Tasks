//* Complete Counter App

const { createStore, combineReducers, applyMiddleware  } = require('redux');
const { default: logger } = require("redux-logger");


//constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';


  const GET_CART_ITEMS = "GET_CART_ITEMS";
  const ADD_CART_ITEMS = "ADD_CART_ITEMS";

//state
const initialCounterState = {
  count: 0,
};

const initialProductState = {
  
  products: ['sugar', 'salt'],
  numberOfProducts: 2,
};


  const initialCartState = {
    cart: ["sugar"],
    numberOfProducts: 1,
  };


//Action
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};

//product actions
const getProductAction = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProductAction = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};


  // cart actions
  const getCartAction = () => {
    return {
      type: GET_CART_ITEMS,
    };
  };
  const addCartAction = (product) => {
    return {
      type: ADD_CART_ITEMS,
      payload: product,
    };
  };

//Reducer(counter)
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

const productReducer =(state = initialProductState, action)=>{
    switch (action.type) {

      case GET_PRODUCTS:
        return {
          ...state,
        };
  
      case ADD_PRODUCTS:
        return {
          products: [...state.products, action.payload],
          numberOfProducts: state.numberOfProducts + 1,
        };
  
      default:
        return state;
    
    }
}

//cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEMS:
      return {
        cart: [...state.cart, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const rootReduer = combineReducers({
  counterR : counterReducer,
  productR: productReducer,
  cartR: cartReducer,
});

//store
const store = createStore(rootReduer,applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());

store.dispatch(getProductAction());
store.dispatch(addProductAction('pen'));
store.dispatch(addProductAction('pencil'));

store.dispatch(getCartAction());
store.dispatch(addCartAction("salt"));
