export const initialState = {
  user: null,
  id:null,
  name: null,
  contact: null,
  email: null,
  arrivalTime: null,
  bookingDate: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_BOOKING: "SET_BOOKING",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_BOOKING:
      return {
        ...state,
        id:action.id,
        name: action.name,
        email: action.email,
        contact: action.contact,
        bookingDate: action.bookingDate,
        arrivalTime: action.arrivalTime,
      };

    default:
      return state;
  }
};

export default reducer;
