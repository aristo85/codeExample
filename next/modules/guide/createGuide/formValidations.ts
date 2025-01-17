import {StepMatch} from '@/modules/core/helpers/stepErrorMatch';
import {validLenMessage} from '@/modules/core/services';
import {
  descriptionValidationSchema,
  numberValidation,
} from '@/modules/excursion/CreateExcursionForm/formValidations';
import * as yup from 'yup';

export const guideNameValidationSchema = yup
  .string()
  .trim()
  .required('Введите имя и фамилию гида')
  .min(2, validLenMessage(2, 100))
  .max(100, validLenMessage(2, 100));

export const guidePhoneValidationSchema = (length: number) =>
  yup
    .string()
    .required('Введите номер телефона гида')
    .min(6, 'Недопустимое количество символов')
    .max(15, 'Недопустимое количество символов');

export const guideEmailValidationSchema = yup
  .string()
  .required('Введите email гида')
  .email('Недопустимые символы/формат')
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Недопустимые символы/формат',
  )
  .typeError('Недопустимое значение');

//
// schemas
//
export const step1Schema = (phoneLen: number) =>
  yup.object().shape({
    name: guideNameValidationSchema,
    phone: guidePhoneValidationSchema(10 + phoneLen),
    email: guideEmailValidationSchema,
    description: descriptionValidationSchema('Введите описание гида'),
    avatar: yup
      .array()
      .required('Добавьте фото гида')
      .min(1, 'Добавьте фото гида'),
    birthdayDate: yup.string().required('Добавьте дату рождения гида'),
  });

export const step2Schema = yup.object().shape({
  cityId: yup.string().required('Выберите населенный пункт'),
  maxNumberOfParticipants: numberValidation(
    'Введите максимальное количество участников',
  ),
  travelMode: yup.string().required('Выберите способ передвижения'),
  duration: yup.string().required('Выберите продолжительность'),
  costPerHour: numberValidation('Введите стоимость за 1 час'),
});

const formSchema = {
  date: yup.string().required('form.required_message'),
  timeList: yup
    .array()
    .of(
      yup.object().shape({
        time: yup.string().required('form.required_message'),
      }),
    )
    .required('form.required_message')
    .min(1, 'Добавьте время'),
};
export const step3Schema = yup.object().shape({
  schedule: yup
    .array()
    .test('unique-dates', 'дата не должна повторяться', function (value) {
      const dateValues = value?.map(item => item.date);
      const uniqueDates = new Set(dateValues);
      return dateValues?.length === uniqueDates.size;
    })
    .of(yup.object().shape(formSchema))
    .required('Must have fields')
    .min(1, 'Добавьте дату и время'),
});

export const step4Schema = yup.object().shape({
  photos: yup
    .array()
    .required('Загрузите фотографии')
    .min(6, 'минимум 6 фотографий'),
});

export const stepGuideMatch: StepMatch = {
  1: ['name', 'birthdayDate', 'phone', 'email', 'about', 'avatar'],
  2: [
    'cityId',
    'maxNumberOfParticipants',
    'travelMode',
    'duration',
    'costPerHour',
  ],
  3: ['schedule'],
  5: ['photos'],
};
