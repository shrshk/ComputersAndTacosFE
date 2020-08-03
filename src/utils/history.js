// @flow
/**
 * Holds the application BrowserHistory
 */
let history;

export function getHistory() {
  return history;
}

export function setHistory(value: any) {
  history = value;
  return history;
}
