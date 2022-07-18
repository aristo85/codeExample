import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
// components
import AppLayout from 'modules/core/components/app-layout';
// services
import { getHistory } from 'modules/core/services/history.service';
// routes
import { routes } from 'pages/routes';
import { selectIsAdmin } from 'modules/auth/auth.selectors';
import { useSelector } from 'react-redux';
import NotAdmin from 'pages/not-admin';

const history = getHistory();

const RoutesProvider: FC = () => {
  const isAdmin = useSelector(selectIsAdmin);

  return (
    <Router history={history}>
      <AppLayout>
        <Switch>
          {isAdmin ? (
            routes.map((route, index) => <Route {...route} key={index} />)
          ) : (
            <Route component={NotAdmin} />
          )}
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default RoutesProvider;
