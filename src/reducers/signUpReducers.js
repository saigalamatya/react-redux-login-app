// Sign Up Reducer
const signUpReducerDefaultState = {
  user: ''
};

export default (state = signUpReducerDefaultState, action) => {
  console.log(action.payload);
  switch(action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
};