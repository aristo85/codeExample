import { createBrowserHistory, History } from 'history';

let history: History;

export const getHistory = (): History => {
  if (history) {
    return history;
  }

  history = createBrowserHistory();

  return history;
};
