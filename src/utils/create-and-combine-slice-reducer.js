// @flow
import { combineSliceReducer } from './combine-slice-reducer';
/**
 * Creates and combines an new reducer for a given sliceName
 */
export const createSliceReducer = (
  sliceName: string,
  initialState: any,
  handlers: any
) => {
  function reducer(state: any = initialState, action: any) {
    if (action.type in reducer.handlers) {
      return reducer.handlers[action.type](state, action);
    }
    return state;
  }
  reducer.sliceName = sliceName;
  reducer.handlers = handlers || {};

  reducer.addHandlers = (newHandlers) => {
    reducer.handlers = {
      ...reducer.handlers,
      ...newHandlers,
    };
  };
  return reducer;
};

export function createAndCombineSliceReducer(
  sliceName: string,
  initialState: any,
  handlers: any
) {
  return combineSliceReducer(
    createSliceReducer(sliceName, initialState, handlers)
  );
}
