export const initialState = {count: 0, status: null};

export function reducers(statee, action) {
  switch (action.type) {
    case 'increment':
      return {count: statee.count + 1, status: "increment"};
    case 'decrement':
      return {count: statee.count - 1, status: "decrement"};
    default:
      throw new Error();
  }
}