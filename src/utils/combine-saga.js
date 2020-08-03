// @flow
let sagaMiddlewareInstance;

let sagaToCombine = [];

const combine = () => {
  if (!sagaMiddlewareInstance) {
    return;
  }

  if (sagaToCombine.length > 0) {
    sagaToCombine.forEach((saga) => {
      sagaMiddlewareInstance.run(saga);
    });
    sagaToCombine = [];
  }
};

export const initCombineSaga = (sagaMiddleware: any) => {
  sagaMiddlewareInstance = sagaMiddleware;
    combine();
};

export const combineSaga = (saga: any) => {
  if (saga) {
    sagaToCombine.push(saga);
      combine();
  }
};
