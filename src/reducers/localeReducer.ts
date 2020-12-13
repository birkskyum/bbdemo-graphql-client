export const localeReducer = (state, action) => {
  switch(action.type) {
    case 'setLocale': {
      return {
        ...state,
        locale: action.locale,
        loading: false,
      }
    }
    case 'errored': {
      return { 
        ...state, 
        loading: false, 
        error: action.error };
    }
    default:
      return state;
  }
}
