// redux/reducers.js

const initialState = {
    loggedInUser: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return {
          ...state,
          loggedInUser: action.payload,
        };
      case 'LOGIN_USER':
        // Logic to validate login credentials against stored user data
        // If login successful, return updated state with the logged-in user
        // Otherwise, return the previous state or show an error message
      case 'LOGOUT_USER':
        return {
          ...state,
          loggedInUser: null,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  