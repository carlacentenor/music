export const increment = (id) => ({
  type: 'INCREMENT',
  payload: id
});

export const decrement = (id) => ({
  type: 'DECREMENT',
  payload: id
});

export const select = (object) => ({
  type: 'SELECT',
  payload: object
});

export const next = (id) => ({
  type: 'NEXT',
  payload:id
});


export const before = (id) => ({
  type: 'BEFORE',
  payload:id
});


export const showList=(data)=> ({
  type: 'SHOW_LIST',
  payload: data
})
 