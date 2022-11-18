const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      let newCart = [];

      const searchItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === payload.id
      );

      if (searchItemIndex === -1) {
        const newCartItem = { ...payload, quantity: 1 };
        newCart = [...state.cart, newCartItem];
      } else {
        newCart = [...state.cart];
        newCart[searchItemIndex].quantity += 1;
      }

      return {
        ...state,
        cart: newCart,
      };
    case "INCREASE_QUANTITY":
      const congsp = state.cart.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
      return { ...state, cart: congsp };
    case "DECREASE_QUANTITY":
      const trusp = state.cart.map((item) => {
        if (item.id === payload.id) {
          if (item.quantity <= 1) {
            return { ...item };
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        } else {
          return { ...item };
        }
      });
      return { ...state, cart: trusp };
    case "DELETE_CART_ITEM":
      const remainCart = state.cart.filter((cart) => cart.id !== payload.id);
      return { ...state, cart: remainCart };

    default:
      return state;
  }
};

export default reducer;
