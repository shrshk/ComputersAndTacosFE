// @flow
let store;
let createRootReducer;

let reducersToAdd;

const combine = () => {
  if (!store) {
    return;
  }

  if (reducersToAdd) {
    // eslint-disable-next-line
    for (const sliceName in reducersToAdd) {
      if (Object.prototype.hasOwnProperty.call(reducersToAdd, sliceName)) {
        const reducer = reducersToAdd[sliceName];

        if (!(sliceName in store.asyncReducers)) {
          store.asyncReducers[sliceName] = reducer;
        }
      }
    }
    reducersToAdd = undefined;
    store.replaceReducer(createRootReducer(store.asyncReducers));
  }
};

export const initCombineSliceReducer = (
  reduxStore: any,
  rootReducerCreator: (asyncReducers: any[]) => any
) => {
  store = reduxStore;
  createRootReducer = rootReducerCreator;
  combine();
};

export const combineSliceReducer = (reducer: any) => {
  reducersToAdd = reducersToAdd || {};
  reducersToAdd[reducer.sliceName] = reducer;
  combine();
  return reducer;
};
