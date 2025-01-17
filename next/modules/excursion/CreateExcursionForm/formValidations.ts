import {validLenMessage} from '@/modules/core/services';
import * as yup from 'yup';
import {StepMatch} from '@/modules/core/helpers/stepErrorMatch';

export const descriptionValidationSchema = (reqTxt: string) =>
  yup
    .string()
    .trim()
    .required(reqTxt)
    .min(0)
    .max(3000, 'Недопустимое количество символов');

export const guideEmailValidationSchema = yup
  .string()
  .required('Введите email экскурсовода')
  .email('Недопустимые символы/формат')
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'Недопустимые символы/формат',
  )
  .typeError('Недопустимое значение');

export const guidePhoneValidationSchema = (length: number) =>
  yup
    .string()
    .required('Введите номер телефона экскурсовода')
    .min(6, 'Недопустимое количество символов')
    .max(15, 'Недопустимое количество символов');

export const guideNameValidationSchema = yup
  .string()
  .trim()
  .required('Введите имя экскурсовода')
  .min(2, validLenMessage(2, 100))
  .max(100, validLenMessage(2, 100));

export const excursionNameValidation = yup
  .string()
  .trim()
  .required('Введите название экскурсии')
  .min(2, validLenMessage(2, 160))
  .max(160, validLenMessage(2, 160));

export const numberValidation = (reqTxt: string) =>
  yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === '' ? undefined : value;
    })
    .typeError('Только цифры')
    .required(reqTxt)
    .min(1, 'Недопустимое количество символов')
    .max(100000, 'Недопустимое количество символов');

//
// schemas
//
export const step1Schema = (phoneLen: number) =>
  yup.object().shape({
    name: excursionNameValidation,
    guideName: guideNameValidationSchema,
    guidePhone: guidePhoneValidationSchema(10 + phoneLen),
    guideEmail: guideEmailValidationSchema,
    description: descriptionValidationSchema('Введите описание экскурсии'),
    guideAvatar: yup
      .array()
      .required('Добавьте фото экскурсовода')
      .min(1, 'Добавьте фото экскурсовода'),
  });

export const step2Schema = yup.object().shape({
  withChildren: yup.boolean(),
  cityId: yup.string().required('Выберите населенный пункт'),
  maxNumberOfParticipants: numberValidation(
    'Введите максимальное количество участников',
  ),
  travelMode: yup.string().required('Выберите способ передвижения'),
  duration: yup.string().required('Выберите продолжительность'),
  adultPrice: yup
    .string() // Treat it as a string initially
    .test('isAdultPriceValid', 'Default message', function (value) {
      const {type} = this.parent;
      const defaultMessage = 'Введите стоимость экскурсии за взрослого';
      const individualMessage = 'Введите стоимость экскурсии';

      const messageToUse =
        type === 'INDIVIDUAL' ? individualMessage : defaultMessage;

      if (value === undefined || value.trim() === '') {
        // Manually handle the required validation
        return this.createError({message: messageToUse});
      }

      const parsedValue = parseFloat(value);
      if (isNaN(parsedValue) || `${parsedValue}`.length !== value.length) {
        return this.createError({message: 'Только цифры'});
      }

      // Check min and max values
      if (parsedValue < 1 || parsedValue > 100000) {
        return this.createError({
          message: 'Недопустимое количество символов',
        });
      }

      return true;
    }),
  childrenPrice: yup
    .string()
    .test(
      'isChildrenPriceValid',
      'Введите стоимость экскурсии за ребенка',
      function (value) {
        const {withChildren, type} = this.parent;
        if (withChildren === true && type === 'GROUP') {
          if (typeof value === 'string' && value.trim() !== '') {
            const parsedValue = parseInt(value, 10);
            return (
              !isNaN(parsedValue) &&
              parsedValue >= 1 &&
              `${parsedValue}`.length === value.length
            );
          }
          return false; // 'childrenPrice' is required, so an empty string is not allowed
        }
        return true; // 'childrenPrice' is not required when 'withChildren' is false
      },
    ),
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
  meetingPlace: yup.object().shape({
    lat: yup.string().required('form.required_message'),
    lng: yup.string().required('form.required_message'),
  }),
  meetingPlaceDescription: yup
    .string()
    .required('Введите точное место встречи'),
});

export const step5Schema = yup.object().shape({
  mainPhoto: yup
    .array()
    .required('Загрузите главную фотографию')
    .min(1, 'Загрузите главную фотографию'),
  photos: yup
    .array()
    .required('Загрузите фотографии')
    .min(6, 'минимум 6 фотографий'),
});

export const stepExcursionMatch: StepMatch = {
  1: [
    'name',
    'guideName',
    'guidePhone',
    'guideEmail',
    'description',
    'guideAvatar',
  ],
  2: [
    'cityId',
    'maxNumberOfParticipants',
    'travelMode',
    'duration',
    'adultPrice',
    'childrenPrice',
  ],
  3: ['schedule'],
  4: ['meetingPlace', 'meetingPlaceDescription'],
  5: ['mainPhoto', 'photos'],
};
