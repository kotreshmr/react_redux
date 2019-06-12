const initialState = {
  name: "",
  history: [{}]
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_PROFILE":
      break;

    case "UPDATE_PROFILE":
      // newState.name = action.val;
      // break;
      return {
        ...state,
        name: action.val,
        history: state.history.concat({ name: action.val })
      };
    default:
      break;
  }
  // console.log(newState.name);
  // console.log(state.name);
  return newState;
};
export default reducer;
