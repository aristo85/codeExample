import { FC } from 'react';
import { useSelector } from 'react-redux';
// components
import Spinner from 'modules/core/components/spinner';
// import UserDeniedPopup from '../../components/user-denied-popup';
// selectors
import { selectIsAuthenticated } from 'modules/auth/auth.selectors';

const AuthProvider: FC = ({ children }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Spinner isAbsolute isLoading />;
  }

  return <>{children}</>;
};

export default AuthProvider;
