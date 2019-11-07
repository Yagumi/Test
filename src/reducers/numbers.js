import { INCREMENT, DECREMENT } from '../actions/numbers';

export const initialState = { number: 0 };

function numbers(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, number: state.number + 1 };
    case DECREMENT:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}

export default numbers;
