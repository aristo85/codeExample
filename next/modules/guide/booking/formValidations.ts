import {
  commentsValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
  phoneValidationSchema,
} from '@/modules/core/services';
import * as yup from 'yup';

export const numberValidation = (totalMax: number, minValue: number) =>
  yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === '' ? undefined : value;
    })
    .min(minValue, `Минимальное количество участников ${minValue}`)
    .max(totalMax, `Максимальное количество участников ${totalMax}`)
    .typeError('Только цифры')
    .required('Введите количество участников');

const totalParticipantsValidation = (maxParticipants: number) =>
  yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === '' ? undefined : value;
    })
    .typeError('Только цифры')
    .test(
      'total-participants',
      `максимальное количество участников ${maxParticipants}`,
      function (value) {
        const adultCount = this.parent.adultCount || 0;
        const childrenCount = value || 0;
        const totalParticipants = adultCount + childrenCount;
        return totalParticipants <= maxParticipants;
      },
    );

export const step1Schema = yup.object().shape({
  date: yup.string().required('Выберите дату'),
  time: yup.string().required('Выберите время'),
  duration: yup.string().required('Выберите длительность'),
});

export const step2Schema = (phoneLen: number, maxParticipants: number) =>
  yup.object().shape({
    firstName: nameValidationSchema('Введите ваше имя'),
    lastName: nameValidationSchema('Введите вашу фамилию'),
    phone: phoneValidationSchema(10 + phoneLen),
    email: emailValidationSchema,
    adultCount: numberValidation(maxParticipants, 1),
    childrenCount: totalParticipantsValidation(maxParticipants),
    bookingComments: commentsValidationSchema,
  });
