export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment(number) {
  return {
    type: INCREMENT,
    number,
  };
}

export function decrement(number) {
  return {
    type: DECREMENT,
    number,
  };
}



