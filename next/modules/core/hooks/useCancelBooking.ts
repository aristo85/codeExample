import {useState} from 'react';
import {
  useCalculatePenaltyMutation,
  useCancelBookingMutation,
} from '@/modules/booking/apiBookingSlice';
import {useNotification} from './useNotification';
import {useSelector} from 'react-redux';
import {RoleTypes, selectUserToken} from '@/modules/auth/authSlice';
import jwtDecode from 'jwt-decode';

export const useCancelBooking = () => {
  const toast = useNotification();
  const [cancellationId, setCancellationId] = useState<number | null>(null);
  const [penaltyAmount, setPenaltyAmount] = useState<number | null>(null);
  const [isCancellationModalOpen, setIsCancellationModalOpen] =
    useState<boolean>(false);
  const token = useSelector(selectUserToken);

  const [calculatePenalty, {isLoading: isCalculatePenaltyLoading}] =
    useCalculatePenaltyMutation();
  const [cancel, {isLoading: isLoadingCancel}] = useCancelBookingMutation();

  const modalCancelButtonClickFunction = () => {
    setCancellationId(null);
    setIsCancellationModalOpen(false);
  };

  const user = jwtDecode<{user: {roleType: RoleTypes}}>(token as string)?.user;
  const isTourist = user.roleType === RoleTypes.TOURIST;

  const onCancelButtonClick = async (id: number) => {
    if (isTourist) {
      try {
        setCancellationId(id);
        const response = await calculatePenalty(id).unwrap();
        setPenaltyAmount(response.data.amount);
        setIsCancellationModalOpen(true);
      } catch (error: any) {
        setCancellationId(null);
        setIsCancellationModalOpen(false);
      }
    } else {
      setCancellationId(id);
      setIsCancellationModalOpen(true);
    }
  };

  const onCancelButtonWithoutCalculatePenaltyClick = (id: number) => {
    setCancellationId(id);
    setIsCancellationModalOpen(true);
  };

  const modalAcceptButtonClickFunction = async () => {
    if (!cancellationId) return;
    try {
      const response = await cancel({id: cancellationId}).unwrap();
      response.success && toast('Вы успешно отменили бронирование', 'success');
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsCancellationModalOpen(false);
      setCancellationId(null);
    }
  };

  return {
    cancellationId,
    penaltyAmount,
    isCancellationModalOpen,
    isCalculatePenaltyLoading,
    isLoadingCancel,
    onCancelButtonClick,
    modalCancelButtonClickFunction,
    modalAcceptButtonClickFunction,
    onCancelButtonWithoutCalculatePenaltyClick,
  };
};
