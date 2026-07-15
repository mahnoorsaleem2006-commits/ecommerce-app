import { createContext, useReducer, useEffect } from 'react';

// Create Context
export const CartContext = createContext();

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Error loading cart:', error);
  }
  return { items: [], totalItems: 0, totalPrice: 0 };
};

// Cart Reducer - handles all cart actions
const cartReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        // If item exists, increase quantity
        newState = {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          )
        };
      } else {
        // If new item, add to cart
        newState = {
          ...state,
          items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }]
        };
      }

      // Calculate totals
      const totalItems = newState.items.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newState.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      newState = { ...newState, totalItems, totalPrice };
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }

    case 'REMOVE_ITEM': {
      newState = {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

      const totalItems = newState.items.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newState.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      newState = { ...newState, totalItems, totalPrice };
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }

    case 'UPDATE_QUANTITY': {
      newState = {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        )
      };

      const totalItems = newState.items.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = newState.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      newState = { ...newState, totalItems, totalPrice };
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }

    case 'CLEAR_CART': {
      newState = { items: [], totalItems: 0, totalPrice: 0 };
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    }

    default:
      return state;
  }
};

// Cart Provider Component - wraps the app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, loadCartFromStorage());

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};