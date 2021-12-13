export const Cartreducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.quantity = action.payload.quantity)
            : c.quantity
        ),
      };
    default:
      return state;
  }
};

export const Productreducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "SORT_BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "SORT_BY_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "SORT_BY_RATING":
      return { ...state, byRating: action.payload };
    case "SORT_BY_SEARCH":
      return { ...state, SearchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        SearchQuery: "",
      };

    default:
      return state;
  }
};
