import {CancellationRoomPolicy} from '@/modules/placement/detail/detail.types';
import dayjs from 'dayjs';

export const privacyPolicyText =
  'Оформляя заказ, вы соглашаетесь с нашей политикой конфиденциальности. Мы защищаем ваши данные и используем их только для обработки заказа и обеспечения качественного обслуживания. Мы не передаем вашу информацию третьим лицам без вашего согласия. Если у вас есть вопросы, свяжитесь с нами.';

export const termsOfDataUseText =
  'Соглашаясь с условиями использования данных, вы разрешаете нам использовать их в соответствии с нашей политикой конфиденциальности. Мы не передаем данные третьим лицам без вашего согласия, кроме случаев, когда это необходимо для выполнения наших обязательств или по закону. Если у вас есть вопросы, свяжитесь с нами.';

export const cancelReservationText = (
  cancellationPolicy?: CancellationRoomPolicy,
): string => {
  const cancellationLocalDate = dayjs(
    cancellationPolicy?.freeCancellationDeadlineLocal,
  ).format('DD.MM.YYYY HH:mm');

  const initialMessage = 'В случае отмены бронирования';

  if (cancellationPolicy?.freeCancellationPossible) {
    return cancellationPolicy?.freeCancellationDeadlineLocal
      ? `${initialMessage} до ${cancellationLocalDate} (по местному времени отеля) вам возвращается вся оплаченная сумма. При отмене после ${cancellationLocalDate}
      с вас будет удержан штраф в размере ${cancellationPolicy.penaltyAmount} ₽.`
      : `${initialMessage}  вам возвращается оплаченная сумма.`;
  }

  return `${initialMessage} вам возвращается оплаченная сумма с удержанием штрафа в размере ${cancellationPolicy?.penaltyAmount} ₽.`;
};
