import {useEffect} from 'react';
import Landing from '@/modules/home/components/Landing';
import {useRouter} from 'next/router';
import {useAppDispatch} from '@/modules/core/hooks';
import {selectProfileData, setAuthModal} from '@/modules/auth/authSlice';
import {AuthType} from '@/modules/auth/types';
import {useRegisterEmailconfirmMutation} from '@/modules/core/api/apiSlice';
import Spinner from '@/modules/core/components/Spinner';
import {useSelector} from 'react-redux';

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const profile = useSelector(selectProfileData);

  const [registerEmailconfirm, {isLoading, isError, error}] =
    useRegisterEmailconfirmMutation();
  const {resettoken, regtoken, modal} = router.query;

  useEffect(() => {
    if (resettoken) {
      dispatch(setAuthModal(AuthType.RESET));
    }
    if (modal) {
      dispatch(setAuthModal(AuthType.LOGIN));
    }
    if (regtoken) {
      registerEmailconfirm({confirmationToken: regtoken})
        .unwrap()
        .then(result => {
          result.success &&
            dispatch(setAuthModal(AuthType.EMAIL_CONFIRM_SUCCESS));
        })
        .catch();
    }
  }, [regtoken, resettoken, modal]);

  return (
    <>
      <Spinner showSpinner={isLoading} />
      <Landing />
    </>
  );
}
