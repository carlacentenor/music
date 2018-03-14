export const increment = (song) => ({
  type: 'INCREMENT',
  payload: song
});

export const decrement = (id) => ({
  type: 'DECREMENT',
  id
});