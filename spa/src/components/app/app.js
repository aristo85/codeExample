import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  // BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Router } from 'react-router';
// selectors
import { selectIsAuthenticated } from '../../modules/auth/auth.selectors';
// services
import getHistory from '../../modules/core/services/history.service';
// config
import { config } from '../../config';

import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from '../../modules/core/containers/private-route';

import Header from '../../modules/core/containers/header';
import Sidebar from '../../modules/core/containers/sidebar';
import Balance from '../../pages/balance';
import Funds from '../../pages/add-funds';
import Transfer from '../../pages/transfer';
import Exchange from '../../pages/exchange';
import History from '../../pages/history';
import Profile from '../../pages/profile';
import Notifications from '../../pages/notifications';
import Support from '../../pages/support';
import Preferences from '../../pages/preferences';
import Verification from '../../modules/user/containers/verification';
import CreateSupportTopic from '../../pages/create-support-topic';
import ApiService from '../../modules/core/services/api-service';
import ApiFakeService from '../../modules/core/services/api-fake-service';
import RedirectStatusPages from '../../pages/redirect-status-pages';
import AmlProgram from '../../pages/aml-program';
import PrivacyPolicy from '../../pages/privacy-policy';
import TermsAndConditions from '../../pages/terms-and-conditions';

import './app.scss';
import Spinner from '../../modules/core/components/spinner';
import Dev from '../../pages/__dev';
import PrePaymentMerchantForm from '../../pages/merchant-prepayment/merchant-prepayment-form';

const history = getHistory();

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const apiServiceInstance = (token) => {
    const useFakeService = config.useFakeServices || false;
    return useFakeService ? new ApiFakeService(token) : new ApiService();
  };

  const mainContent = () => {
    return (
      <div className='main-content'>
        {/* todo: move it outside */}
        <Switch>
          <PrivateRoute path='/balance' Component={Balance} />
          <PrivateRoute path='/funds' Component={Funds} />
          <PrivateRoute path='/transfer' Component={Transfer} />
          {/*<PrivateRoute component={Trade} profile={profile} path="/trade" />*/}
          <PrivateRoute path='/exchange' Component={Exchange} />
          <PrivateRoute path='/history' Component={History} />
          <Route path='/profile' component={Profile} />
          <PrivateRoute path='/notifications' Component={Notifications} />
          <Route path='/support' component={Support} />
          <PrivateRoute path='/preferences' Component={Preferences} />
          <Route path='/create-support-topic' component={CreateSupportTopic} />
          <Route
            path='/verification'
            component={() => {
              return <Verification apiService={apiServiceInstance()} />;
            }}
          />
          <Route path='/aml-program' component={AmlProgram} />
          <Route path='/privacy-policy' component={PrivacyPolicy} />
          <Route path='/terms-and-conditions' component={TermsAndConditions} />
          <Route
            path='/success'
            component={() => {
              return <RedirectStatusPages status='success' />;
            }}
          />
          <Route
            path='/fail'
            component={() => {
              return <RedirectStatusPages status='fail' />;
            }}
          />
          <Route path='/pay' component={PrePaymentMerchantForm} />
          {process.env.NODE_ENV === 'development' && (
            <Route path='/__dev' component={Dev} />
          )}
          <Redirect
            from='/'
            to={{ pathname: '/balance', search: location.search }}
            exact
          />
        </Switch>
      </div>
    );
  };

  if (!isAuthenticated) {
    return <Spinner isLoading={true} isAbsolute={true} size='big' />;
  }

  return (
    <div>
      <Router history={history}>
        <Header />
        <main className='main'>
          <div className='main-container' id='main-container'>
            <Sidebar />
            {mainContent()}
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
