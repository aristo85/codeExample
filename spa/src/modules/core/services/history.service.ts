import { createBrowserHistory, History } from 'history';

let history: History;

const getHistory = (): History => {
  if (history) {
    return history;
  }

  history = createBrowserHistory();

  return history;
};

export default getHistory;
