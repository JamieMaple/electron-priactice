export const TYPE = {
  add_one: 'ADD_ONE',
  min_one: 'MIN_ONE',
}

export interface Action {
  type: string,
  num?: number,
}
