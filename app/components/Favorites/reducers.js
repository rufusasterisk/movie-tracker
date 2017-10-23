export const getFavorites = (state = [], action) => {
  switch(action.type) {
    case 'GET_FAVORITES':
      return action.data;
    default:
      return state;

  }
}
